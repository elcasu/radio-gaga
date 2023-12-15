const express = require('express')
const app = express()
require('express-ws')(app)
const Player = require('../services/player')
const {
  getRadiosHandler,
  playHandler,
  getStatusHandler,
} = require('./handlers')

const routes = [
  {
    path: '/',
    method: 'get',
    handler: getRadiosHandler,
  },
  {
    path: '/play/:radio',
    method: 'post',
    handler: playHandler,
  },
  {
    path: '/status',
    method: 'get',
    handler: getStatusHandler,
  },
]

class Api {
  _player

  constructor(port) {
    // bring up http server
    this._app = app
    this._port = port
    this._app.ws('/state', function(ws, req) {
      ws.on('message', function(message) {
        console.log('MSG --->', message)
      })
    })

    // define routes
    for (const route of routes) {
      this._app[route.method](route.path, route.handler(this._player))
    }

    this._app.listen(port, () => {
      console.log(`HTTP server listening on port ${port}...`);
    })
  }
}

module.exports = Api
