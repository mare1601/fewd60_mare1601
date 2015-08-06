var cityArr = ['NYC','SF', 'LA', 'ATX', 'SYD'];
var select = $('#city-type');

for(var i=0; i < cityArr.length; i++) {
  $('select').append('<option>' + cityArr[i] +'</option>');
}



$('select').change(function(){
  if (cityArr[i] == 'NYC') {
      $('body').attr('class','nyc');
      $('#city-type').val('');
      return false;
    }
    else if ('option' == 'SF') {
      $('body').attr('class','sf');
      $('#city-type').val('');
      return false;
    }
    else if ('option' == 'LA') {
      $('body').attr('class','la');
      $('#city-type').val('');      
      return false;
    }
    else if ('option' == 'ATX') {
      $('body').attr('class','austin');
      $('#city-type').val('');     
      return false;
    }
    else if ('option' == 'SYD') {
      $('body').attr('class','sydney');
      $('#city-type').val('');
      return false;
    }
  });