$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        $('.navbar-toggler-icon').toggleClass('close-icon');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Initialize main Splide carousel
    initSplide('.meet-splide', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: 35,
        breakpoints: {
            1024: {
                gap: 20,
            },
            991: {
                perPage: 2,
                arrows: false,
            },
            576: {
                perPage: 1,
            }
        }
    });

    // Initialize gallery Splide carousel with progress bar
    var gallery = initSplide('.gallery', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: 20,
        padding: "10rem",
        pagination: false,
        breakpoints: {
            1024: {
                perPage: 2,
            },
            768: {
                perPage: 1,
                padding: "5rem",
            }
        }
    });

    var bar = document.querySelector('.my-slider-progress-bar');
    if (gallery && bar) {
        gallery.on('mounted move', function () {
            updateProgressBar(gallery, bar);
        });
    }

    // Initialize subscription box close button
    initCloseButton('.close-button', '.subscribe-content');
});

function initSplide(selector, options) {
    var splideElement = document.querySelector(selector);
    if (splideElement) {
        var splide = new Splide(splideElement, options);
        splide.mount();
        return splide;
    }
    return null;
}

function updateProgressBar(gallery, bar) {
    var end = gallery.Components.Controller.getEnd() + 1;
    var rate = Math.min((gallery.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + '%';
}

function initCloseButton(buttonSelector, boxSelector) {
    var closeButton = document.querySelector(buttonSelector);
    var subscribeBox = document.querySelector(boxSelector);
    if (closeButton && subscribeBox) {
        closeButton.addEventListener('click', function () {
            subscribeBox.style.display = 'none';
        });
    }
}
