(function ($) {
    'use strict';

    var mona_window = $(window);

    // *******************************
    // :: 1.0 Preloader Active Code
    // *******************************

    mona_window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // ***********************************
    // :: 9.0 Tooltip Active Code
    // ***********************************
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // ***********************************
    // :: 12.0 Scrollup Active Code
    // ***********************************
    if ($.fn.scrollUp) {
        mona_window.scrollUp({
            scrollSpeed: 100,
            scrollText: '<i class="fa fa-angle-up"</i>'
        });
    }

    // ***********************************
    // :: 13.0 Sticky Active Code
    // ***********************************
    mona_window.on('scroll', function () {
        if (mona_window.scrollTop() > 0) {
            $('.main-header-area').addClass('sticky');
        } else {
            $('.main-header-area').removeClass('sticky');
        }
    });

    // ***********************************
    // :: 14.0 Prevent Default 'a' Click
    // ***********************************
    $('a[href="#"]').click(function ($) {
        $.preventDefault()
    });

})(jQuery);