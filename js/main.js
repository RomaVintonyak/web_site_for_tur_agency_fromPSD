$(function() {
  /*togler class show to burger button */
  $("#toglerButton").on("click", function(event) {
    event.preventDefault();
    $(".burger__icon").toggleClass("show");
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
  
});
