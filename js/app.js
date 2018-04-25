$('document').ready(function(){

  /*  loader */
  $(".loader").delay(2000).fadeOut(600);

// click to enlarge

  $('.w-25').click(function(){
    $(this).toggleClass('fullscreen');
    $(this).toggleClass('zind');
  });

  $('.cerrar').click(function(){
    
  });

  $(document).keydown(function(e){
      if(e.keyCode == 27) {
        $('.w-25').removeClass('fullscreen');
        $('.w-25').css({"z-index":"0"});
      }
  });

// Grid Slide
  $('.arrow-next').click(function(){
    $('#grid').css({
      "-webkit-transform":"translateX(0)",
      "-moz-transform":"translateX(0)",
      "-o-transform":"translateX(0)",
      "transform":"translateX(0)"
    });
  });

  $('.mobile-next').click(function(){
    $('#grid').css({
      "-webkit-transform":"translateX(0)",
      "-moz-transform":"translateX(0)",
      "-o-transform":"translateX(0)",
      "transform":"translateX(0)"
    });
  });

  $('.slide-back').click(function(){
    $('#grid').css({
      "-webkit-transform":"translateX(100%)",
      "-moz-transform":"translateX(100%)",
      "-o-transform":"translateX(100%)",
      "transform":"translateX(100%)"
    });
  });

// scrollreveal
  window.sr = ScrollReveal({ reset: true });
    sr.reveal('.hero-slide', { distance: "100px", duration: 1000, scale: 1, delay: 2500 });
    sr.reveal('.diagrama', { distance: "100px", duration: 1000, scale: 1, delay: 2 });
    sr.reveal('.about-text', { distance: "100px", duration: 1000, scale: 1, delay: 2 });

// Nav blanco/negro
  $(window).scroll(function(){
    var HeroGrid = $('#hero-grid').height();
      if($(window).scrollTop() > HeroGrid) {
          $('#nav svg').css({"fill":"black"});
          $('#nav a').css({"color":"black"});
      }
      else{
        $('#nav svg').css({"fill":"white"});
        $('#nav a').css({"color":"white"});
      }
  })

});
$(document).foundation()
