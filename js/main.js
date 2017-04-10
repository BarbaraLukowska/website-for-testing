$(function(){

  /*scroll*/
  function scrollSite(){
    $('a[href*="#"]:not([href="#"])').click(function(event) {
      event.preventDefault();
      var target =$(this.hash);
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1500)
    });
  }
  scrollSite();

  // /*changing navigation color --- jeszcze nie działa poprawnie*/
  function handleNavChange() {
    // var menu = $('.menu');
    if ($(window).scrollTop() >= 90) {
      $('.menu').addClass('scroll');
    }

    $(window).scroll(function() {
      if ($(window).scrollTop() >= 90) {
        $('.menu').addClass('scroll');
        $('.menu').css({'transition': 'all 0.3s'});
      } else {
        $('.menu').removeClass('scroll');
      }
    });
  }
  handleNavChange();

});
