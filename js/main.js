$(function() {
  /*global variables*/
  /*Nav Toggle (show burger menu)*/
  var nav = $(".nav__menu");
  var nav__list = $(".nav__list");
  var nav__item = $(".nav__item");
  var navToogle = $("#toglerButton");
  /*slick slider*/
  const workSlider = $('[data-slider="slick"]');
  /*togler class click to burger button */
  $("#toglerButton").on("click", function(event) {
    event.preventDefault();
    $(".burger__icon").toggleClass("click");
  });
  /*back to top*/
  $(function() {
    $(".back__to--top").hide();
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $(".back__to--top").fadeIn();
      } else {
        $(".back__to--top").fadeOut();
      }
    });
    $(".back__to--top").click(function(event) {
      event.preventDefault();
      $("body, html").animate(
        {
          scrollTop: 0
        },
        800
      );
      return false;
    });
  });
  /*smoth scroll to section*/
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    var blockId = $(this).data("scroll");
    var blockOffset = $(blockId).offset().top;
    nav.removeClass("show");
    nav__list.removeClass("show");
    $("html, body").animate(
      {
        scrollTop: blockOffset - 70
      },
      800
    );
  });
  /*fixed heade*/
  var introH = $("#intro").innerHeight(),
    header = $(".header"),
    scrollOffset = $(window).scrollTop();
  checkScroll(scrollOffset);
  /*fixed header*/
  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });
  function checkScroll(scrollOffset) {
    scrollOffset = $(this).scrollTop();
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
  $(".nav__link").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $(".nav__link a").toggleClass("active");
  });
  /*Nav Toggle (show burger menu)*/
  navToogle.on("click", function(event) {
    event.preventDefault();
    nav.toggleClass("show");
    nav__list.toggleClass("show");
    nav__item.toggleClass("show");
  });
    /*Slick slider https://kenwheeler.github.io/slick */
    workSlider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      dots: true
    });
});
