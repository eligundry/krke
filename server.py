from flask import Flask, render_template, request
from flask_bootstrap import Bootstrap
import requests as rekt

MUSIXMATCH_API_KEY = '1ded3ade3e63977aef9212b43320afb1'
MUSIXMATCH_URL = 'http://api.musixmatch.com/ws/1.1/'

app = Flask(__name__)
Bootstrap(app)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/search', methods=['POST'])
def search():
    """
    Searches an MusixMatch for a song
    """
    data = {
        'q': request.form['query'] or None,
        'apikey': MUSIXMATCH_API_KEY,
        'format': 'json',
        's_track_rating': 'desc',
        'f_has_lyrics': 'true',
    }

    result = rekt.get(MUSIXMATCH_URL + 'track.search', params=data)

    return result.text

@app.route('/lyrics/<track_id>')
def lyrics(track_id):
    """
    Returns the synced lyrics from musixmatch
    https://developer.musixmatch.com/documentation
    """
    data = {
        'track_id': track_id,
        'apikey': MUSIXMATCH_API_KEY,
    }

    result = rekt.get(MUSIXMATCH_URL + 'track.subtitles.get', params=data)

    return result.text

if __name__ == '__main__':
    app.debug = True
    app.run()
