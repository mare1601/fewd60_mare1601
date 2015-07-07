var tempC = 10;
var tempF = tempC * 9 / 5 + 32;
var threshold = 70;

if (tempF < threshold) {
  document.body.setAttribute("style", "background-color: grey;");
  document.write(tempF);
} else {
  document.body.setAttribute("style", "background-color: yellow;");
  document.write(tempF);
}