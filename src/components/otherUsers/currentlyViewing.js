import React from 'react';
import { connect } from 'react-redux';
// import UserPgDailyReading from '../components/accountComponents/UserPgDailyReading';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import accountImg from '../../icons/acount1.png';
import messageIcon from '../../icons/messageIcon.png';
import blockIcon from '../../icons/block.png';
import heartIcon from '../../icons/love.png';
import ratingIcon from '../../assets/images/zodiacs/rating.jpg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import UserZDescription from './userZDescription';
import error from '../../icons/error.jpg';

const UserPage = (props) => {
  const dispatch = useDispatch();
  const currentChatRoom = useSelector((state) => state.currentChatRoom);
  const currentChatUser = useSelector((state) => state.currentChatUser);
  const currentlyViewing = useSelector((state) => state.currentlyViewing);
  const userData = useSelector((state) => state.userData);
  const isLoading = useSelector((state) => state.isLoading);
  const selectedZodiac = useSelector((state) => state.selectedZodiac);
  const Users = useSelector((state) => state.users);
  const token = localStorage.getItem('token');
  const horoscopeMatch = useSelector((state) => state.horoscopeMatch);

  const currentUserID = props.match.params.id;
  if (!isLoading) {
    if (currentlyViewing) {
      const usersName =
        currentlyViewing.name[0].toUpperCase() + currentlyViewing.name.slice(1);
      console.log('mm', usersName);
    }
  }

  if (!isLoading && Users) {
    const currentUser = Users.filter((user) => {
      return user.id == currentUserID;
    });

    if (!currentlyViewing) {
      dispatch({
        type: 'CURRENTLY_VIEWING_ACCOUNT',
        payload: currentUser[0],
      });
    }
  }

  return (
    <MuiThemeProvider>
      {isLoading ? (
        <div className="my-loading ">
          <img
            src={error}
            alt="error message: sign in!"
            height="200px"
            className="error"
          />
          <h1>
            Please sign-In or Create an Account to View User's Profile Page.
          </h1>
        </div>
      ) : (
        <div className="contianer my-container">
          <h1 className="user-header">
            {currentlyViewing.name}'s Account Page
          </h1>
          <div className="row align-items-start">
            <div className="col-6 align-self-start  my-col3">
              <div className="row user-details align-self-start">
                <div className="user-accountimage">
                  <img
                    className="my-h3 "
                    src={accountImg}
                    alt="user image"
                    height="100px"
                  />
                </div>
                <List className="">
                  <label className="row ">
                    <h4> Born: {currentlyViewing.birthDate}</h4>
                  </label>

                  <label className="row">
                    <h4> Current Age: {currentlyViewing.age}</h4>
                  </label>

                  <label className="row ">
                    <h4> Zodiac: {currentlyViewing.zodiac}</h4>
                  </label>
                  <label className="row">
                    <h4> Gender: {currentlyViewing.gender}</h4>
                  </label>
                  <label className="row">
                    <h4>
                      {' '}
                      Sexual-Orientation: {currentlyViewing.sexualOrientation}
                    </h4>
                  </label>
                </List>
                <div className="comp-rating">
                  <div className="buttons2">
                    <Link
                      onClick={(e) =>
                        !currentChatUser ? e.preventDefault() : null
                      }
                      onMouseOverCapture={() => {
                        dispatch({
                          type: 'CURRENT_CHAT_USER',
                          payload: currentlyViewing.name,
                        });
                        dispatch({
                          type: 'CURRENT_CHAT_ROOM',
                          payload: `${
                            currentlyViewing.name.split(' ')[0]
                          } and ${userData.name.split(' ')[0]}`,
                        });
                      }}
                      to={`/chat?name=${currentChatUser}&room=${currentChatRoom}`}
                    >
                      <RaisedButton
                        label={
                          <img
                            src={messageIcon}
                            alt="Instant Message User"
                            height="43x"
                          />
                        }
                        disabled={!token}
                        primary={true}
                        style={styles.button}
                      />
                    </Link>
                    <RaisedButton
                      label={
                        <img
                          src={accountImg}
                          alt="Add to Friends"
                          height="30px"
                        />
                      }
                      primary={true}
                      style={styles.button}
                    />
                    <RaisedButton
                      label={
                        <img
                          src={blockIcon}
                          alt="Block this User"
                          height="30px"
                        />
                      }
                      primary={true}
                      style={styles.button}
                    />
                    <RaisedButton
                      label={
                        <img
                          src={heartIcon}
                          alt="Read Compatibility"
                          height="36px"
                        />
                      }
                      primary={true}
                      style={styles.button}
                    />
                  </div>
                </div>
                <label className="user-bio justify-content-center ">
                  <h4 className="bio-text"> {currentlyViewing.bio}</h4>
                </label>
              </div>
            </div>
            <div className="col-5 my-col3">
              <h1>Your Compatibility with a {currentlyViewing.zodiac}</h1>
              <img
                src={ratingIcon}
                alt="compatibility rating metter"
                height="300px"
              />
              <label>{currentlyViewing.zodiac} is most Compatible with:</label>
              <h1> {selectedZodiac.Compatibility}</h1>
              <div className="buttons">
                <Link onClick={console.log('Bitch')}
                to={'/horoscope-match-page'}>
                  <RaisedButton
                    label={'READ Your Compatibility Report!'}
                   
                    primary={true}
                    style={styles.button}
                  />
                </Link>
              </div>
            </div>
          </div>
          {isLoading ? null : <UserZDescription />}
        </div>
      )}
    </MuiThemeProvider>
  );
};
const styles = {
  button: {
    margin: 5,
  },
};

export default withRouter(UserPage);
