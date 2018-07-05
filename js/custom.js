$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})

/*$(window).scroll(function() {
    if($(this).scrollTop()>90) {
        $( ".menu" ).addClass("fixed-top");
    } else {
        $( ".menu" ).removeClass("fixed-top");
    }
});*/
      
new WOW().init();


$('#link-slide').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
                dots: true,
                
                autoplay: true,
  autoplaySpeed: 3000,
                arrows:false
});


 

