from flask import Flask, render_template
import requests as rekt

MUSIXMATCH_API_KEY = 'a87d5804cbe38a1afd0de1dc263cbea1'

app = Flask(__name__)

@app.route('/')
def home():
    return 'home'

@app.route('/search')
def search():
    """
    Searches an undetermined source for a song
    """
    return 'search'

@app.route('/lyrics')
def lyrics():
    """
    Returns the synced lyrics from musixmatch
    https://developer.musixmatch.com/documentation
    """
    return 'lyrics'

if __name__ == '__main__':
    app.run()
