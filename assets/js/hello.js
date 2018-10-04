// JS FOR HELLO PAGE

var SLACK_ENDPOINT = "https://hooks.slack.com/services/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";
var LOADING_CLASS = "loading";
var SUCCESS_CLASS = "success";
var FAILURE_CLASS = "failure";
var MIN_LOAD_DURATION = 1000;
var OUTCOME_MESSAGE_DURATION = 3000;

hello = {
	init: function() {
		var form = document.querySelector("form.hello");
		var button = document.querySelector("form.hello input[type='submit']");

		form.addEventListener("submit", function(event) {
			event.preventDefault();

			var inputs = event.target.elements;
			var email = inputs.namedItem("email").value;
			var name = inputs.namedItem("name").value;
			var message = inputs.namedItem("message").value;

			form.classList.add(LOADING_CLASS);
			button.value = "Sending...";
			button.disabled = true;

			this.toSlack("Someone just said hello!", {
				email: email,
				name: name,
				message: message
			})
			.then(
				function(response) {
					form.classList.remove(LOADING_CLASS);
					form.classList.add(SUCCESS_CLASS);
					button.value = "Sent!";
					window.setTimeout(function() {
						form.classList.remove(SUCCESS_CLASS);
						button.value = "Send Message";
						button.disabled = false;
					}, OUTCOME_MESSAGE_DURATION);
				},
				function(error) {
					form.classList.remove(LOADING_CLASS);
					form.classList.add(FAILURE_CLASS);
					button.value = "Couldn't Send :(";
					button.disabled = false;
				}
			)
		}.bind(this))
	},
	toSlack: function(headline, fields) {
		return fetch(SLACK_ENDPOINT, {
			method: "POST",
			body: JSON.stringify({
				text: headline,
				attachments: [{
					"title": "Details",
					"fallback": "Details",
					"fields": Object.keys(fields).map(function(key) {
						return {
							"title": key,
            	"value": fields[key],
            	"short": true,
						}
					})
				}]
			}),
			// can't use "application/json" bc polyfill version must use CORS
			headers: { "Content-Type": "text/plain" },
			mode: "no-cors"
		}) // sleep for `MIN_LOAD_DURATION`
		.then(function(response) {
			 return new Promise(function(resolve) {
				 return setTimeout(function() {resolve(response)}, MIN_LOAD_DURATION)
			 })
		 })
	}
}

hello.init = hello.init.bind(hello);
hello.toSlack = hello.toSlack.bind(hello);
