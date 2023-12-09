$(document).ready( function () {

    $(".owl-carousel").owlCarousel({
        items: 1, 
        loop: true,
        margin: 10,
        nav: true, 
        smartSpeed: 1000,
        navText: ['<img src="../assets/icons/left-arrow.png">', '<img src="./assets/icons/right-arrow.png">']
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
    
    $('[id=next]').click( function() {
        $('.explore-img').animate({
            opacity: 0, 
            position: 'absolute',
        })
        $('.explore-img-2').animate({
            opacity: 1,
            position: 'relative',
        })

        $('.s3-explore-pages-2').css('display', 'block'); 
        $('.s3-explore-pages').css('display', 'none'); 

        $('.s3-images-2').css('width', '58.8%');
        $('.s3-images').css('width', 0);
    })

    $('[id=prev]').click( function() { 
        $('.s3-explore-pages-2').css('display', 'none'); 
        $('.s3-explore-pages').css('display', 'block'); 

        $('.s3-images').css('width', '58.8%');
        $('.s3-images-2').css('width', 0);

        $('.explore-img').animate({
            opacity: 1,
            position: 'relative'
        })
        $('.explore-img-2').animate({
            opacity: 0,
            position: 'absolute',
        })
    })
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

lightGallery(document.querySelector('[id="animated-thumbnails"]'), {
    speed: 500,
    mode: 'lg-slide',
    thumbnail: true,
    selector: 'a',
    download: false
});

lightGallery(document.getElementById('lightgallery-roofting'), {
    speed: 500,
    mode: 'lg-slide',
    thumbnail: true,
    selector: 'a',
    download: false
})

lightGallery(document.getElementById('lightgallery-renovation'), {
    speed: 500,
    mode: 'lg-slide',
    thumbnail: true,
    selector: 'a',
    download: false
})

lightGallery(document.getElementById('lightgallery-painting'), {
    speed: 500,
    mode: 'lg-slide',
    thumbnail: true,
    selector: 'a',
    download: false
})