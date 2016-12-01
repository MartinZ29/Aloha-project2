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