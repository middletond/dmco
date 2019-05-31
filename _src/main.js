import smoothscroll from "smoothscroll-polyfill";

import forms from "./forms";
import ui from "./ui";

// init polyfills
smoothscroll.polyfill();
// init site components
forms.contact.init();
ui.init();

// console.log("webpack is working.");
