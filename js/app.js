$(document).ready(function(){

	// "need" button

	$("#btn1").click(function(){
		$("#need-list").append($("<li>", { text: $("#need-input").val()
		}));
		$("#need-input").val("");
	});

	$("#need-input").on("keydown", function(e) { 
    if(e.keyCode == 13) {
        $("#btn1").click();
        $(this).val("");
  		}
	});

	// "want" button

	$("#btn2").click(function(){
		$("#want-list").append($("<li>", { text: $("#want-input").val()
		}));
		$("#want-input").val("");
	});

	$("#want-input").on("keydown", function(e) { 
    if(e.keyCode == 13) {
        $("#btn2").click();
        $(this).val("");
  		}
	});

	// click list item to hide

	$('ul').on('click', 'li', function(event) {
		$(this).slideUp();
	});

});