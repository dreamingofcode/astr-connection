import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { FacebookLoginButton } from 'react-social-login-buttons';

import UserCard from '../components/otherUsers/userCard';

const DatingCards = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const userData = useSelector((state) => state.userData);
  const users = useSelector((state) => state.users);
  const usersLoading = useSelector((state) => state.usersLoading);
  // const handleImagesFetch=(user)=>{

  //   if(user.posts.length>1){
  //   fetch(`http://localhost:3000/posts/${user.id}`)
  //   .then((resp) => resp.json())
  //   .then((data) => {
  //     console.log('uuuuserrimage render', data);
  //    return data
  //   });}
  //}
  return (
    <div className="users-container">
      <div className="row">
        {usersLoading ? (
          <h1>Is Loading...</h1>
        ) : (
          users.map((user) => {
            if (user.posts.length > 1) {
              fetch(`http://localhost:3000/posts/${user.id}`)
                .then((resp) => resp.json())
                .then((data) => {
                  // console.log('uuuuserrimage render', data);
                  return (
                    <div className="col-3 users-Card">
                      <UserCard key={user.id} user={user} image={data} />
                    </div>
                  );
                });
            }
            return (
              <div className="col-3 users-Card">
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
