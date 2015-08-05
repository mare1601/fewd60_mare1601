// Fade in of my name
$(function() {
  $('.titletext').hide().delay(900).fadeIn(1000);
});

// Stick the nav bar to the top! 
var navPos = $('.nav').offset().top;
$(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
    if (scrollPos >= navPos) {
        $('.nav').addClass('fixed');
    } else {
        $('.nav').removeClass('fixed');
    }
});

// Send the plane across the page!
$(window).scroll(function() {
if ($(this).scrollTop() > 1100){  
    $('.plane').addClass('fly');
  }
  else{
    $('.plane').removeClass('fly');
  }
});

// Smooth sweeps to new sections - admitted totally reused from https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});