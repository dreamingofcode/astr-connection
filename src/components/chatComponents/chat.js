import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './chat.css';
import InfoBar from './InfoBar/InfoBar';
import Input from './Input/Input';
import Messages from './Messages/Messages';
import TextContainer from './TextContainer/TextContainer';
import { useSelector, useDispatch } from 'react-redux';

//front end

let socket;

const Chat = ({ location }) => { //LOCATION is basically the url present
  const dispatch = useDispatch();

  const [name, setName] = useState('');// a way to use and set state and class component events
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'localhost:5000'; /// //https://project-chat-application.herokuapp.com/
  const currentChatRoom = useSelector((state) => state.currentChatRoom);
  const createChatRoom = useSelector((state) => state.createChatRoom);
  const userData = useSelector((state) => state.userData);
  const currentlyViewing = useSelector((state) => state.currentlyViewing);
  const isLoading = useSelector((state) => state.isLoading);
   useEffect(() => {
    if (!isLoading) {
      // if (createChatRoom) {
        const reObj = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            chatroom: {
              user1_id: userData.id,
              user2_id: currentlyViewing.id,
              name: currentChatRoom,
            },
          }),
        };
        fetch(`https://localhost:3000/api/v1/chat_rooms`, reObj)
          .then((resp) => resp.json())
          .then((data) => {
          
            console.log("loader after", data)
            // dispatch({ type: 'CREATE_CHAT_ROOM' });
          })
          .catch((error) => console.log(error));
      // }
    }
  },[]);
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);// based on the url pulls the name and room name `/chat?name=${userData.name}&room=${currentChatRoom

    socket = io(ENDPOINT);// brings in the server

    setRoom(room);//sets the state 
    setName(name);

    socket.emit('join', { name, room }, (error) => { //similar to a reducer, sends to create user to room in index backend
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  //handling messages,adding them
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    //function for sending messages
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};
export default Chat;
