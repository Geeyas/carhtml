$(function(){
	$('#left').click(function(){
		$('#car1').animate({
			left:"-=40px"
		},function(){});
	});

	$('#right').click(function(){
		$('#car1').animate({
			left:"+=40px"
		},function(){});
	});

	$('#up').click(function(){
		$('#car1').animate({
			top:"-=40px"
		},function(){});
	});

	$('#down').click(function(){
		$('#car1').animate({
			top:"+=40px"
		},function(){});
	});


	$('#toggle').click(function(){
		$('#car1').slideToggle();
		$('.controller').slideToggle();
	});




});
