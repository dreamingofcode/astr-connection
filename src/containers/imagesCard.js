import React, { useState } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { useSelector, useDispatch } from 'react-redux';

const ImagesCard = ({ image }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);

  function handleDelete() {
    console.log('biit');
    fetch(`https://astro-connection.herokuapp.com/posts/${image.id}`, { method: 'DELETE' })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('delted', data);
        const newPost=userData.posts.filter(post=> post.id !== data.id)
        console.log('delted finally', newPost)
        dispatch({type:"DELETE_POST",payload:newPost})
      });
  }

  function setProfileImage() {
   console.log("profileimagfe", image.image_url)

    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user: { ...userData, profile_image: image.image_url },
      }),
    };
    fetch(`https://astro-connection.herokuapp.com/api/v1/users/${userData.id}`, config)
      .then((resp) => resp.json())
      .then((data) => {
        console.log('user update for profile image', data);
              dispatch({type:'FETCH_USER_DATA', userData:data})
// dispatch({type:'DELETE_POST', payload:data.posts})
        //  dispatch({type:'SET_USER_PROFILE_IMAGE', payload:data.profile_image})
      });
  }

  return (
    <MuiThemeProvider>
  
      <img
        className="user-img"
        src={image.image_url}
        alt={image.caption}
        height="150px"
        width="200px"
        style={{ transform: 'rotate(90deg)' }}
      />
      <br />
      <div className="details">
        <section>
          <br /> <br />
          <label>Caption: {image.caption}</label>
          <label>Uploaded on {image.created_at}</label>
          <RaisedButton
            label={'Make profile Image'}
            primary={true}
            style={styles.button}
            disabled={image.image_url===userData.profile_image}
            onClick={() => {
              setProfileImage();
            }}
          />
          <RaisedButton
            label={'Delete'}
            primary={true}
            style={styles.button}
            onClick={() => {
              if (
                window.confirm('Are you sure you wish to delete this image?')
              )
      
              handleDelete();
            }}
          />
        </section>
      </div>
    </MuiThemeProvider>
  );
};
const styles = {
  button: {
    margin: 5,
  },
};
export default ImagesCard;
