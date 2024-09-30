jQuery(function ($) {
   "use strict";
   var $window = $(window);
   var windowsize = $(window).width();
   var $root = $("html, body");
   var $this = $(this);


   /*Testimonials 3columns*/
   $("#testimonial-slider").owlCarousel({
      items: 1,
      autoplay: 2500,
      autoplayHoverPause: true,
      loop: true,
      margin: 30,
      dots: true,
      nav: false,
      responsive: {
         1280: {
            items: 1,
         },
         600: {
            items: 1,
         },
         320: {
            items: 1,
         },
      }
   });


});







