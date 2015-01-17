function Krke() {
	this.context = new AudioContext();
	this.card_template = $.templates('#song-card');
}

Krke.prototype.Search = function(query) {
	var self = this;

	jQuery.ajax({
		method: 'POST',
		url: '/search',
		data: {
			query: query
		},
		success: function(data, status, xhr) {
			var json = jQuery.parseJSON(data);
			self.tracklist = json.message.body.track_list;
			console.log(self.tracklist);
			var output = self.card_template.render(self.tracklist);
			$('main').html(output);
		}
	});
};
