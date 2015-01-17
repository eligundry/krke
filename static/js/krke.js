function Krke() {
	this.context = new AudioContext();
	this.card_template = $.templates('#song-card');
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
			this.tracklist = json.message.body.track_list;
			console.log(this.tracklist);
			var self = this;
			var html = this.card_template.render(self.tracklist);
			$('main').html(html);
		}
	});
};
