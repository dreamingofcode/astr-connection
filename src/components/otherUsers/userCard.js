import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import malePic from '../../icons/maleIcon.jpeg';
import femalePic from '../../icons/femaleIcon.jpeg';
import messageIcon from '../../icons/messageIcon.png';
import addIcon from '../../icons/acount1.png';
import CreateChatRoom from '../chatComponents/createChatRoom';
const UserCard = ({ user, data }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  // const createChatRoom = useSelector((state) => state.createChatRoom);
  const isLoading = useSelector((state) => state.isLoading);
  const createChatRoom = useSelector((state) => state.createChatRoom);

  const currentChatRoom = useSelector((state) => state.currentChatRoom);
  const currentChatUser = useSelector((state) => state.currentChatUser);
  const userData = useSelector((state) => state.userData);
  const currentlyViewing = useSelector((state) => state.currentlyViewing);
  let profileImage = '';
  if (user.posts.length >= 1) {
    user.profile_image?
      profileImage = (
        <img
          className="user-img"
          src={user.profile_image}
          alt="user image"
          height="200px"
          style={{ transform: 'rotate(90deg)' }}
        />)
   :profileImage = (
      <img
        className="user-img"
        src={user.posts[0].image_url}
        alt="user image"
        height="200px"
        style={{ transform: 'rotate(90deg)' }}
      />
    )
    
  } else {
    if (user.gender === 'male') {
    profileImage=(
      <img
      className="round-img"
      src={malePic}
      alt="user image"
      height="200px"
    />
    )
    } else if (user.gender === 'female') {
      profileImage=(
        <img
        className="round-img"
        src={femalePic}
        alt="user image"
        height="200px"
      />
      )
    }
    
  }
  return (
    <React.Fragment>
      <h1>{user.name.split(" ")[0]}</h1>
      <br />

      <Link
        onMouseOverCapture={() => {
          dispatch({ type: 'CURRENTLY_VIEWING_ACCOUNT', payload: user });
        }}
        onClick={(e) => (!currentlyViewing ? e.preventDefault() : null)}
        to={`/currently-viewing/${currentlyViewing.id} `}
      >
        {profileImage}
      </Link>

      <br />
      <br />
      {token ? (
        <div>
          <Link
            onMouseOverCapture={() => {
              dispatch({ type: 'CURRENT_CHAT_USER', payload: userData.name });
              dispatch({
                type: 'CURRENT_CHAT_ROOM',
                payload: ` ${userData.name.split(' ')[0]} and ${
                  user.name.split(' ')[0]
                }`,
              });
            }}
            onClick={(e) => (!currentChatUser ? e.preventDefault() : null)}
            to={`/chat?name=${currentChatUser}&room=${currentChatRoom}`}
          >
            <img src={messageIcon} alt="message icon" height="40px" />
          </Link>
          <Link to={'/login'}>
            <img src={addIcon} alt="add account icon" height="30px" />
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
export default withRouter(UserCard);
