



$(window).load(function(){
	function cycletest(){
		$('.cycle').cycle({
			speed: 2000
		});
		$('.cycle2').cycle({
			speed: 2000
		});
	}
	cycletest();


	var windowHeight = $(window).height();
	var scrollTo = 0;

	$('#content').css('margin-top', windowHeight+'px')

	 // Scroll page to the bottom
	 $('a.scrollToHome').unbind("click").click(function(){
	 	$('html, body, .content').animate({scrollTop: '0'}, 800);
	 
	 });

	 $('a.scrollToAbout').unbind("click").click(function(){
	 	$('html, body, .content').animate({scrollTop: $('#jabout').offset().top - 100}, 800);
	 });

	 $('a.scrollToContact').click(function(){
	 	$('html, body, .content').animate({scrollTop: $('#jcontact').offset().top - 100}, 800);

	 });

	 $('a.scrollToSchedule').click(function(){
	 	$('html, body, .content').animate({scrollTop: $('#jschedule').offset().top - 100}, 800);
	 });

	 $('a.scrollToNews').click(function(){
	 	$('html, body, .content').animate({scrollTop: $('#jnews').offset().top - 100}, 800);
	 });

	 $('.sendRequest').unbind("click").click(function(){
	 	sendRequest();
	 });


	 $('.schedule').ready(function(){
		$('#calendar').empty();
		$('#calendar').fullCalendar({
			events: 'https://www.google.com/calendar/feeds/goboqdkq0t30ooj6ijntddkulk%40group.calendar.google.com/public/basic',
			height: 450
		 });
	});

	function sendRequest() {
		alert("this button doesn't work yet");
	}

	

});




