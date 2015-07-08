//Define the functions to switch the background to specific cities
function nycbg () {
  $('body').addClass('nyc');
  return false;
}

function sfbg() {
  $('body').addClass('sf');
  return false;
}

function labg() {
  $('body').addClass('la');
  return false;
}

function austinbg() {
  $('body').addClass('austin');
  return false;
}

function sydneybg() {
  $('body').addClass('sydney');
  return false;
}


// Define the arrays that will be acceptable for each city code
var newyork = ['nyc', 'new york city', 'new york'];

var sanfran = ['san francisco', 'sf', 'bay area'];

var losangeles = ['los angeles', 'la', 'lax'];

var austintx = ['austin', 'atx'];

var sydneyaus = ['sydney', 'syd'];


//Create the submit function that then references the city/bg functions already created
//On-click referencing the button being clicked, and then the function to happen


$('#submit-btn').click(function () {
    if ($('#city-type').attr('newyork') === $('newyork')) {
      $('nycbg');
      return false;
    }
})

