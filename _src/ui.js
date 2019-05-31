// JS for UI components
import * as utils from "./utils";

const SKINNY_HEADER_START = 100;
const SKINNY_HEADER_CLASS = "skinny";
const IS_VISIBLE_CLASS = "visible"; // change to "show"
const IS_ACTIVE_CLASS = "active";
const SHOW_MOBILE_NAV_CLASS = "show-mobile-nav";

const ui = {
  init: () => {
    ui.body = document.querySelector( "body" );
    ui.header.elem = document.querySelector( "header" );
    ui.mobileNav.elem = document.querySelector( "nav.mobile" );
    ui.mobileNav.toggle = document.querySelector( ".mobile-nav-toggle" );

    ui.header.init();
    ui.mobileNav.init();
  },
  header: {
    elem: null,
    handleHeight: () => {
      let scrollHeight = window.scrollY || document.documentElement.scrollTop;
      if (scrollHeight > SKINNY_HEADER_START) {
        ui.header.shrink();
      } else {
        ui.header.grow();
      }
    },
    grow: () => ui.header.elem.classList.remove( SKINNY_HEADER_CLASS ),
    shrink: () => ui.header.elem.classList.add( SKINNY_HEADER_CLASS ),
    init: () => {
      window.addEventListener( "scroll", () => {
        ui.header.handleHeight();
      });
    }
  },
  mobileNav: {
    elem: null,
    toggle: null,
    show: (lock = true) => {
      ui.body.classList.add( SHOW_MOBILE_NAV_CLASS );
      if (lock)
        ui.scroll.lock();
    },
    hide: (unlock = true) => {
      ui.body.classList.remove( SHOW_MOBILE_NAV_CLASS );
      if (unlock)
        ui.scroll.unlock();
    },
    isVisible: () => ui.body.classList.contains( SHOW_MOBILE_NAV_CLASS ),
    init: () => {
      // init toggle
      ui.mobileNav.toggle.addEventListener( "click", () => {
        if (ui.mobileNav.isVisible()) {
          ui.mobileNav.hide();
        } else {
          ui.mobileNav.show();
        }
      })
    }
  },
  scroll: {
    lock: () => {
      ui.body.style.overflow = "hidden";
      document.ontouchmove = (event) => event.preventDefault();
    },
    unlock: () => {
      ui.body.style.overflow = "auto";
      document.ontouchmove = (event) => true;
    }
  }
}

export default ui;
