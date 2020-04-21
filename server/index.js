const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);


const cors = require('cors')
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const router = require('./router');


app.use(cors());
app.use(router);

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    if(room){
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});// lets everyone else in the room k now the user has joined
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });//user added to room

    //logic to see what users are in the room,send to room, emit name room data, pass in room (user.room),
  io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });//users are pulled through the fucntion get users

    callback();}
  });
//event for user genrated
  socket.on('sendMessage', (message, callback) => {//when user leaves send a new messge to room , resend updated users to room
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });
    // handleMessageCreate()
    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

server.listen(PORT , () => console.log(`Server has started ${PORT}.`));