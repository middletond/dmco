// JS FOR HELLO PAGE

window.onload = function() {

	var helloForm = document.querySelector( "form.hello" );
	var helloTextButton = document.getElementById( "helloTextButton" );
	var helloText = document.getElementById( "helloText" );

	helloTextButton.addEventListener( "click", () => {
		if (helloText.classList.contains( "hidden" )) {
			// show the text
			helloText.classList.remove( "hidden" );
			// hide the button
			helloTextButton.classList.add( "hidden" );
		}
	})

	// hello form
	helloForm.addEventListener("submit", function(event) {
		event.preventDefault();

		var inputs = event.target.elements;
		var email = inputs.namedItem("email").value;
		var name = inputs.namedItem("name").value;
		var message = inputs.namedItem("message").value;

		console.log({
			email: email,
			name: name,
			message: message
		})
	})

}
