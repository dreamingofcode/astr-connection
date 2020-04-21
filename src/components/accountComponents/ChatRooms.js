import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AccountChat from './AccountChat';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import io from 'socket.io-client'
const ENDPOINT = 'localhost:5000'
const ChatRooms = () => {
  let socket;
  const dispatch = useDispatch();
  // const createUser=(name, room)=> {
  //   socket = io(ENDPOINT)
  //   if (currentChatRoom) {
  //     socket.emit('join', { name, room }, (error) => {
  //       if (error) {
  //         alert(error);
  //       }
  //     });
  //   }
  // }
  const handleChatRoomFetch = (message) => {
    dispatch({
      type: 'CURRENT_CHAT_ROOM',
      payload: message,
    });
    fetch(`http://localhost:3000/api/v1/chat_rooms/${userData.id}`) //will fetch messages belonging to chatroom
      .then((resp) => resp.json())
      .then((data) => {
        console.log('chatrooms', data);
        dispatch({
          type: 'CURRENT_CHAT_ROOM',
          payload: message,
        });
      });
  };
  const handleChatDelete = (event) => {
    const chatId = event.target.value;
    fetch(`http://localhost:3000//api/v1/chat_rooms/${chatId}`, {
      method: 'DELETE',
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('fuckit deleted this chatroom', data);
        dispatch({
          type: 'CURRENT_CHAT_ROOM',
          payload: chatId,
        });
      });
  };
  const userData = useSelector((state) => state.userData);
  const messageBoard = useSelector((state) => state.messageBoard);
  const currentChatRoom = useSelector((state) => state.currentChatRoom);

  return (
    <React.Fragment>
      <div className="col-3 chatrooms-board justify-content-start">
        <MuiThemeProvider>
          <h3 className="chatrooms-board-header">ChatRooms</h3>
          <List>
            {messageBoard.map((message) => {
              return (
                <ListItem>
                  <RaisedButton
                    onClick={() => {
                      handleChatRoomFetch(message);
                    }}
                    primary={true}
                  >
                    {message.name.split(' ')[3]}
                  </RaisedButton>
                  <button
                    value={message.id}
                    onClick={(event) => handleChatDelete(event)}
                  >
                    Delete
                  </button>
                </ListItem>
              ); //for unrread messages:message.name.split(" ")[0] + '(${unreadMessages})'
            })}
          </List>
        </MuiThemeProvider>
      </div>
      <div className="row">
        {currentChatRoom ? (
          <AccountChat />   //createUser={createUser()} attempt to pass the function down and then up so every client rendfers new chatbox
        ) : (
          <h1>Please Select A Chat Room!</h1>
        )}
      </div>
    </React.Fragment>
  );
};
const styles = {
  button: {
    margin: 10,
  },
};

export default ChatRooms;
