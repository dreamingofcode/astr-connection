import React, { useEffect } from 'react';

// import UserPgDailyReading from '../components/accountComponents/UserPgDailyReading';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import UserZDescription from './userZDescription';
import { matchMaker } from '../zodiacComponents/matchMaker';
import compImage from '../otherUsers/compImage';
import ImageSlider from '../otherUsers/imageSlider';
import accountImg from '../../icons/acount1.png';
import messageIcon from '../../icons/messageIcon.png';
import blockIcon from '../../icons/block.png';
import heartIcon from '../../icons/love.png';
import ratingIcon from '../../assets/images/zodiacs/rating.jpg';
import error from '../../icons/error.jpg';
import imageIcon from '../../assets/images/imageIcon.png';

const UserPage = (props) => {
  const dispatch = useDispatch();
  const currentChatRoom = useSelector((state) => state.currentChatRoom);
  const currentChatUser = useSelector((state) => state.currentChatUser);
  const currentlyViewing = useSelector((state) => state.currentlyViewing);
  const userData = useSelector((state) => state.userData);
  const isLoading = useSelector((state) => state.isLoading);
  const selectedZodiac = useSelector((state) => state.selectedZodiac);
  const Users = useSelector((state) => state.users);
  const zodiacIsLoading = useSelector((state) => state.zodiacIsLoading);

  const token = localStorage.getItem('token');
  const horoscopeMatch = useSelector((state) => state.horoscopeMatch);
  let profileImage = '';

  useEffect(() => {
    
    if (token && currentlyViewing && zodiacIsLoading) {
    
      const match =
        userData.zodiac.toLowerCase() +
        ' ' +
        currentlyViewing.zodiac.toLowerCase();
      let match_id = matchMaker(match);

      fetch(`https://astro-connection.herokuapp.com/api/v1/zodiac_matches/${match_id}`)
        .then((resp) => resp.json())
        .then((data) => {
          dispatch({ type: 'FETCH_USER_ZODIAC!' });
          dispatch({ type: 'HOROSCOPE_MATCH', payload: data });
          return compImage(data, zodiacIsLoading);
        });
    }
  }, [currentlyViewing]);
  if (!isLoading) {
    if (currentlyViewing.posts && currentlyViewing.posts.length) {
      profileImage = (
        <img
          className="my-h3 "
          src={currentlyViewing.posts[0].image_url}
          alt="user image"
          height="200px"
          // style={{ transform: 'rotate(90deg)' }}
        />
      );
    } else {
      profileImage = (
        <img
          className="my-h3 "
          src={accountImg}
          alt="user image"
          height="100px"
        />
      );
    }
  }

  const currentUserID = props.match.params.id;

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
        <div className="my-container">
          <h1 className="user-header">
            {currentlyViewing.name}'s Account Page
          </h1>
          <div className="row align-items-start">
            <div className="col-6 align-self-start  my-col3">
              <div className="row user-details align-self-start">
                {/* <div className="user-accountimage">{profileImage}</div> */}
                  {currentlyViewing?
                  <ImageSlider />:null}
                <List>
                  <label className="my-row align-self-start">
                    <h4> Born: {currentlyViewing.birthDate}</h4>
                  </label><br/>

                  <label className="my-row">
                    <h4>Current Age: {currentlyViewing.age}</h4>
                  </label><br/>

                  <label className="my-row ">
                    <h4> Zodiac: {currentlyViewing.zodiac}</h4>
                  </label><br/>
                  <label className="my-row">
                    <h4> Gender: {currentlyViewing.gender}</h4>
                  </label><br/>
                  <label className="my-row">
                    <h4>
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
                          src={imageIcon}
                          alt="Read Compatibility"
                          height="36px"
                        />
                      }
                      primary={true}
                      style={styles.button}
                    />
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
                  </div>
                </div>
                <label className="user-bio justify-content-center ">
                  <h4 className="bio-text"> {currentlyViewing.bio}</h4>
                </label>
              </div>
            </div>
            <div className="col-5 my-col3">
              <h1>Your Compatibility with a {currentlyViewing.zodiac}</h1>
              {zodiacIsLoading ? (
                <h1>IS Loading</h1>
              ) : (
                compImage(horoscopeMatch, userData, currentlyViewing.zodiac)
              )}
              <label>{currentlyViewing.zodiac} is most Compatible with:</label>
              <h1> {selectedZodiac.Compatibility}</h1>
              <p>You: {userData.zodiac}</p>
              <div className="buttons">
                <Link
                  onClick={() => console.log('Bitch')}
                  to={'/horoscope-match-page'}
                >
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
