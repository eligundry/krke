from flask import Flask
import requests as rekt

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
