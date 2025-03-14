(function($){
	"use strict";
	jQuery(document).on('ready', function () {
		
		// Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.navbar-area').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
            }
        });

		// Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "991"
		});

		// Nice Select JS
		$('select').niceSelect();
		
		// Odometer JS
		$('.odometer').appear(function(e) {
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
		});

		// Video Popup JS
		$('.popup-youtube').magnificPopup({
            disableOn: 320,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
		});

		// Go to Top
        $(function(){
            // Scroll Event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 600) $('.go-top').addClass('active');
                if (scrolled < 600) $('.go-top').removeClass('active');
            });  
            // Click Event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
        });
		
	});
	
	// WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW({
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       20,          // distance to the element when triggering the animation (default is 0)
            mobile:       true, // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
          });
          wow.init();
        }
	});
	
	// Preloader
	jQuery(window).on('load', function() {
		$('.preloader').fadeOut();
	});

	/*new-js "Home Demo - 6" */

	

	// El JS
	$( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $scope ) {

			// Success Story Slides
			$('.success-story-slides').owlCarousel({
				loop: true,
				nav: true,
				dots: false,
				autoplayHoverPause: true,
				autoplay: true,
				items: 1,
				margin: 5,
				navText: [
					"<i class='fas fa-chevron-left'></i>",
					"<i class='fas fa-chevron-right'></i>"
				]
			});

			// Partner Slides
			$('.partner-slides').owlCarousel({
				loop: true,
				nav: false,
				dots: false,
				autoplayHoverPause: true,
				autoplay: true,
				margin: 30,
				navText: [
					"<i class='fas fa-chevron-left'></i>",
					"<i class='fas fa-chevron-right'></i>"
				],
				responsive: {
					0: {
						items: 2,
					},
					576: {
						items: 3,
					},
					768: {
						items: 4,
					},
					992: {
						items: 5,
					}
				}
			});

			// Home Slides
			$('.home-slides').owlCarousel({
				nav: true,
				loop: true,
				dots: false,
				autoplayHoverPause: true,
				animateOut: 'fadeOut',
				autoplayTimeout: 8000,
				animateIn: 'fadeIn',
				autoplay: true,
				items: 1,
				navText: [
					"<i class='fas fa-chevron-left'></i>",
					"<i class='fas fa-chevron-right'></i>"
				]
			});

			// Testimonials Wrap Slides
			$('.testimonials-wrap-slides').owlCarousel({
				nav: true,
				loop: true,
				dots: false,
				autoplayHoverPause: true,
				animateOut: 'fadeOut',
				autoplayTimeout: 8000,
				animateIn: 'fadeIn',
				autoplay: true,
				items: 1,
				navText: [
					"<i class='fas fa-chevron-left'></i>",
					"<i class='fas fa-chevron-right'></i>"
				]
			});

    	} );
	} );

	// Feedback Carousel
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Testimonials.default', function($scope, $){

			var $imagesSlider = $(".feedback-slides .client-feedback>div"),
			$thumbnailsSlider = $(".client-thumbnails>div");
			
			// images options
			$imagesSlider.slick({
				speed:500,
				slidesToShow:1,
				slidesToScroll:1,
				cssEase:'linear',
				fade:true,
				adaptiveHeight: true,
				autoplay: false,
				draggable:true,
				asNavFor:".client-thumbnails>div",
				prevArrow:'.client-feedback .prev-arrow',
				nextArrow:'.client-feedback .next-arrow'
			});

			// Thumbnails options
			$thumbnailsSlider.slick({
				speed:500,
				slidesToShow:5,
				slidesToScroll:1,
				cssEase:'linear',
				autoplay: false,
				centerMode:true,
				centerPadding: '0',
				draggable:false,
				focusOnSelect:true,
				asNavFor:".feedback-slides .client-feedback>div",
				prevArrow:'.client-thumbnails .prev-arrow',
				nextArrow:'.client-thumbnails .next-arrow',
			});
			var $caption = $('.feedback-slides .caption');
			var captionText = $('.client-feedback .slick-current img').attr('alt');
			updateCaption(captionText);
			$imagesSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
				$caption.addClass('hide');
			});
			$imagesSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
				captionText = $('.client-feedback .slick-current img').attr('alt');
				updateCaption(captionText);
			});
			function updateCaption(text) {
				// if empty, add a no breaking space
				if (text === '') {
					text = '&nbsp;';
				}
				$caption.html(text);
				$caption.removeClass('hide');
			}
		});
	} );
}(jQuery));