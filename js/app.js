$('.window>.panel .customize-button').click(function(e) {
	$('.customization-view').removeClass('soft-hide');
	$('.window').toggleClass('customize');
});

$('.sidebar .customize-button').on('click', function(e) {
	$('.customization-view').addClass('soft-hide');
	$('.window').toggleClass('customize');
});

// // delay each icon
// var icons = $('.button');
// // clamp the delay if there are many icons
// var transitionDelay = 0.1;
// var maxTransitionTime = 0.7;
// if ( transitionDelay * (icons.length-1) > maxTransitionTime ) {
// 	transitionDelay = maxTransitionTime/(icons.length-1);
// }
// _.each(icons, function(item, index) {
// 	$(item).css({'transition-delay': 0.3+transitionDelay*index+'s'});
// });