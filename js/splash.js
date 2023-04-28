var animationContainer = document.getElementById('animation-container');	

var animation = bodymovin.loadAnimation({
	container: document.getElementById('animation-container'),
	path: 'assets/splashScreen.json',
	renderer: 'svg',
	loop: false,
	autoplay: true,
	name: 'demo-animation',
	rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'//burasi "meet" den 'slice' a dondurulcek eger genislitme gerekirse
	}
	
});
// animation.setSpeed(0.75);

animation.addEventListener('complete', function() 
{
		// Fade out the splash screen and fade in the main content
		document.getElementById('splash-container').classList.add('hidden');
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