$(document).ready(function() {
  
    $('.menu-icon-header').on('click', function() {
      $('.menu-top').toggleClass("slide-in");
      $('.menu-bottom').toggleClass("slide-in");
      
    //   if ($(this).text() == "Menu") {
    //    $(this).text("Close"); 
    //   }
    //   else {
    //     $(this).text("Menu"); 
    //   }
    });
    
  });
  let splashScreen =()=>{
    let preloader = document.getElementById("preloader");
    let bodySelect = document.querySelector('body')
    preloader.style.display="none"
    bodySelect.style.overflow="auto"
  }
  var animation = bodymovin.loadAnimation({
    container: document.getElementById("lottie"), // Required
    path: "../animation/BB_Revision_Visible.json", // Required
    renderer: "svg", // Required
    loop: false, // Optional
    autoplay: true, // Optional
    name: "Hello World", // Name for future reference. Optional.
  });
  setTimeout(() => {
    splashScreen()
  }, 3000);