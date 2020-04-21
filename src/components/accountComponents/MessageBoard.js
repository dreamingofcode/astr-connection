import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import AccountChat from './AccountChat';
import ChatRooms from './ChatRooms';
import selectedZoLoading from '../../reducers/zodiac/chatsLoading';
const MessageBoard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/chat_rooms/${userData.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log('chatrooms', data);
        dispatch({ type: 'CURRENT_MESSAGE_BOARD', payload: data });
        dispatch({ type: "SELECTED_ZODIAC_BABY", payload: data });
      });
  }, []);
  const userData = useSelector((state) => state.userData);
  const isLoading = useSelector((state) => state.isLoading);
  const messageBoard = useSelector((state) => state.messageBoard);
  const ChatsLoading = useSelector((state) => state.ChatsLoading);

  return (
    <div className="row justify-content-start ">
      <MuiThemeProvider>
        <div className="col-11 message-board justify-content-center">
          <div className="row">
            {ChatsLoading? <h1>jji</h1> :
            <ChatRooms />}
            {/* <AccountChat /> */}
          </div>
        </div>
        <div className="col-6 my-message"></div>
      </MuiThemeProvider>
    </div>
  );
};
const styles = {
  button: {
    margin: 4,
  },
};

export default MessageBoard;
