/*
 * Olive oil HTML Landing Page
 * Build Date: February 2023
 * Author: Khamzat995
 * Copyright (C) 2023 Istanbul
 */
/**
 * Table of contents
 * -----------------------------------
 * 1.0 JQUERY WINDOW LOAD FUNCTION
    * 1.1 PRELOADER
 * 2.0 JQUERY DOCUMENT READY FUNCTION
    * 2.1 ONE PAGE NAVIGATION
    * 2.2 TOP FIXED NAVBAR
    * 2.3 ANCOR SOMOOTH SCROLL
    * 2.4 STELLAR JS
    * 2.5 HERO SLIDER
    * 2.6 TESTIMONIAL CAROUSEL
    * 2.7 MAGNIFIC POPUP
    * 2.8 MAGNIFIC POPUP GALLERY
    * 2.9 LOAD MORE GALLERY ITEM
    * 2.10 WOW JS
 ==================
 *
 */
(function ($) {
    "use strict"; // this function is executed in strict mode
    /* =================================
       1.0 JQUERY WINDOW LOAD FUNCTION
    =================================== */
    $(window).load(function () {
        /******************** 1.1 PRELOADER ********************/
        // will first fade out the loading animation
        $(".preloader").fadeOut();
        // will fade out the whole DIV that covers the website.
        $(".preloader-wrap").delay(1000).fadeOut("slow");
    });

    /* =================================
       2.0 JQUERY DOCUMENT READY FUNCTION
    =================================== */
    $(document).ready(function () {

        /******************** 2.1 ONE PAGE NAVIGATION ********************/
        $('.navbar-nav').onePageNav({
            currentClass: 'active',
            scrollOffset: 74
        });

        /******************** 4. NAV COLLAPSE ********************/

        $('.navbar-nav li a').on('click', function () {

            var toggle = $('.navbar-toggle').is(':visible');
            if (toggle) {
                $('.navbar-collapse').collapse('hide');
            }
        });


        /******************** 2.2 TOP FIXED NAVBAR ********************/
        $(document).on('scroll', function () {
            var activeClass = 'navbar-home',
                ActiveID = '.header',
                scrollPos = $(this).scrollTop();

            if (scrollPos > 10) {
                $(ActiveID).addClass(activeClass);
            } else {
                $(ActiveID).removeClass(activeClass);
            }
        });
        /******************** 2.3 ANCOR SOMOOTH SCROLL ********************/

        $('a.scroll[href*="#"]:not([href="#"])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

        /******************** 2.4 STELLAR JS ********************/
        $(window).stellar({
            horizontalScrolling: false,
        });
        /******************** 2.5 HERO SLIDER ********************/
        /* $(".fullscreen-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: true,
            navigation: false,
            pagination: true,
            responsive: true,
            autoPlay: true,
            // time between transitions
            interval: 500,
            transitionStyle: "fade",
        }); */


        /* ===== COUNTERS 1 ===== */

        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        const obj = document.getElementById("valueOne");
        animateValue(obj, 0, 2204, 5000);

        /* ===== COUNTERS 2 ===== */

        function animateValue(objTwo, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                objTwo.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        const objTwo = document.getElementById("valueTwo");
        animateValue(objTwo, 0, 12, 5000);

        /* ===== COUNTERS 3 ===== */

        function animateValue(objThree, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                objThree.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        const objThree = document.getElementById("valueThree");
        animateValue(objThree, 0, 1104, 5000);

        /* ===== COUNTERS 4 ===== */

        function animateValue(objFour, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                objFour.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        const objFour = document.getElementById("valueFour");
        animateValue(objFour, 0, 99, 5000);

        // COUNTER FINISH



        /******************** 2.6 TESTIMONIAL CAROUSEL ********************/
        $(".testimonial-carousel").owlCarousel({
            itemsCustom: [
                [0, 1],
                [600, 1],
                [720, 1],
                [1000, 2]
            ],
            slideSpeed: 500,
            pagination: true,
            autoPlay: false,
        });
        /******************** 2.7 MAGNIFIC POPUP ********************/
        $('.gallery-popup').magnificPopup({
            type: 'image',
            removalDelay: 500,
        });
        /******************** 2.8 MAGNIFIC POPUP GALLERY ********************/
        $('.zoom-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function (element) {
                    return element.find('img');
                }
            }
        });
        /******************** 2.9 LOAD MORE GALLERY ITEM ********************/
        $(".grid-item").slice(0, 6).show();
        $("#loadmore").on('click', function (e) {
            e.preventDefault();
            $(".grid-item:hidden").slice(0, 3).slideDown();
            if ($(".grid-item:hidden").length == 0) {
                $("#load").fadeOut('slow');
            };
        });
        /******************** 2.10 WOW JS ********************/
        var wow = new WOW(
            {
                animateClass: 'animated',
                offset: 50,
                mobile: true
            }
        );
        wow.init();
    });

})(jQuery);

let elemOne = document.getElementById("videoOne");
let elemTwo = document.getElementById("videoTwo");
let elemThree = document.getElementById("videoThree");

function pauseOne() {
    elemOne.pause();
}
function pauseTwo() {
    elemTwo.pause();
}
function pauseThree() {
    elemThree.pause();
}