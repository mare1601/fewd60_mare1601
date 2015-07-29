$(function () {
//function above is doc ready; leave it alone




$('#task-form').submit(function(e){
  e.preventDefault();
  var newTask = $('#newTaskInput').val();

  $("#task-form").trigger("reset");

  if(newTask.length > 0) {
    $('#tasks-to-do').removeClass('hidden');
  };

  $('#tasks-to-do').append('<div class="task"><label for "checkbox">' + newTask + '</label>: ' +'<input type="checkbox" /> ' + '<br />' + '</name></div');
return false;



});

$(document).on('change', '.task', function() { 
  if($(this).is(':checked')){ 
    var parentElem = $(this).parent(); 
    };  
}); 
/* 
$('input:checkbox').on('click',function(){
    if($(this).is(':checked')) {
 $('.task').attr('hidden');
    };    
});
*/

//Leave the bracket and parens below alone forever
});