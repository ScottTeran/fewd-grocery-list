$(document).ready(function(){

	// click button, add to list

	$("#btn1").click(function(){
		$("#need-list").append($("<li>", { text: $("#need-input").val()
		}));
	});

	$('ul').on('click', 'li', function(event){
	  // fires when any LIs are clicked on
	  $("li").hide();
	  // including LIs that aren't on the page when it is initially loaded
	});

// notes: use .val(), .prepend(), .append()	 

});

