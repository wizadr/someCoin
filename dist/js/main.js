/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/aboutUs/aboutUs.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/aboutUs/aboutUs.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (document.querySelector('.counter')) {
  var number = document.querySelector('.counter'),
      numberTop = number.getBoundingClientRect().top,
      start = +number.innerHTML,
      end = +number.dataset.max;
  window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTop - window.innerHeight / 1) {
      this.removeEventListener('scroll', onScroll);
      var interval = setInterval(function () {
        var counters = document.querySelectorAll('.counter');
        var counters2 = document.querySelectorAll('.counter2');
        var speed = 200; // The lower the slower

        var speed2 = 140; // The lower the slower

        counters.forEach(function (counter) {
          var updateCount = function updateCount() {
            var target = +counter.getAttribute('data-target');
            var count = +counter.innerText; // Lower inc to slow and higher to slow

            var inc = Math.round(target / speed); // Check if target is reached

            if (count < target) {
              // Add inc to count and output in counter
              counter.innerText = count + inc; // Call function every ms

              setTimeout(updateCount, 1);
            } else {
              counter.innerText = target;
            }
          };

          setTimeout(updateCount, 1000);
        });
        counters2.forEach(function (counter2) {
          var updateCount2 = function updateCount2() {
            var target2 = +counter2.getAttribute('data-target-sec');
            var count2 = +counter2.innerText; // Lower inc to slow and higher to slow

            var inc2 = Math.round(target2 / speed2); // Check if target is reached

            if (count2 < target2) {
              // Add inc to count and output in counter
              counter2.innerText = count2 + inc2; // Call function every ms

              setTimeout(updateCount2, 1);
            } else {
              counter2.innerText = target2;
            }
          };

          setTimeout(updateCount2, 1200);
        });

        if (start == end) {
          clearInterval(interval);
        }
      }, 5);
    }
  });
}

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wowjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wowjs */ "./node_modules/wowjs/dist/wow.js");
/* harmony import */ var wowjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wowjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var simple_parallax_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simple-parallax-js */ "./node_modules/simple-parallax-js/dist/simpleParallax.min.js");
/* harmony import */ var simple_parallax_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simple_parallax_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simplebar */ "./node_modules/simplebar/dist/simplebar.esm.js");






var wow = new wowjs__WEBPACK_IMPORTED_MODULE_1__["WOW"]({
  live: false
}).init(); //burger

window.addEventListener("DOMContentLoaded", function () {
  var menu = document.querySelector(".header__list"),
      menuItem = document.querySelectorAll(".header__link"),
      hamburger = document.querySelector(".header__burger"),
      overflowHidden = document.querySelector("body");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("burger_active");
    menu.classList.toggle("menu_active");
    overflowHidden.classList.toggle("overflow-hidden-y");
  });
  menuItem.forEach(function (item) {
    item.addEventListener("click", function () {
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
    var firstImg = document.querySelector(".page1__img");

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
  var btn1 = function btn1() {
    var btnMain = document.querySelector(".btn_1");
    var imgFirst = document.querySelector(".page1__row");
    imgFirst.style.opacity = "1";
    btnMain.style.display = "inline-block";
  };

  setTimeout(btn1, 1000);
}

function parallaxInit() {
  var firstBgParallax = document.querySelector(".parallax");
  new simple_parallax_js__WEBPACK_IMPORTED_MODULE_2___default.a(firstBgParallax, {
    orientation: "up left",
    overflow: true,
    delay: 1.2,
    scale: 1.2,
    transition: "cubic-bezier(.51,.52,.51,.52)"
  });
  var secBgParallax = document.querySelector(".parallax2");
  new simple_parallax_js__WEBPACK_IMPORTED_MODULE_2___default.a(secBgParallax, {
    orientation: "down right",
    overflow: true,
    delay: 1.1,
    scale: 1.2,
    transition: "cubic-bezier(.51,.52,.51,.52)"
  });
}

parallaxInit(); // arrow mooving

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header__link_submenu_wrap").click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".submenu__arrow-wrap svg").css({
      transform: "rotate(0deg)"
    });

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".submenu").is(":visible")) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".submenu").hide("slow");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".submenu__arrow-wrap svg").css({
        transform: " rotate(180deg)"
      });
      console.log("click1");
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".submenu").show("slow");
      console.log("click2");
    }
  });
});

if (document.querySelector(".page1__img")) {
  // mobile replace
  var firstImg = document.querySelector(".page1__img");
  var firstImgMobContainer = document.querySelector(".page1__mob-img");
  var firstImgPcContainer = document.querySelector(".page1__item:last-child");

  var firstImgReplace = function firstImgReplace() {
    if (window.innerWidth <= 1024) {
      firstImgMobContainer.insertBefore(firstImg, firstImgMobContainer.children[0]);
    } else {
      firstImgPcContainer.insertBefore(firstImg, firstImgPcContainer.children[0]);
    }
  };

  if (window.innerWidth <= 1024) {
    firstImgReplace();
  }

  window.addEventListener("resize", firstImgReplace);
}

/***/ }),

/***/ "./src/blocks/modules/sliders/sliders.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/sliders/sliders.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper-container', {
  // Optional parameters
  slidesPerView: 5,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    // when window width is <= 499px
    100: {
      slidesPerView: 2,
      spaceBetweenSlides: 15
    },
    // when window width is <= 999px
    550: {
      slidesPerView: 3,
      spaceBetweenSlides: 40
    },
    650: {
      slidesPerView: 4,
      spaceBetweenSlides: 40
    }
  }
});
var swiperLogo = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper-container-logo', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    // when window width is <= 499px
    100: {
      slidesPerView: 2,
      spaceBetweenSlides: 15
    },
    // when window width is <= 999px
    550: {
      slidesPerView: 3,
      spaceBetweenSlides: 40
    },
    768: {
      slidesPerView: 4,
      spaceBetweenSlides: 40
    }
  }
});
var swiperAboutUs = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper-container-aboutUs', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    // when window width is <= 499px
    100: {
      slidesPerView: 1,
      spaceBetweenSlides: 15
    },
    768: {
      slidesPerView: 2,
      spaceBetweenSlides: 40
    }
  }
});
var swiperExpertise = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper-container-expertise', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    // when window width is <= 499px
    100: {
      slidesPerView: 2,
      spaceBetweenSlides: 15
    },
    550: {
      slidesPerView: 3,
      spaceBetweenSlides: 20
    }
  }
});
var swiperSectors = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper-container-sectors', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    // when window width is <= 499px
    100: {
      slidesPerView: 2,
      spaceBetweenSlides: 15
    },
    550: {
      slidesPerView: 3,
      spaceBetweenSlides: 20
    }
  }
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_sliders_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/sliders/sliders */ "./src/blocks/modules/sliders/sliders.js");
/* harmony import */ var _modules_aboutUs_aboutUs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/aboutUs/aboutUs */ "./src/blocks/modules/aboutUs/aboutUs.js");
/* harmony import */ var _modules_aboutUs_aboutUs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_aboutUs_aboutUs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map