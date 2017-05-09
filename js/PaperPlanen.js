/* ==========================================================================
Window Scroll
========================================================================== */
jQuery(window).scroll(function() {


    'use strict';


    var enable_opacity, current_position, home_height;


    current_position = jQuery(document).scrollTop();


    /* ==============================================
    Home Section Opacity
    =============================================== */
    enable_opacity = true; /* Change it to false to disable the slider opacity */
    if (enable_opacity === true) {
        home_height = jQuery('#home-section').height() + 450;
        jQuery('#home-section').css({ opacity: (1 - current_position / home_height * 1.2) });
    }


    /* ==============================================
    Menu Background Color
    =============================================== */
    if (current_position >= 10) {
        jQuery('#nav-wrapper').addClass('menubgC');
    } else {
        jQuery('#nav-wrapper').removeClass('menubgC');
    }

    /*======scroll================*/
    if (jQuery(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        jQuery('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
        jQuery('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
});
jQuery('#return-to-top').click(function() { // When arrow is clicked
    jQuery('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);


});




/* ==========================================================================
Window Load
========================================================================== */
jQuery(window).load(function() {


    'use strict';


    var LoaderDelay, withanimation;


    /* ==============================================
    Loader
    =============================================== */
    LoaderDelay = 50;

    function hideLoader() {
        var loadingLoader = jQuery('#loader');
        loadingLoader.fadeOut();
    }
    hideLoader();


    /* ==========================================================================
    WOW Animation
    ========================================================================== */






});
/* ==========================================================================
Document Ready Function
========================================================================== */
jQuery(document).ready(function() {


    'use strict';


    /* ==========================================================================
       Fancy Box
       ========================================================================== */

    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    jQuery(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });



    jQuery('a[href="#navbar-more-show"], .navbar-more-overlay').on('click', function(event) {
        event.preventDefault();
        $('body').toggleClass('navbar-more-show');
        if ($('body').hasClass('navbar-more-show')) {
            $('a[href="#navbar-more-show"]').closest('li').addClass('active');
        } else {
            $('a[href="#navbar-more-show"]').closest('li').removeClass('active');
        }
        return false;

    });

    /* ==========================================================================
        Gallery
        ========================================================================== */



    jQuery('.circle').mosaic({
        opacity: 0.8 //Opacity for overlay (0-1)
    });
    jQuery('.fade').mosaic();
    jQuery('.bar').mosaic({
        animation: 'slide'
    });


    var $container = jQuery('.portfolioContainer'),
        $body = jQuery('body'),
        colW = 375,
        columns = null;


    $container.isotope({
        // disable window resizing
        resizable: true,
        masonry: {
            columnWidth: colW
        }
    });

    jQuery(window).smartresize(function() {
        // check if columns has changed
        var currentColumns = Math.floor(($body.width() - 30) / colW);
        if (currentColumns !== columns) {
            // set new column count
            columns = currentColumns;
            // apply width to container manually, then trigger relayout
            $container.width(columns * colW)
                .isotope('reLayout');
        }

    }).smartresize(); // trigger resize to set container width
    jQuery('.portfolioFilter a').click(function() {
        jQuery('.portfolioFilter .current').removeClass('current');
        jQuery(this).addClass('current');

        var selector = jQuery(this).attr('data-filter');
        $container.isotope({

            filter: selector,
        });
        return false;
    });




    jQuery("#cf7_controls").on('click', 'span', function() {
        jQuery("#cf7 img").removeClass("opaque");

        var newImage = jQuery(this).index();

        jQuery("#cf7 img").eq(newImage).addClass("opaque");

        jQuery("#cf7_controls span").removeClass("selected");
        jQuery(this).addClass("selected");
    });




    jQuery('.skillbar').each(function() {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 3000);
    });


    /*--slideout---*/


    jQuery(".fa-times").click(function() {
        jQuery(".sidebar_menu").addClass("hide_menu");
        jQuery(".toggle_menu").addClass("opacity_one");
    });

    jQuery(".toggle_menu").click(function() {
        jQuery(".sidebar_menu").removeClass("hide_menu");
        jQuery(".toggle_menu").removeClass("opacity_one");
        jQuery(".toggle_menu").addClass("toggle_menuopac");
    });




    jQuery('.navbarscroll ul a').click(function(e) {

        jQuery('.navbarscroll ul a.active').removeClass('active');
        jQuery(this).addClass('active');

        // Scroll to anchor

        jQuery('html,body').animate({ scrollTop: jQuery(jQuery(this).attr('href')).offset().top - 70 }, 'slow');

        e.preventDefault();
        return false;

    });

    // On scroll, remove class on active element and add it to the new one

    jQuery(document).scroll(function() {

        var position = Math.floor(jQuery(this).scrollTop() / 800) + 1;

        jQuery('.navbarscroll ul a.active').removeClass('active');
        jQuery('.navbarscroll ul a.link-' + position).addClass('active');

    });

});