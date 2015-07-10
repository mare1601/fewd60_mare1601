
$('#submit-btn').click(function () {
    var inputCity = $('#city-type').val();
    var city = inputCity.trim();
    if (city == 'New York City' || city == 'NYC' || city == 'New York') {
      $('body').attr('class','nyc');
      $('#city-type').val('');
      return false;
    }
    else if (city == 'San Francisco' || city == 'SF' || city == 'Bay Area') {
      $('body').attr('class','sf');
      $('#city-type').val('');
      return false;
    }
    else if (city == 'Los Angeles' || city == 'LA' || city == 'LAX') {
      $('body').attr('class','la');
      $('#city-type').val('');      
      return false;
    }
    else if (city == 'Austin' || city == 'ATX') {
      $('body').attr('class','austin');
      $('#city-type').val('');     
      return false;
    }
    else if (city == 'Sydney' || city == 'SYD') {
      $('body').attr('class','sydney');
      $('#city-type').val('');
      return false;
    }
})

