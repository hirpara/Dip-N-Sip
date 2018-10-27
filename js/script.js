$(document).ready(function () {
	$(".scroll").click(function (event) {
 		event.preventDefault();
 		$('html,body').animate({
 			scrollTop: $(this.hash).offset().top - 72
 		}, 1500);
 		$(".navbar-toggler").click();
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
 		 // FOR SCROLL ANIMATIONS
    window.scrollReveal = new scrollReveal();
});
