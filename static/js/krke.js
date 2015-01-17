function Krke() {
	this.context = new AudioContext();
}

Krke.prototype.Search = function(query) {
	jQuery.ajax({
		method: 'POST',
		url: '/search',
		data: {
			query: query
		},
		success: function(data, status, xhr) {
			var json = jQuery.parseJSON(data);
			this.tracklist = json.track_list;
		}
	});
};
