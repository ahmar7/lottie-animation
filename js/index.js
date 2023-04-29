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
   
  },
  anim;

anim = bodymovin.loadAnimation(animData);
anim.addEventListener("DOMLoaded", onDOMLoaded);
anim.setSpeed(0.9);

function onDOMLoaded(e) {
  anim.addEventListener("complete", function () {
    let preloaders = (document.getElementById("lottie").style.display = "none");
    let bodySelect = document.querySelector("body");
      bodySelect.style.overflow = "auto";
  });
}

// ScrubBodymovinTimeline(anim);
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
   
  },
  anims;

anims = bodymovin.loadAnimation(animDatas);
anims.addEventListener("DOMLoaded", onDOMLoadeds);
anims.setSpeed(1);

function onDOMLoadeds(e) {
  anims.addEventListener("complete", function () {
    let preloaders = (document.getElementById("lottiembl").style.display =  "none");
  document.getElementById("prelot").style.display = "none";
    let bodySelect = document.querySelector("body");
      bodySelect.style.overflow = "auto";
  });
}

ScrubBodymovinTimeline(anims);