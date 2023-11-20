document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});

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


let map;

function initializeMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 33.92565945723902, lng: -84.48054260302612 },
        zoom: 8,
    });
}

initializeMap();