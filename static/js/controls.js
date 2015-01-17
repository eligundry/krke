(function($) {
	var search_form = $('#music-search-form')
		krke = new Krke();

	search_form
	.on('submit', function(event) {
		event.preventDefault();
		var query = $(this).find("input[type='search']").val();
		krke.Search(query);
	});
})(jQuery);
