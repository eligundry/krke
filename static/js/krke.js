function Krke(settings_object) {
	this.settings = {
		elements: {
			audio: $('.player'),
			lyrics: '#lyrics',
			search: $('.search')
		}
	};

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
			self.settings.elements.search.html(output);
		}
	});
};

Krke.prototype.GetLyrics = function(track_id) {
	var self = this;

	jQuery.ajax({
		method: 'GET',
		url: '/lyrics/' + track_id,
		success: function(data, status, xhr) {
			var json = jQuery.parseJSON(data);
			self.lyrics_list = json.message.body.subtitle_list[0].subtitle.subtitle_body;
			self.settings.elements.audio.kirinlyric({
				target: self.settings.elements.lyrics,
				lrc: self.lyrics_list
			});
		}
	})
};
