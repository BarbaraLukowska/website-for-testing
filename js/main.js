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
      if (scrTop >= 80) {
        $('nav').addClass('scroll');
      } else {
        $('nav').removeClass('scroll')
      }
    });
  }
  handleNavChange();

  // Offers panels - Flex Panels (in Vanilla JS and ES6 - only for excercising);
  const offerPanels = document.querySelectorAll('.panel');

  function handleOpen() {
      this.classList.toggle('open');
  }

  function handleActive(e) {
      if (e.propertyName.includes('flex')) {
          this.classList.toggle('open-active');
      }
  }
  offerPanels.forEach( panel => panel.addEventListener('click', handleOpen));
  offerPanels.forEach( panel => panel.addEventListener('transitionend', handleActive));

});
