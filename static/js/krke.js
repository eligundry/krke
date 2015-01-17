function Krke(settings_object) {
	this.settings = {
		elements: {
			audio: $('#audio'),
			player: $('.player'),
			widget: $('#embed-widget'),
			lyrics: '#lyrics',
			search: $('.search')
		},
		templates: {
			card: $.templates('#song-card'),
			spotify: $.templates('#spotify-player-template'),
			soundcloud: $.templates('#soundcloud-player-template')
		}
	};

	this.context = new AudioContext();
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
			var output = self.settings.templates.card.render(self.tracklist);
			self.settings.elements.search.html(output);
		}
	});
};

Krke.prototype.GetAudio = function(service, id) {
};

Krke.prototype.GetLyrics = function(track_id) {
	var self = this;

	jQuery.ajax({
		method: 'GET',
		url: '/lyrics/' + track_id,
		success: function(data, status, xhr) {
			var json = jQuery.parseJSON(data);
			self.lyrics = json.message.body.subtitle_list[0].subtitle.subtitle_body;
			self.settings.elements.audio.kirinlyric({
				target: self.settings.elements.lyrics,
				lrc: self.lyrics
			});
		}
	})
};

Krke.prototype.ToggleViews = function() {
	this.settings.elements.player.toggleClass('hidden');
	this.settings.elements.search.toggleClass('hidden');
};
