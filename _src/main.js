import smoothscroll from "smoothscroll-polyfill";

import forms from "./forms";

// init polyfills
smoothscroll.polyfill();
// init site components
forms.contact.init();

console.log("webpack is working.");

// Init mobile nav toggle.
const IS_VISIBLE_CLASS = "visible";
const IS_ACTIVE_CLASS = "active";

var mobile_nav_toggle = document.querySelector( ".mobile-nav-toggle" );
var mobile_nav = document.querySelector( "nav.mobile" );
var body = document.querySelector( "body" );

mobile_nav_toggle.addEventListener( "click", function () {
  if (mobile_nav_toggle.classList.contains( IS_ACTIVE_CLASS )) {
    mobile_nav_toggle.classList.remove( IS_ACTIVE_CLASS );
    mobile_nav.classList.remove( IS_VISIBLE_CLASS );
    // allow body to scroll again
    body.style.overflow = "auto";
    document.ontouchmove = function (e) {
      return true;
    }
  } else {
    mobile_nav_toggle.classList.add( IS_ACTIVE_CLASS );
    mobile_nav.classList.add( IS_VISIBLE_CLASS );
    // make sure body doesn't scroll in background
    body.style.overflow = "hidden";
    document.ontouchmove = function (e) {
      e.preventDefault();
    }
  }
})
