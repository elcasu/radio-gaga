const WebSocket = require('ws')
const { WebSocketServer } = WebSocket
let webSocket = null

const webSocketServer = new WebSocketServer({
  port: 8080,
})

webSocketServer.on('connection', function (socket) {
  socket.send('Hellooooooooooo!!')
})

module.exports = {
  webSocketServer,
  webSocket,
}
