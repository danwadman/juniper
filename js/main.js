// Set up swiper slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 40,
  slidesPerGroup: 1,
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
        spaceBetween: 40
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 40
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

  $('#page-content-wrapper').delay(100).fadeIn(200);

  //Make news slider show first, set font colours and lines 
  $('#news').addClass("purple");
  $('#events').addClass("grey-dark");
  $('#slider-events').show();
  $('#slider-news, #events-button, #arrow-right').hide();
  $('#lines-news').addClass("lines-news");

  //Function for when news button is clicked
  $('#news').on('click', function () {
    $('#slider-news, #arrow-right, #events-button').hide();
    $('#slider-events, #arrow-left, #news-button').show();
    $('#events').addClass("grey-dark");
    $('#events').removeClass("purple");
    $('#news').removeClass("grey-dark");
    $('#news').addClass("purple");
    $('#lines-news').addClass("lines-news");
    $('#lines-events').removeClass("lines-events");
  });

  //Function for when events button is clicked
  $('#events').on('click', function () {
    $('#slider-events, #arrow-left, #news-button').hide();
    $('#slider-news, #arrow-right, #events-button').show();
    $('#events').removeClass("grey-dark");
    $('#events').addClass("purple");
    $('#news').addClass("grey-dark");
    $('#news').removeClass("purple");
    $('#lines-news').removeClass("lines-news");
    $('#lines-events').addClass("lines-events");
  });

  delay

});