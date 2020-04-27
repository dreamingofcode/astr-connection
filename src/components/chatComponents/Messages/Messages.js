import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ScrollToBottom from 'react-scroll-to-bottom';
import AccountMessage from '../../accountComponents/AccountMessage'
import Message from './Message';

import './Messages.css';
// import fetchMessages from '../../../reducers/chat/fetchMessages';
// import fetchMessages from '../../../reducers/chat/fetchMessages';
const token = localStorage.getItem('token');

//find a way to check if chatroom exist?
// const fetchMessages = useSelector((state) => state.fetchMessages);
const Messages = ({ messages, name, fetchMessages }) => (
  <ScrollToBottom className="messages">
   {/* {fetchMessages?  messages.map((message, i) => <div key={i}><AccountMessage message={message} name={message.chatroom_name.split(" ")[0]}/></div>): null}
   {!fetchMessages?  messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>): null} */}
   { messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}

  </ScrollToBottom>
);

export default Messages;