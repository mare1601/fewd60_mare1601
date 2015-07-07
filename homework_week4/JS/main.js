// First button in aside
document.getElementById('menubutton').addEventListener('mouseover', mouseOver);
document.getElementById('menubutton').addEventListener('mouseout', mouseOut);

function mouseOver() {
  document.getElementById('menubutton').style.backgroundColor = "yellow";
}
function mouseOut() {
  document.getElementById('menubutton').removeAttribute('style');
}


// blue steel
//Honestly I wanted it to work so that it changed ALL the links, but this was about as close as I could get!
//Not really complaining. Feelin pretty good about it.

var blueSteel = document.getElementsByTagName('nav')[0];

blueSteel.addEventListener('click', function() {
  blueSteel.setAttribute('class', 'bluesteel');
});
