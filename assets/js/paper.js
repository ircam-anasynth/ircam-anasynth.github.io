$(document).ready(function(){

   $("a[data-toggle] > i").on('click', function(){
       	if ($(this).hasClass("fas fa-caret-up")) {
    		$(this).attr("class", "fas fa-caret-down")
		} else { 
    		$(this).attr("class", "fas fa-caret-up")
		}
	});

});


