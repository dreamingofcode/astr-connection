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
  const createChatRoom = useSelector((state) => state.createChatRoom);
  const currentlyViewing = useSelector((state) => state.currentlyViewing);
  const isLoading = useSelector((state) => state.isLoading);
  const fetchMessages = useSelector((state) => state.fetchMessages);

  useEffect(() => {
    if (!isLoading) {

      fetch(`https://astro-connection.herokuapp.com/api/v1/messages/${currentChatRoom.id}`)
        .then((resp) => resp.json())
        .then((data) => {
          console.log('we got messages', data);

          dispatch({ type: 'FETCH_MESSAGES', payload: data });
        })
        .catch((error) => console.log(error));

      console.log('loader after', createChatRoom);
    }
  }, []);
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
    name = userData.name.split(' ')[0];
    setName(name);
    room = currentChatRoom.name;
    setRoom(room);

    createUser(name, room);
  }, [ENDPOINT]);

  //handling messages,adding them to an existing history of messages
  useEffect(() => {
    //   if (fetchMessages)  {
        
          socket.on('message', (message) => {
            setMessages((messages) => [...messages, message]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
    //   }
  }, []);//currentChatRoom
  const sendMessage = (event) => {
    // function for sending messages
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }//used to create message in memory
    // const config = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    //   body: JSON.stringify({
    //     message: {
    //       user_id: userData.id,
    //       recipient_id: currentChatRoom.user2_id,
    //       text: message,
    //       chatroom_name: currentChatRoom.name,
    //       chatroom_id: currentChatRoom.id,
    //       read: true,
    //     },
    //   }),
    // };
    // fetch(`https://astro-connection.herokuapp.com/api/v1/messages`, config)
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     console.log('newmessage', data);
    //   });
  };

  //const sendMessage =""

  return (
    <div className=" col-12 outerContainer">
      <div className="messages"></div>

      <div className="chat-box">
        <InfoBar room={room} />
        {/* {fetchMessages?
        
        <Messages messages={ fetchMessages} fetchMessages={fetchMessages} name={name} />:<Messages messages={ messages} name={name} />} */}
    
        
<Messages messages={ messages} name={name} />
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
