$(document).ready(function(){
  $("#scroll-top").hide();
  $(function () {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              $('#scroll-top').fadeIn();
          } else {
              $('#scroll-top').fadeOut();
          }
      });
      // scroll body to 0px on click
      $('#scroll-top button').click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 800);
      });
  });

});