$(document).ready(function() {
        
  $('.burger').click(function(event) {
    $('.burger,.header__nav,.container,.hero').toggleClass('active');
      });

      $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows:false,
        dots: false,
        autoplay: false,
        swipe: false,
        responsive: [
          {
              breakpoint: 700,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                  swipe: true,
                  autoplay: true,
                  infinite: true,
                  autoplaySpeed: 4000,
                  speed: 1500,
              }
          }
        ]
    });
});