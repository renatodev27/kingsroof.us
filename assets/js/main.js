$(document).ready( function () {

    $('.menu-toggle').click( function () {
        if ($('.menu').hasClass('active')) {

            $('.menu ul').slideDown("fast");
            $('.menu li').slideDown("fast");
            //$('.menu').animate({opacity: 0},200);
            $('.menu').removeClass('active');
        }
        else {
            $('.menu ul').slideUp("fast");
            $('.menu li').slideUp("fast");
            //$('.menu').animate({opacity: 1},200);
            $('.menu').addClass('active');
        }
        //$('.menu').toggleClass('active', 500);
    })

})

/* document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
}); */

/* document.addEventListener('DOMContentLoaded', function () {
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
}); */