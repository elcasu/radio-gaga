const PlayerController = require('media-player-controller')

class Player {
  _playerOptions = {
    app: 'mpv',
  }
  _player

  constructor(options = {}) {
    this.play = this.play.bind(this)
    this._player = new PlayerController({
      ...this._playerOptions,
      ...options,
    })
    this._player.on('playback-started', () => {
      console.log('Playback started...')
    })
    // this._player.on('playback-started', onReadyCb)
    this._player.on('app-exit', this.onAppExit.bind(this))
    this._player.launch(err => {
      if(err) return console.error(err.message)
      console.log('Media player launched')
    })
  }
  onPlaybackStarted() {}
  onAppExit() {}

  static init() {}

  play(stream, onReadyCb = () => {}) {
    if (!stream || !stream.stream_url) {
      throw new Error('stream is required')
    }
    this._player.load(stream.stream_url)
  }
}

module.exports = Player
