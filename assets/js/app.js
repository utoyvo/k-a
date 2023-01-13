jQuery(document).ready(function(){
	$('.marquee').marquee({
		duration:         8000,
		gap:              24,
		delayBeforeStart: 0,
		direction:        'left',
		pauseOnHover:     false,
		duplicated:       true
	});
});
