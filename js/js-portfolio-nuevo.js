$(document).on("ready",function(){

	$('#myModal').on('shown.bs.modal', function () {
		$('#myInput').focus();
	})
	$("#lista-navbar ul li a").on("click", function(){
		var seccion = $(this).attr("name");
		var posicion = $("#"+seccion).position().top;

		$("body").animate({
			scrollTop:posicion,
		},4000, "easeInOutCubic");
	})

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		$(".capa-dos").css({
			"background-position-x":500- (barra*0.50)+"px",
		})
	})
})