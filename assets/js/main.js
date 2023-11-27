$(document).ready( function () {

    $(".owl-carousel").owlCarousel({
        items: 1, 
        loop: true,
        margin: 10,
        nav: true, 
        smartSpeed: 1000,
        navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
    });

    $('.menu-toggle').click( function () {
        if ($('.menu').hasClass('active')) {
            $('.menu ul').slideUp(350);
            $('.menu li').slideUp(350);
            $('.menu').removeClass('active');
        }
        else {
            $('.menu ul').slideDown(350);
            $('.menu li').slideDown(350);
            $('.menu').addClass('active');
        }
    })
})

/* document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
}); */

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