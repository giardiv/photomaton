const http = require('http');
const NodeWebcam = require("node-webcam");
const express = require('express');
const app = express();
const path = require('path');
//const cv = require('opencv4nodejs');
const npmRun = require('npm-run');

const server = http.Server(app);
const io = require('socket.io')(server);

const port = 3000;
const hostname = '127.0.0.1';

//const wCap = new cv.VideoCapture(0);

app.use('/public', express.static('public'))
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

var opts = {
    callbackReturn: "base64",
    width: 1280,
    height: 720,
    quality: 10,
    delay: 10,
    saveShots: false,
    output: "jpeg",
    device: false,
    verbose: true
};

var Webcam = NodeWebcam.create(opts);

// NodeWebcam.capture("test_picture", opts, function (err, data) {
//     var image = "<img src='" + data + "'>";
// });

npmRun.exec('Start-Process -FilePath "c:\docstoprint\doc1.pdf" -Verb Print', {cwd: __dirname }, function (err, stdout, stderr) {
    // err Error or null if there was no error
    // stdout Buffer|String
    // stderr Buffer|String
})

setInterval(() => {
    //const frame = wCap.read();
    //console.log(frame);
    //const image = cv.imencode('.jpg', frame).toString('base64');

   // Webcam.capture("test", opts, function (err, image) {
    //    console.log(image);
    //    io.emit('image', image);
    //    Webcam.clear();
   // });

}, 1000)


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});




// //Default options
// var opts = {
//     //Picture related
//     width: 1280,
//     height: 720,
//     quality: 100,
//     delay: 0,
//     saveShots: true,
//     output: "jpeg",
//     device: false,
//     callbackReturn: "location",
//     verbose: true
// };

// var Webcam = NodeWebcam.create(opts);

// Webcam.capture("test_picture", function (err, data) { });

// NodeWebcam.capture("test_picture", opts, function (err, data) {});

// Webcam.list(function (list) {
//     var anotherCam = NodeWebcam.create({ device: list[0] });
// });

// //Return type with base 64 image
// var opts = {
//     callbackReturn: "base64"
// };



// function execute(){
//     NodeWebcam.capture("test_picture", opts, function (err, data) {
//         var image = "<img src='" + data + "'>";
//     });
//     console.log("-");
// }

// setInterval(execute,40);