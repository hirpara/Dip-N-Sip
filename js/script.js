$(document).ready(function () {
	$(".scroll").click(function (event) {
 		event.preventDefault();
 		$('html,body').animate({
 			scrollTop: $(this.hash).offset().top
 		}, 1000);
 	});
 	$("#owl-demo").owlCarousel({
 		items: 1,
 		lazyLoad: true,
 		autoPlay: true,
 		navigation:false,
 		navigationText: true,
 		pagination: true,
 	});
 	$("#introVid").click();
});
