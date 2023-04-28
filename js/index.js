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
let splashScreen = () => {
  let preloader = document.getElementById("preloaderdesk");
  let bodySelect = document.querySelector("body");
  preloader.classList.add("fading-splash");
  bodySelect.style.overflow = "auto";
};
let splashScreenmbl = () => {
  let preloader = document.getElementById("preloadermbl");
  let bodySelect = document.querySelector("body");
  preloader.classList.add("fading-splash");
  bodySelect.style.overflow = "auto";
};
var animation = bodymovin.loadAnimation({
  container: document.getElementById("lottie"), 
  path: "../animation/BB_Revision_Visible.json", 
  renderer: "svg", 
  loop: true, 
  autoplay: true, 
});
var animation = bodymovin.loadAnimation({
  container: document.getElementById("lottiembl"), 
  path: "../animation/lottie_animations_2.json", 
  renderer: "svg", 
  loop: false, 
  autoplay: true, 
});
setTimeout(() => {
  splashScreen();
  splashScreenmbl();
  setTimeout(() => {
    let preloader = document.getElementById("preloaderdesk");
    let preloadermbl = document.getElementById("preloadermbl");
     let preloaders = document.getElementById("lottie").style.display= "none";
     let preloadermbls = document.getElementById("lottiembl").style.display ="none";
    preloader.style.display = "none";
    preloadermbl.style.display = "none";
  }, 500);
}, 3500);
