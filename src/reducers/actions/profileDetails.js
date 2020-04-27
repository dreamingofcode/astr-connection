// import {connect} from 'react-redux'

export const getProfileDetails = (data) => {
  return (dispatch) => {
    //  {data.post? dispatch(userImage(data.post)):
    dispatch(userZodiacNow(data));
    //}
  };
};
// export default getProfileFetch
//return {
// userImage: (userImg) => {
//   const action = {
//     type: 'FETCH_USER_IMAGE',
//     payload: userImg,
//   };
//   dispatch(action);
const userZodiacNow = (data) => ({
  type: 'FETCH_USER_ZODIAC',
  userZodiac: data,
});
const userImage = (data) => ({
  type: 'FETCH_USER_IMAGE',
  payload: data,
});
// const loginSuccess = (userObj) => ({
//   type: 'FETCH_USER_DATA',
//   userData: userObj,
// });
