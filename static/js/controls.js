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
	.on('click', '.thumbnail', function(event) {
		krke.GetLyrics($KK)
	});
})(jQuery);
