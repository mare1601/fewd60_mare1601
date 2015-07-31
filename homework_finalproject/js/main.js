$(function() {
  $('.titletext').hide().delay(1400).fadeIn(1000);
  $('.quote').fadeOut(1500);
});


$(window).scroll(function() {
if ($(this).scrollTop() > 5){  
    $('header').addClass('sticky');
  }
  else{
    $('header').removeClass('sticky');
  }
});

$(window).scroll(function() {
if ($(this).scrollTop() > 800){  
    $('.plane').addClass('fly');
  }
  else{
    $('.plane').removeClass('fly');
  }
});
