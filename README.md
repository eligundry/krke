# krke
A web based karaoke machine
Subject to change, but uses pico.js and one other music API, possibly something like Youtube or Spotify, or Rdio, or something like that...
Created by David Patuwo, =ADD NAMES HERE=

READ THIS JACK: http://stackoverflow.com/questions/3673042/algorithm-to-remove-vocal-from-sound-track
Just in case pico is too lightweight: https://github.com/oampo/Audiolet

## Installation

Requirements:

* [virtualenv](https://virtualenv.pypa.io/en/latest/)
* [Python 2](https://www.python.org/)

Instructions

```shell
$ mkdir $HOME/.virtualenvs
$ virtualenv -p python2 --no-site-packages $HOME/.virtualenvs/krke
$ source $HOME/.virtualenvs/krke/bin/activate
$ pip install -r requirements.txt
$ python server.py
```
