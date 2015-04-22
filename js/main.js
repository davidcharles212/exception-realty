$(function() {
	/// Mobile Menu ///

	$('a.menu-icon').click(function() {
		$('#menu-links').slideToggle();
	});

	$(window).resize(funtion() {
		if ($(window.width() > 700px ) {
			$('#menu-links').removeAttr('style');
		}
	});
});
