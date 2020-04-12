import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

import UserCard from '../components/users/userCard';

const DatingCards = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const userData = useSelector((state) => state.userData);
  const users = useSelector((state) => state.users);
  const usersLoading = useSelector((state) => state.usersLoading);

  return (
    <div className="users-container">
      <div className="row">
        {usersLoading ? (
          <h1>Is Loading...</h1>
        ) : (
          users.map((user) => {
            return (
              <div className="col-3 users-Card" >
                <UserCard key={user.id} user={user} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default DatingCards;
