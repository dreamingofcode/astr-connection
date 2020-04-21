import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import zodiacData from '../zodiacComponents/zodiacData';
import DatingCards from '../../containers/datingCards';

const UserZDescription = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  const isLoading = useSelector((state) => state.isLoading);
  const selectedZodiac = useSelector((state) => state.selectedZodiac);
  const userData = useSelector((state) => state.userData);
  const currentlyViewing = useSelector((state) => state.currentlyViewing);
if(currentlyViewing){
  const userZodiac= currentlyViewing.zodiac
 const currentlyViewingZodiac = zodiacData.properties.filter(zodiac=>{
  const uppercasedZodiac =zodiac.sign[0].toUpperCase()+zodiac.sign.slice(1) 
   return uppercasedZodiac === userZodiac
 })
 dispatch({
  type: "SELECTED_ZODIAC",
 selectedZodiac: currentlyViewingZodiac[0],
});

console.log("zoddy",currentlyViewingZodiac[0])
}  
return (
    <React.Fragment>
      {isLoading ? (
        <h1>Is Loading...</h1>
      ) : (
        <div className="row justify-content-start">
          <div className="col-4 my-col3">
            <h1>{selectedZodiac.sign.toUpperCase()}</h1>
            <div className=""></div>
            <img className="logo1" src={selectedZodiac.picture} alt="zodiac picture" height="200px"/>
            <h3>Likes</h3>
            <p className="zodiac-bio">{selectedZodiac.likes}</p>
            <h3 >Dislikes</h3>
            <p className="zodiac-bio">{selectedZodiac.dislikes}</p>
            <div className="zodiac-bio"></div>
          </div>
          <div className="col-7 align-self-start order-12 my-col3">
      <h1>{currentlyViewing.name}'s Friends List</h1>
      <DatingCards/>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default withRouter(UserZDescription);
