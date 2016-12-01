$('.gallery').flickity({
    cellAlign:'left',
    contain:true,
    percentPosition:false,
    pageDots:true,
    prevNextButtons:false,
    autoPlay:1500,
    imagesLoaded:true,
    wrapAround:true,
});

$('.sign-up-email').submit( function(){
    return false;
})

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});