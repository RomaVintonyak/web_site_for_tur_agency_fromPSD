$(function() {
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
    /*nav.removeClass("show"); */
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
});
