//console.log(__dirname+'../public');
const path=require('path');
const http=require('http');
const express=require('express');
const socketIO=require('socket.io');
const publicPath=path.join(__dirname,'../public');
app=express();
var server =http.createServer((app));

var io=socketIO(server);
//this will fire when client will connect to this port 3000 server
//mens when as soon as client hit localhost://3000 then this is fired
io.on('connection',(socket)=>{
  console.log('new user connected');
// emit is used to create the event instead of listing
socket.emit('NewEmail',{name:'munna',salary:'50L'});
//next emit to client on newmessage event
socket.emit('newMessage',{message:'this sent from server to client'})
//this will receive data from client
socket.on('createEmail',(newEmail)=>{
  console.log('createEmail',newEmail);
});

socket.on('createMessage',(message)=>{
  console.log('mmm',message);
});

  //this will call when client will get disconnected
  socket.on('disconnect',()=>{
    console.log('client is disconnected');
  });
});
app.use(express.static(publicPath))

//this will call when we start the server
server.listen(3000,()=>{
  console.log('server started');
})
//using socket we can send data from client to server or viceversa
