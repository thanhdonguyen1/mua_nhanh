$(function(){
	$('.fade').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		nextArrow: '<span class="nextArrow"><img src="assets/img/icon_next.png"></span>',
	    prevArrow: '<span class="prevArrow"><img src="assets/img/icon_prev.png"></span>',
		cssEase: 'linear',
		dotsClass: 'custom-dots',
		autoplay: true,
		customPaging: function (slider, i) {
	    	// console.log(slider);
	    	var slideNumber = (i + 1),
	        totalSlides = slider.slideCount;
	    	return '<a class="dot" role="button" title="' + ' of ' + '"><span class="string"></span></a>';
		},
		
	});
})