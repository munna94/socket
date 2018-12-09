console.log('inside js');
var socket=io();
//this will fire when its connected to server . means when both client and server connected
//then both side socket.on with inbuild connect method will  get executed
socket.on('connect',function(){
  console.log('connected to server inside html');
  //this will send to server. 1st arg is event name & 2nd is data
  socket.emit('createEmail',{data:'fromClient to server'});
  socket.emit('createMessage',{from:'munna',text:'this works fine'})
});
// now implement  inbuild disconnect which will fire when server will closed or stopped.
//this will useful when server goes down then client do something
socket.on('disconnect',()=>{
  console.log('disconnected from server');
});
//this will recieved the data from server.. {name:'munna',salary:'50L'}
socket.on('NewEmail',function(recievedDataFromServer){
  console.log('data is ',recievedDataFromServer);
});

//now receive new message from server
socket.on('newMessage',function(message){
  console.log('hey message is ',message);
});
