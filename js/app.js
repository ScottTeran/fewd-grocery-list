$(document).ready(function(){

	// click button, add to list

	$("#btn1").click(function(){
		$("#need-list").append($("<li>", { text: $("#need-input").val()
		}));
	});

	// click list item to hide

	$('ul').on('click', 'li', function(event) {
		$(this).slideUp();
	});

});

	// EXPERIMENTS (I might get back to these...)

	// $("ul").on("mouseenter", "li", function(event){
	// 	$(this).addClass("strike-it").add("<span> !</span>");
	// });

	//$("ul").on("li").mouseenter( function(){
	//	$(this).addClass("strike-it")}
	//	.mouseleave
	//})

	// $(".flex-container").keydown(function(e){
	// 	if (e.keyCode == 13) {
	// 		$("#need-list").append($("<li>", { text: $("#need-input").val()
	// 	}
	// }); 



