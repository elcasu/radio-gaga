// 
// import Player from './services/player'
// import { radios } from './streams'
// 
// player = new Player()
// 
// console.log('playing radio, ', radios[0])
// 
// player.play(radios[0].stream_url)
const express = require('express')
const Player = require('../services/player')
const { radios } = require('../streams')

class Api {
  _routes = [
    {
      path: '/',
      method: 'get',
      handler: this._getHandler.bind(this)
    },
    {
      path: '/play/:radio',
      method: 'post',
      handler: this._playHandler.bind(this)
    }
  ]
  _player

  constructor(port) {
    // binding
    this._setRoutes = this._setRoutes.bind(this)

    // create player instance
    this._player = new Player()

    // bring up http server
    this._app = express()
    this._setRoutes()
    this._port = port

    this._app.listen(port, () => {
      console.log(`HTTP server running on port ${port}...`);
    })
  }

  _setRoutes() {
    for (const route of this._routes) {
      this._app[route.method](route.path, route.handler)
    }
  }

  _getHandler(req, res) {
    res.send('Hello world :)')
  }

  _playHandler(req, res) {
    const radioKey = req.params.radio
    const radio = radios.find(r => r.key === radioKey)
    this._player.play(radio.stream_url)
    res.send(`Playing radio ${radio.name}`)
  }
}

module.exports = Api
