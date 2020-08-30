import "./parts/popup";
import "./parts/form";
import "./parts/mmenu-light";
import "./parts/mmenu-light.polyfills";

// Owl Carousel

$(function () {
  const owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    nav: false,
    animateOut: "fadeOut",
    animateIn: "flipInX",
    stagePadding: 0,
    smartSpeed: 450,
    autoplay: true,
  });
});

// MMenu
const menu = new MmenuLight(document.querySelector("#menu"), "all");

const navigator = menu.navigation({
  slidingSubmenus: true,
  title: "Основное меню сайта",
});

const drawer = menu.offcanvas({
  // position: 'left'
});

//	Open the menu.
document.querySelector('a[href="#menu"]').addEventListener("click", (evnt) => {
  evnt.preventDefault();
  drawer.open();
});