document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('play-button');
    const videoContainer = document.getElementById('video-container');
    const videoOverlay = document.getElementById('video-overlay');
    const videoFrame = document.getElementById('video-frame');
    const closeButton = document.getElementById('close-button');

    playButton.addEventListener('click', function () {
        videoContainer.style.display = 'flex';
    });

    videoOverlay.addEventListener('click', function () {
        videoContainer.style.display = 'none';
    });

    closeButton.addEventListener('click', function () {
        videoContainer.style.display = 'none';
    });
});
