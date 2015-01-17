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
		var service = $(this).attr('data-service'),
			service_id = $(this).attr('data-target')
			lyrics_id = $(this).parents('.thumbnail').attr('data-target');

		krke.ToggleViews();
		krke.GetLyrics(lyrics_id);
		krke.GetAudio(service, service_id);
	});
})(jQuery);
