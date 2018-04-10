// JS FOR HELLO PAGE

window.onload = function() {

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

}