import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from '../../assets/images/logo.png';
import UsersImages from '../../containers/usersImages';
import { withRouter } from 'react-router-dom';

const UserAccountDetails = (props) => {
  const userData = useSelector((state) => state.userData);
  const isLoading = useSelector((state) => state.isLoading);
  const usersImages = useSelector((state) => state.usersImages);
  const userImage = useSelector((state) => state.usersImages);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userData) {
      // console.log("pappi",userData.posts)
      // if (userData) {
      //   let images = [];
      //   userData.posts.map((post) => {
      //     fetch(`http://localhost:3000/images/${post.id}`)
      //       .then((resp) => resp.json())
      //       .then((data) => {
      //         console.log('image render', data);
      //         images.push(data.post);
      //       });
      //   });
      //   dispatch({ type: 'FETCH_USERS_IMAGES', payload: images });
      //   dispatch({ type: "SELECTED_ZODIAC_BABY" })
      // }
    }
  }, [userData]);

  const fileUpload = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const fd = new FormData(event.target);

    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: fd,
    };
    console.log('oiuuu', fd);
    fetch(`https://astro-connection.herokuapp.com/posts`, config)
      .then((resp) => resp.json())
      .then((data) => {
        console.log('imgae upload', data);

        if (data.errors) {
          alert(data.errors);
        } else {
          alert('Image successfully Uploaded!');

          const newData = data.post;
          const config = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              post: {
                user_id: newData.user_id,
                caption: newData.caption,
                image: newData.image,
                image_url: newData.image_url,
              },
            }),
          };
          fetch(`https://astro-connection.herokuapp.com/posts/${data.post.id}`, config)
            .then((resp) => resp.json())
            .then((data) => {
              console.log('ddddata', data);
              dispatch({ type: 'NEW_POST', payload: data });
            });
        }
      })
      .catch(console.error);
  };

  const token = localStorage.getItem('token');
  return (
    <MuiThemeProvider>
      <React.Fragment>
        {token ? (
          !isLoading ? (
            <div className="login-form">
              <img src={logo} alt="logo" height="170px" />
              <h1>Image Upload Form</h1>
              <br />

              {!userData ? <h1>is Loading</h1> : <UsersImages />}
              <br />
              {usersImages ? (
                usersImages.length === 3 ? (
                  <h4>You are only permitted to upload 3 Images</h4>
                ) : null
              ) : null}
              <form onSubmit={fileUpload}>
                <label htmlFor="image">
                  Upload image
                  <input type="file" name="image" accept="image/*" />
                </label>
                {isLoading ? (
                  <h1>IS LOADING.</h1>
                ) : (
                  <input
                    style={{ display: 'none' }}
                    type="text"
                    name="user_id"
                    value={parseInt(userData.id)}
                  />
                )}
                <label htmlFor="caption">
                  Caption
                  <input type="text" name="caption" />
                </label>

                <input type="submit" value="Submit" />
              </form>
            </div>
          ) : (
            <h1>Is LOADING....</h1>
          )
        ) : (
          props.history.push('/login')
        )}
      </React.Fragment>
    </MuiThemeProvider>
  );
};
const styles = {
  button: {
    margin: 15,
  },
};

export default withRouter(UserAccountDetails);
