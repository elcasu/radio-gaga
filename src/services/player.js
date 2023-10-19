const PlayerController = require('media-player-controller')

class Player {
  _nativeApp = 'mpv'
  _playerOptions = {}
  _player

  constructor(options = {}) {
    this._playerOptions = options
  }

  onPlayback() {}
  onPlaybackStarted() {}
  onAppExit() {}

  play(streamUrl) {
    if (!streamUrl) {
      throw new Error('streamUrl is required')
    }
    this._player = new PlayerController({
      app: this._nativeApp,
      media: streamUrl,
      ...this._playerOptions,
    })
    this._player.on('playback', this.onPlayback.bind(this))
    this._player.on('playback-started', this.onPlaybackStarted.bind(this))
    this._player.on('app-exit', this.onAppExit.bind(this))
    this._player.launch(err => {
      if(err) return console.error(err.message)
      console.log('Media player launched')
    })
  }
}

module.exports = Player
