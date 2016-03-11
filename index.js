var app = require('express')();
var http = require('http').Server(app);
//var io = require('socket.io');
var io = require('socket.io')(http);
// var express = require("express");
var path = require("path");
// var app = express();
// var server = require('http').createServer(app);
// var sio = io.listen(server);
var port = process.env.PORT || 5000;


var motionNum = 0;
//app.set('port', port);
// app.use(express.static(__dirname + "/"));
// var server = http.createServer(app);
// var io = require('socket.io').listen(server);
// server.listen(app.get('port'), function() {
// 	console.log('Express listening on port ' + app.get('port'));
// });


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/video1', function(req, res){
  // res.sendFile(__dirname + '/video1.html');
  res.sendFile(path.join(__dirname+'/video1.html'));
});

app.get('/video2', function(req, res){
  // res.sendFile(__dirname + '/video2.html');
  res.sendFile(path.join(__dirname+'/video2.html'));
});

app.get('/video3', function(req, res){
  // res.sendFile(__dirname + '/video3.html');
  res.sendFile(path.join(__dirname+'/video3.html'));
});

app.get('/webcam', function(req, res) {
  res.sendFile(path.join(__dirname+'/webcam.html'));
})



io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('refresh message', function(){
  	console.log("refresh videos");
  	io.emit('refresh message', "hello");
  });

  socket.on('play message', function(){
  	console.log("play videos");
  	io.emit('play message', "hello");
  });

  socket.on('pause message', function(){
    console.log("pause videos");
    io.emit('pause message', "hello");
  });

  socket.on('stop message', function(){
    console.log("stop videos");
    io.emit('stop message', "hello");
  });

  socket.on('stop motion message', function(){
    console.log("stop motion");
    io.emit('stop motion message', "hello");
  });

  socket.on('start motion message', function(){
    console.log("start motion");
    io.emit('start motion message', "hello");
  });

  socket.on('motion message', function(){
    if (motionNum == 0){
      io.emit('play message', "hello");  
      motionNum = 1;
    }
    motionNum = 1;
    
    console.log("motion detected");
    // io.emit('play message', "hello");
    
  });


});

http.listen(port, function(){
  console.log('listening on *:5000');
});
// app.listen(port);