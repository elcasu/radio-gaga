var StreamPlayer = require('stream-player')

var player = new StreamPlayer()
 
// Add a song url to the queue
player.add('http://path-to-mp3.com/example.mp3')
 
// Add a song url to the queue along with some metadata about the song
// Metadata can be any object that you want in any format you want
var metadata = {
  "title": "Some song",
  "artist": "Some artist",
  "duration": 234000,
  "humanTime": "3:54"
}
 
player.add('http://path-to-mp3.com/example.mp3', metadata)
 
// Start playing all songs added to the queue (FIFO)
player.play()
