"use strict";
import $ from "jquery";
import {WOW} from "wowjs";
import simpleParallax from "simple-parallax-js";
import simplebar from "simplebar";



var wow = new WOW({
    live: false
}).init();


//burger
window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header__list"),
    menuItem = document.querySelectorAll(".header__link"),
    hamburger = document.querySelector(".header__burger"),
    overflowHidden = document.querySelector("body");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("burger_active");
    menu.classList.toggle("menu_active");
    overflowHidden.classList.toggle("overflow-hidden-y");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("burger_active");
      menu.classList.toggle("menu_active");
      overflowHidden.classList.toggle("overflow-hidden-y");
    });
  });
});

if (document.querySelector(".page1__img")) {
  document.addEventListener("scroll", function (e) {
    var content = document.querySelector("body");
    var scrolled = document.scrollingElement.scrollTop;
    var position = content.offsetTop;
    var header = document.querySelector("header");
    let firstImg = document.querySelector(".page1__img");

    if (scrolled > position + 60) {
      content.classList.add("header-bgc");
    } else {
      content.classList.remove("header-bgc");
      content.classList.add("header-none-bgc");
    }

    if (scrolled > position + 1200) {
      firstImg.style.display = "none";
    } else {
      firstImg.style.display = "block";
    }
  });
}

if (document.querySelector(".btn_1")) {
  // animate fix
  function btn1() {
    let btnMain = document.querySelector(".btn_1");

    let imgFirst = document.querySelector(".page1__row");

    imgFirst.style.opacity = "1";

    btnMain.style.display = "inline-block";
  }

  setTimeout(btn1, 1000);
}

function parallaxInit() {
  let firstBgParallax = document.querySelector(".parallax");

  new simpleParallax(firstBgParallax, {
    orientation: "up left",
    overflow: true,
    delay: 1.2,
    scale: 1.2,
    transition: "cubic-bezier(.51,.52,.51,.52)",
  });

  let secBgParallax = document.querySelector(".parallax2");

  new simpleParallax(secBgParallax, {
    orientation: "down right",
    overflow: true,
    delay: 1.1,
    scale: 1.2,
    transition: "cubic-bezier(.51,.52,.51,.52)",
  });
}

parallaxInit();

// arrow mooving

$(document).ready(function () {
  $(".header__link_submenu_wrap").click(function () {

    $(this).find(".submenu__arrow-wrap svg").css({ transform: "rotate(0deg)" });

    if ($(".submenu").is(":visible")) {
      $(".submenu").hide("slow");
      $(".submenu__arrow-wrap svg").css({ transform: " rotate(180deg)" });

      console.log("click1");
    } else {
      $(".submenu").show("slow");

      console.log("click2");
    }
  });
});

if (document.querySelector(".page1__img")) {
  // mobile replace
  let firstImg = document.querySelector(".page1__img");
  let firstImgMobContainer = document.querySelector(".page1__mob-img");
  let firstImgPcContainer = document.querySelector(".page1__item:last-child");

  var firstImgReplace = function firstImgReplace() {
    if (window.innerWidth <= 1024) {
      firstImgMobContainer.insertBefore(
        firstImg,
        firstImgMobContainer.children[0]
      );
    } else {
      firstImgPcContainer.insertBefore(
        firstImg,
        firstImgPcContainer.children[0]
      );
    }
  };

  if (window.innerWidth <= 1024) {
    firstImgReplace();
  }

  window.addEventListener("resize", firstImgReplace);
}
