document.getElementsByTagName("li")[0].addEventListener("click",function(){
	if(!this.parentNode.getAttribute("class")){
		this.parentNode.setAttribute("class","slideDown");
	}
	else{
		this.parentNode.removeAttribute("class");
	}
});


 $(window).resize(function() {
  if ($(window).width() < 960) {
     $('.switch').text('this text has been changed but probably not');
  }
 else {
     $('.switch').text('this text has actually actually been changed!');
 }
});