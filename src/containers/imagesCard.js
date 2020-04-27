import React, { useState } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { useSelector, useDispatch } from 'react-redux';

const ImagesCard = ({ image }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);

  function handleDelete() {
    console.log('biit');
    fetch(`http://localhost:3000/posts/${image.id}`, { method: 'DELETE' })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('delted', data);
        const newPost=userData.posts.filter(post=> post.id !== data.id)
        console.log('delted finally', newPost)
        dispatch({type:"DELETE_POST",payload:newPost})
      });
  }

  function setProfileImage() {
    console.log('image', image);
    dispatch({ type: 'FETCH_USER_IMAGE', payload: image });
    ///this was an attempt to edit the order of posts so that the profile image selected would be made index 0
    /// could possible use a reduxx state to realize which image has been selected as profile image but state is forgotten
    // could also create a boolean table attribute to set profile image.

    const images = userData.posts.filter((i) => i.id !== image.id);
    const updatedImages = images.unshift(image);
    console.log('images', images);
    console.log('updatedimages', updatedImages);

    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user: { ...userData, posts: images },
      }),
    };
    fetch(`http://localhost:3000/api/v1/users/${userData.id}`, config)
      .then((resp) => resp.json())
      .then((data) => {
        console.log('user update for profile image', data.posts);
      });
  }

  return (
    <MuiThemeProvider>
      <br /> <br />
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
          <label>Upload on {image.created_at}</label>
          <RaisedButton
            label={'Make profile Image'}
            primary={true}
            style={styles.button}
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
