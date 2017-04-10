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

 /*changing navigation color */
  function handleNavChange() {

    $(window).scroll(function() {
      var scrTop = $(this).scrollTop();
      if (scrTop >= 100) {
        $('nav').addClass('scroll');
      } else {
        $('nav').removeClass('scroll')
      }
    });
  }
  handleNavChange();

});
