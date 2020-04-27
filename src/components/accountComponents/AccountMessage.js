import React from 'react';

import '../chatComponents/Messages/Message.css';

import ReactEmoji from 'react-emoji';

const AccountMessage = ({ message: { text, chatroom_name}, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();
const user= chatroom_name.split(" ")[0]
  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText pl-10 ">{user}</p>
          </div>
        )
  );
}

export default AccountMessage;