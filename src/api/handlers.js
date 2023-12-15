const { radios } = require('../streams')
const Player = require('../services/player')

const playHandler = () => (req, res) => {
  const radioKey = req.params.radio
  const radio = radios.find(r => r.key === radioKey)
  const playerInstance = new Player({
    app: 'mpv',
    media: radio.stream_url,
  })
  // playerInstance.play(radio)
  res.send({ stream: radio })
  // playerInstance.play(radio.stream_url, () => {
  //   res.send({ stream: radio })
  // })
}

const getRadiosHandler = (playerInstance) => (req, res) => {
  res.send({ streams: radios })
}

const getStatusHandler = (playerInstance) => (req, res) => {
  res.send('something')
}

module.exports = {
  getRadiosHandler,
  playHandler,
  getStatusHandler,
}
