// Set up swiper slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 40
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 40
      }
    }
});

$(document).ready(function () {

  //Make news slider show first, set font colours and lines 
  $('#news').addClass("purple");
  $('#events').addClass("grey");
  $('#slider-events').show();
  $('#slider-news, #events-button, #arrow-right').hide();

  //Function for when news button is clicked
  $('#news').on('click', function () {
    $('#slider-news, #arrow-right, #events-button').hide();
    $('#slider-events, #arrow-left, #news-button').show();
    $('#events').addClass("grey");
    $('#events').removeClass("purple");
    $('#news').removeClass("grey");
    $('#news').addClass("purple");
    $('#lines').addClass("lines-news");
    $('#lines').removeClass("lines-events");
  });

  //Function for when events button is clicked
  $('#events').on('click', function () {
    $('#slider-events, #arrow-left, #news-button').hide();
    $('#slider-news, #arrow-right, #events-button').show();
    $('#events').removeClass("grey");
    $('#events').addClass("purple");
    $('#news').addClass("grey");
    $('#news').removeClass("purple");
    $('#lines').removeClass("lines-news");
    $('#lines').addClass("lines-events");
  });

});