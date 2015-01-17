from flask import Flask, render_template, request
from flask_bootstrap import Bootstrap
import requests as rekt

MUSIXMATCH_API_KEY = 'a87d5804cbe38a1afd0de1dc263cbea1'
MUSIXMATCH_URL = 'http://api.musixmatch.com/ws/1.1/'

app = Flask(__name__)
Bootstrap(app)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/search', methods=['POST'])
def search():
    """
    Searches an undetermined source for a song
    """
    data = {
        'q': request.form['query'] or None,
        'apikey': MUSIXMATCH_API_KEY,
        'format': 'json',
    }

    result = rekt.get(MUSIXMATCH_URL + 'track.search', params=data)

    return result.text

@app.route('/lyrics')
def lyrics():
    """
    Returns the synced lyrics from musixmatch
    https://developer.musixmatch.com/documentation
    """
    return 'lyrics'

if __name__ == '__main__':
    app.debug = True
    app.run()
