$(function (){
    /*togler class show to burger button */
    $("#toglerButton").on("click", function(event) {
        event.preventDefault();
        $(".burger__icon").toggleClass("show");
      });
});