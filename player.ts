const fs = require('fs');
const m3u8stream = require('m3u8stream')

m3u8stream('https://server1.stweb.tv/rcvos/live/playlist.m3u8')
    .pipe(fs.createWriteStream('test.mp3'))



// var audio = require('audio-stream')
//  
// function mediaStream() {
//     var stream = audio(mediaStream, {
//         channels: 1,
//         volume: 0.5
//     });
//  
//     stream.on('header', function(header) {
//         // Wave header properties
//     });
//  
//     stream.on('data', function(data) {
//         // Data is a Buffer instance (UInt8Array)
//     });
//  
//     stream.on('end', function() {
//         // End is emitted when media stream has ended
//     });
//  
//     setTimeout(function() {
//         mediaStream.stop()
//     }, 5000);
// }
