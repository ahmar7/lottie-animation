$(document).ready(function () {
  $(".menu-icon-header").on("click", function () {
    $(".menu-top").toggleClass("slide-in");
    $(".menu-bottom").toggleClass("slide-in");

    //   if ($(this).text() == "Menu") {
    //    $(this).text("Close");
    //   }
    //   else {
    //     $(this).text("Menu");
    //   }
  });
});
// let splashScreen = () => {
//   let preloader = document.getElementById("preloaderdesk");
//   let bodySelect = document.querySelector("body");
//   bodySelect.style.overflow = "auto";
//   preloader.classList.add("fading-splash");
// };
// let splashScreenmbl = () => {
//   let preloader = document.getElementById("preloadermbl");
//   let bodySelect = document.querySelector("body");
//   preloader.classList.add("fading-splash");
//   bodySelect.style.overflow = "auto";
// };
// var animation = bodymovin.loadAnimation({
//   container: document.getElementById("lottie"),
//   path: "../animation/BB_Revision_Visible.json",
//   renderer: "canvas",
//   loop: false,
//   autoplay: true,
// });
// var animation = bodymovin.loadAnimation({
//   container: document.getElementById("lottiembl"),
//   path: "../animation/lottie_animations_2.json",
//   renderer: "canvas",
//   loop: false,
//   autoplay: true,
// });
// setTimeout(() => {
//   splashScreen();
//   splashScreenmbl();
//   setTimeout(() => {
//     let preloader = document.getElementById("preloaderdesk");
//     let preloadermbl = document.getElementById("preloadermbl");
//     let preloaders = (document.getElementById("lottie").style.display = "none");
//     let preloadermbls = (document.getElementById("lottiembl").style.display =
//       "none");
//     preloader.style.display = "none";
//     preloadermbl.style.display = "none";
//   }, 500);
// }, 3500);
// **********************************************
var select = function (s) {
    return document.querySelector(s);
  },
  selectAll = function (s) {
    return document.querySelectorAll(s);
  },
  animationWindow = select("#lottie"),
  animData = {
    wrapper: animationWindow,
    animType: "canvas",
    loop: false,
    prerender: true,
    autoplay: true,
    path: "../animation/BB_Revision_Visible.json",
    rendererSettings: {

      //context: canvasContext, // the canvas context
      //scaleMode: 'noScale',
      //clearCanvas: false,
      //progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
      //hideOnTransparent: true //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
    },
  },
  anim;

anim = bodymovin.loadAnimation(animData);
anim.addEventListener("DOMLoaded", onDOMLoaded);
anim.setSpeed(1);

function onDOMLoaded(e) {
  anim.addEventListener("complete", function () {
    let preloaders = (document.getElementById("lottie").style.display = "none");
    let bodySelect = document.querySelector("body");
      bodySelect.style.overflow = "auto";
  });
}

ScrubBodymovinTimeline(anim);
// **********************************************
var selects = function (s) {
    return document.querySelector(s);
  },
  selectAlls = function (s) {
    return document.querySelectorAll(s);
  },
  animationWindows = selects("#lottiembl"),
  animDatas = {
    wrapper: animationWindows,
    animType: "canvas",
    loop: false,
    prerender: true,
    autoplay: true,
    path: "../animation/lottie_animations_2.json",
    rendererSettings: {
      //context: canvasContext, // the canvas context
      //scaleMode: 'noScale',
      //clearCanvas: false,
      //progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
      //hideOnTransparent: true //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
    },
  },
  anims;

anims = bodymovin.loadAnimation(animDatas);
anims.addEventListener("DOMLoadeds", onDOMLoaded);
anims.setSpeed(1);

function onDOMLoadeds(e) {
  anims.addEventListener("completes", function () {
    let preloaders = (document.getElementById("lottiembl").style.display =
      "none");
    let bodySelect = document.querySelector("body");
      bodySelect.style.overflow = "auto";
  });
}

ScrubBodymovinTimeline(anims);