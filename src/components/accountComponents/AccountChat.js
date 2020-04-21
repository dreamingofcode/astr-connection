import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import '../chatComponents/chat.css';
import io from 'socket.io-client';
import InfoBar from '../chatComponents/InfoBar/InfoBar';
import Input from '../chatComponents/Input/Input';
import Messages from '../chatComponents/Messages/Messages';
import TextContainer from '../chatComponents/TextContainer/TextContainer';
import { useSelector, useDispatch } from 'react-redux';

//front end

let socket;

const AccountChat = ({ location }) => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userData);
  let [name, setName] = useState(userData.name);
  let [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]); //what i will use to set messages from backend
  const ENDPOINT = 'localhost:5000'; //https://project-chat-application.herokuapp.com/
  const currentChatRoom = useSelector((state) => state.currentChatRoom);
  const currentChatUser = useSelector((state) => state.currentChatUser);
  const currentlyViewing = useSelector((state) => state.currentlyViewing);
  const isLoading = useSelector((state) => state.isLoading);
  const messageBoard = useSelector((state) => state.messageBoard);

  // //    useEffect(() => {
  // //     if (!isLoading) {
  // //       if (createChatRoom) {
  // //         const reObj = {
  // //           method: 'POST',
  // //           headers: {
  // //             'Content-Type': 'application/json',
  // //             Accept: 'application/json',
  // //           },
  // //           body: JSON.stringify({
  // //             chatroom: {
  // //               user1_id: userData.id,
  // //               user2_id: currentlyViewing.id,
  // //               name: currentChatRoom,
  // //             },
  // //           }),
  // //         };
  // //         fetch(`http://localhost:3000/api/v1/chat_rooms`, reObj)
  // //           .then((resp) => resp.json())
  // //           .then((data) => {
  // //             console.log('we got a chat room', data);
  // //             console.log("loader", createChatRoom)
  // //             dispatch({ type: 'CREATE_CHAT_ROOM' });
  // //           })
  // //           .catch((error) => console.log(error));
  // //       }
  // //       console.log("loader after", createChatRoom)
  // //     }
  // //   },[]);
  const createUser = (name, room) => {
    socket = io(ENDPOINT);
    if (currentChatRoom) {
      socket.emit('join', { name, room }, (error) => {
        if (error) {
          alert(error);
        }
      });
    }
  };
  useEffect(() => {
    //generates the room and user
    socket = io(ENDPOINT);
    name = userData.name.split(' ')[1];
    setName(name);
    room = currentChatRoom.name;
    setRoom(room);

    createUser(name, room);
  }, [ENDPOINT]);

  //handling messages,adding them to an existing history of messages
  useEffect(() => {
    //   if (currentChatRoom)  {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
    // }
  }, [currentChatRoom]);
  const sendMessage = (event) => {
    // function for sending messages
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        message:{user_id:userData.id, recipient_id: currentChatRoom.user2_id  , text: message, chatroom_name: currentChatRoom.name,chatroom_id:currentChatRoom.id, read:true}  
      })
    };
    fetch(`http://localhost:3000/api/v1/messages`,config)
      .then((resp) => resp.json())
      .then((data) => {
        console.log('newmessage', data);
      });
  };

  //const sendMessage =""

  return (
    <div className=" col-12 outerContainer">
      <div className="messages"></div>

      <div className="chat-box">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};
export default AccountChat;
