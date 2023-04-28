var animationContainer = document.getElementById('lottie');	

var animation = bodymovin.loadAnimation({
	container: animationContainer,
	path: '../animation/BB_Revision_Visible.json',
	renderer: 'canvas',
	loop: false,
	autoplay: true,
	name: 'demo-animation',
	 
	
});
animation.setSpeed(1);

animation.addEventListener('complete', function() 
{
		// Fade out the splash screen and fade in the main content
		document.getElementById('lottie').style.display="none";
		document.getElementById('main-container').style.opacity = 1;
		animationContainer.parentNode.removeChild(animationContainer);
	
});


// animation.addEventListener('complete', function() {
// 	// Fade out the splash screen
// 	document.getElementById('splash-container').classList.add('hidden');
	
// 	// Fade in the main content with a delay of 1 second
// 	setTimeout(function() {
// 		document.getElementById('main-container').classList.remove('hidden');
// 		document.getElementById('main-container').style.opacity = 1;
// 	}, 1000);
	
// 	animationContainer.parentNode.removeChild(animationContainer);
// });