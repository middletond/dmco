import * as utils from "./utils";
import messenger from "./messenger";

const LOADING_CLASS = "loading";
const SUCCESS_CLASS = "success";
const FAILURE_CLASS = "failure";
const IS_VISIBLE_CLASS = "show";

const MIN_LOAD_DURATION = 2000;
const OUTCOME_MESSAGE_DURATION = 20000;

const beginLoading = (form, button) => {
  form.classList.remove(FAILURE_CLASS);
  form.classList.remove(SUCCESS_CLASS);
  // clear statuses
  utils.arrayFromQuery( ".status-text", form ).forEach((status) => {
    status.classList.remove(IS_VISIBLE_CLASS);
    status.innerText = "";
  })
  form.classList.add(LOADING_CLASS);
  button.disabled = true;
}

const endLoading = (form, button) => {
  form.classList.remove(LOADING_CLASS);
  button.disabled = false;
}

const clearValues = (form) => {
  utils.arrayFromQuery( "input, textarea", form ).forEach( (elem) => {
    elem.value = "";
  })
  utils.arrayFromQuery( "select", form ).forEach( (select) => {
    select.selectedIndex = "0";
  })
}

const clean = (data) => {
  return Object
    .keys(data)
    .reduce((cleaned, key) => {
      const value = data[key];
      cleaned[key] = value.trim();
      return cleaned;
    }, {})
}

const validate = (data) => {
  const validationErrors = Object.keys(data).reduce((errors, key) => {
    const value = data[key];
    if (!value)
      errors[key] = ["This field is required"];
    return errors;
  }, {})
  if ((Object.keys(validationErrors).length)) {
    return { ...validationErrors,
      error: "Oops, looks like we need a bit more info. Please correct the fields indicated above."
    }
  }
  return data;
}

const submit = (form, data) => {
  const button = form.querySelector("button[type='submit']");
  const buttonText = button.innerText;
  const successText = button.dataset.successText || "Success!";
  const failureText = button.dataset.failureText || "Couldn't send :(";

  beginLoading(form, button);

  (function(data) {
    const validatedData = validate(clean(data));
    if (validatedData.error) {
      return Promise.resolve(validatedData);
    }
    return messenger.send(validatedData, "New inquiry!");
  })(data)
  .then(
    data => {
      endLoading( form, button );
      if (!data.error) { // success
        const formStatus = form.querySelector(".form-status");
        formStatus.innerHTML = "<div><b>Success!</b> We've received your message and will reach out to you shortly.</div>";
        formStatus.classList.add(IS_VISIBLE_CLASS);

        utils.scrollTo(form.parentNode);
        form.classList.add(SUCCESS_CLASS);
        button.innerText = successText;

        clearValues( form );
        window.setTimeout(() => { // reset form
          form.classList.remove(SUCCESS_CLASS);
          button.innerText = buttonText;
        }, OUTCOME_MESSAGE_DURATION);
      }
      else { // server error or invalid form data
        const formStatus = form.querySelector(".form-status");
        formStatus.innerHTML = data.error;
        formStatus.classList.add(IS_VISIBLE_CLASS);

        utils.scrollTo(form.parentNode);
        form.classList.add(FAILURE_CLASS);
        //
        Object
          .keys(data)
          .forEach(key => {
            if (key != "error") {
              const field = form.querySelector("#" + key + "_field");
              const status = field.querySelector(".status-text");
              const errorMsg = data[key][0]; // error messages are in arrays
              if (errorMsg) {
                status.innerHTML = errorMsg;
                status.classList.add(IS_VISIBLE_CLASS);
              }
            }
          })
      }
    }
  )
}

const forms = {
  contact: {
    init: () => {
      const form = document.querySelector("form.contact");

      if (!form) return false;

      form.addEventListener("submit", event => {
    		event.preventDefault();
    		const inputs = event.target.elements;

        return submit(form, {
    			email: inputs.namedItem("email").value,
          name: inputs.namedItem("name").value,
    			message: inputs.namedItem("message").value
    		})
    	})
    }
  }
}

export default forms;
