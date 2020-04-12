import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import malePic from '../../icons/maleIcon.jpeg';
import femalePic from '../../icons/femaleIcon.jpeg';
import messageIcon from '../../icons/messageIcon.png';
import addIcon from '../../icons/acount1.png';

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  const currentChatRoom = useSelector((state) => state.currentChatRoom);
  const currentChatUser = useSelector((state) => state.currentChatUser);
  const userData = useSelector((state) => state.userData);
  return (
    <React.Fragment>
      <h1>{user.name}</h1>
      {user.gender === 'male' ? (
        <img src={malePic} alt="user image" height="200px" />
      ) : (
        <img src={femalePic} alt="user image" height="200px" />
      )}
      <br />
      {token ? (
          <div>
        <Link
          onClick={(e) => (!currentChatUser ? e.preventDefault() : null)}
          onMouseOverCapture={() => {
            dispatch({ type: 'CURRENT_CHAT_USER', payload: userData.name });
            dispatch({
              type: 'CURRENT_CHAT_ROOM',
              payload: `${user.name.split(' ')[0]} and ${
                userData.name.split(' ')[0]
              }`,
            });
          }}
          to={`/chat?name=${currentChatUser}&room=${currentChatRoom}`}
        >
          <img src={messageIcon} alt="message icon" height="40px" />
        </Link>
        <Link>
      <a href="/">
        <img src={addIcon} alt="add account icon" height="30px" />
      </a>
      </Link>
      </div>
      ) : null}

      <br />
      <h4>
        {user.zodiac} {user.age}
      </h4>
      <h4>{user.sexualOrientation}</h4>
      <p>{user.bio}</p>
    </React.Fragment>
  );
};
export default UserCard;
