$(function () {
  $('#weather-form').submit(function(e) {
    e.preventDefault();
    var cityName = $('#cityName').val();
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(cityName);
    console.log(cityName);

  $.ajax({
     type: 'GET',
      url: url,
      dataType: 'jsonp',
      success: function(json) {
         console.log(json);
          var data = $("#response").text(JSON.stringify(json));
          for (var i = 0, l = data.length; i < l; i++) {
          $('#response').text('The temperature today is ' + json.main.temp + '. Also, fyi: ' + json.weather[0].description +'!');
          console.log(json.main.temp);
          }
        },

      error: function(e) {
         console.log(e.message)
       }
  
});
});
});