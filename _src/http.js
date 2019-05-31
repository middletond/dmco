import "whatwg-fetch";

const HTTP_NETWORK_ERROR = 0;
const HTTP_OK = 200;
const HTTP_CREATED = 201;
const HTTP_BAD_REQUEST = 400;
const HTTP_UNAUTHORIZED = 401;
const HTTP_NOT_FOUND = 404;
const HTTP_SERVER_ERROR = 500;

const MIN_POST_DURATION = 1000;

const GENERIC_HTTP_ERROR_MESSAGE = "<div>Well, this is embarrassing. There was a technical problem submitting your information. <a href='mailto:dave@davemiddleton.co'>Email us instead?</a></div>"

const messages = {
  0: GENERIC_HTTP_ERROR_MESSAGE,
  401: GENERIC_HTTP_ERROR_MESSAGE,
  404: GENERIC_HTTP_ERROR_MESSAGE,
  400: GENERIC_HTTP_ERROR_MESSAGE,
  500: GENERIC_HTTP_ERROR_MESSAGE,
}

export const get = (url) => {
  return responseToJSON(window.fetch(url))
}

export const post = (url, data) => {
  return responseToJSON(window.fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  }), MIN_POST_DURATION)
}

export const responseToJSON = (fetched, delay = 0) => {
  let responseError = false;

  const isJSON = (response) => {
    const contentType = response.headers.get("content-type") || "";
    return contentType.includes("application/json");
  }
  return fetched
  .then(
    response => {
      if (!(response.status == HTTP_CREATED || response.status == HTTP_OK))
        responseError = messages[response.status];
      return (isJSON(response)) ? response.json() : {};
    },
    error => { // network error
      responseError = messages[HTTP_NETWORK_ERROR];
      return {};
    }
  )
  .then(
    data => { // wait for a bit to make sure loading isn't choppy looking
      if (responseError)
        data.error = responseError;
      return new Promise(resolve => setTimeout(
        () => resolve(data), delay
      ))
    }
  )
}
