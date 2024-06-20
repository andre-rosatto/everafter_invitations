const video = document.querySelector('video');
video.addEventListener('click', onVideoClick);

function onVideoClick() {
	video.currentTime = 0;
}