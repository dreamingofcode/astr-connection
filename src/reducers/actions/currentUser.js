// import {connect} from 'react-redux'
import {getProfileDetails} from '../actions/profileDetails'
export const getProfileFetch = () => {
  return (dispatch) => {
    
    const token = localStorage.token;

    if(token || !token){
      fetch(`http://localhost:3000/api/v1/zodiac_matches`)
      .then((resp) => resp.json())
      .then((data) => {
     
        dispatch(horoscopeMatch(data[0]));
      });
    };
    if(token || !token){
      fetch(`http://localhost:3000/api/v1/users`)
      .then((resp) => resp.json())
      .then((data) => {
     
        dispatch(fetchUsers(data));
      });
    };
    if (token) {
       fetch('http://localhost:3000/api/v1/current_user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.message) {
            // An error will occur if the token is invalid.
            // If this happens, you may want to remove the invalid token.
            localStorage.removeItem('token');
          } else {
            dispatch(loginSuccess(data));
          //   fetch(`http://localhost:3000/posts/${data.id}`)
          //   .then((resp) => resp.json())
          //  .then((data) => {
          //    if (!data.error) {
          // getProfileDetails(data);
        // }
      // });
       let images = [];
       data.posts.map((post) => {
         fetch(`http://localhost:3000/images/${post.id}`)
           .then((resp) => resp.json())
           .then((databack) => {
             images.push(databack.post);
           });
       });
       dispatch(usersImages(images))
      //  this.props.usersImages(images)
      
      }
        });
    }
   
};}
// export default getProfileFetch
const fetchUsers=(data)=>({
  type: "FETCH_USERS",
  payload: data
})
const horoscopeMatch=(data)=>({
  type: 'HOROSCOPE_MATCH',
  payload: data
})
const loginSuccess = (userObj) => ({
  type: 'FETCH_USER_DATA',
  userData: userObj,
});
const usersImages = (images) => ({
  type: 'FETCH_USERS_IMAGES',
 payload: images,
});
