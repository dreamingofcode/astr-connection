import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import { withRouter } from 'react-router-dom';
import maleAccountImage from '../../icons/maleIcon.jpeg';
import femaleAccountImage from '../../icons/femaleIcon.jpeg';

class AccountDetails extends Component {
  renderEdit = () => {
    this.props.history.push('/account-details');
  };
  handleAccountImage = () => {
    const { userData } = this.props;
    if (userData.gender === 'male') {
      return (
        <img
          src={maleAccountImage}
          alt="Account Image Placeholder"
          className="round-img"
        />
      );
    } else {
      return (
        <img
          src={femaleAccountImage}
          alt="Account Image Placeholder"
          className="round-img"
        />
      );
    }
  };

  componentDidMount() {
    if (this.props.userData.posts) {
      let images = [];
      this.props.userData.posts.map((post) => {
        fetch(`https://astro-connection.herokuapp.com/images/${post.id}`)
          .then((resp) => resp.json())
          .then((data) => {
            console.log('image render', data);
            images.push(data.post);
          });
      });
      this.props.usersImages(images);
    }
  }
  render() {
    let imageButton;
    const { userData, userImage } = this.props;
    {
      if (userData.posts) {
        imageButton = 'Upload Image!';
      } else  {
        imageButton = 'Edit Images!';
      }
    }
    return (
      <React.Fragment>
        {userData.posts && userData.posts.length>0 ? (
          userData.profile_image?
          <img
          src={userData.profile_image}
          alt="user's acount Image"
          height="150px"
          style={{ transform: 'rotate(90deg)' }}
          className="round-img"
        />:
          <img
            src={userData.posts[0].image_url}
            alt="user's acount Image"
            height="150px"
            style={{ transform: 'rotate(90deg)' }}
            className="round-img"
          />
        ) : (
          this.handleAccountImage()
        )}{' '}
        <br />
        <MuiThemeProvider>
          <List>
            <br />
            <ListItem
              style={styles.list}
              primaryText="Name"
              secondaryText={userData.name}
            />
            <ListItem
              style={styles.list}
              primaryText="Email"
              secondaryText={userData.email}
            />
            <ListItem
              style={styles.list}
              primaryText="Zodiac Sign"
              secondaryText={userData.zodiac}
            />
            <ListItem
              style={styles.list}
              primaryText="Date of Birth"
              secondaryText={userData.birthDate}
            />
            <ListItem
              style={styles.list}
              primaryText="Gender"
              secondaryText={userData.gender}
            />
            <ListItem
              style={styles.list}
              primaryText="Sexual Orientation"
              secondaryText={userData.sexualOrientation}
            />
            <ListItem style={styles.list} primaryText="Bio" secondaryText="." />
            <p>{userData.bio}</p>
          </List>

          <RaisedButton
            label="Edit Account"
            primary={true}
            style={styles.button}
            onClick={this.renderEdit}
          />
          <RaisedButton
            label={imageButton}
            primary={true}
            style={styles.button}
            onClick={() => {
              this.props.history.push('/image-upload');
            }}
          />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}
const styles = {
  button: {
    margin: 5,
  },
  list: {
    margin: -20,
  },
};

const mapStateToProps = (state) => {
  return { userData: state.userData, userImage: state.userImage };
};
const mapDispatchToProps = (dispatch) => {
  return {
    usersImages: (userImg) => {
      const action = {
        type: 'FETCH_USERS_IMAGES',
        payload: userImg,
      };
      dispatch(action);
    },
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AccountDetails)
);
