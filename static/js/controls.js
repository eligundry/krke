(function($) {
	var search_form = $('#music-search-form'),
		main_el = $('main'),
		krke = new Krke();

	search_form
	.on('submit', function(event) {
		event.preventDefault();
		var query = $(this).find("input[type='search']").val();
		krke.Search(query);
	});

	main_el
	.on('click', '.service-button', function(event) {
		krke.GetAudio($(this).attr('data-service'), $(this).attr('data-target'));
		krke.GetLyrics($(this).attr('data-target'));
		krke.ToggleViews();
	});
})(jQuery);
