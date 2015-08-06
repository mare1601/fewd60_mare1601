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
if ($(this).scrollTop() > 1200){  
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


/* Toggle class so the hamburger button works - Brilliant!! */
$("#nav-toggle").click(function () {
  if($('#main-nav').is('.nav')){
    $('#main-nav').slideUp(function(){
          $('#main-nav').addClass('nav-show');
          $('#main-nav').removeClass('nav');
          $('#main-nav').slideDown(1000);
          $('#hamburger').animate({
            height: '150px'
            }, 1000, function(){
          });
      }); 
  }
  else {
    $('#main-nav').slideUp(function(){
        $('#main-nav').addClass('nav');
        $('#main-nav').removeClass('nav-show');
        $('#main-nav').slideUp(2000);
          $('#hamburger').animate({
            height: '0px'
            }, 1000, function(){
          });

      });  
  }
});

