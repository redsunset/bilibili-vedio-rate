$(document).ready(function () {
	var lastUrl = null;
	let video = document.querySelector('video');
    video.addEventListener('play', function () {
		var curUrl = window.location.href;
		if (lastUrl == null || lastUrl !== curUrl) {
			setVedioRate(2);
			lastUrl = curUrl;
		}
    }, false);

	$(document).keydown(function(event){
		var rate = null;
		if (event.keyCode == 49 || event.keyCode == 97) {
			rate = 1;
		} else if (event.keyCode == 50 || event.keyCode == 98) {
			rate = 2;
		} else if (event.keyCode == 51 || event.keyCode == 99) {
			rate = 3;
		}
		if (rate == null) {
			return;
		}
		setVedioRate(rate);
	});
  
});

function setVedioRate(rate) {
    document.querySelector('video').playbackRate=rate;
}
