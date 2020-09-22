import React from 'react';
import lowestRating from '../../assets/images/zodiacs/rating.jpg';
import poorRating from '../../assets/images/zodiacs/ratingPoor.jpg';
import fairRating from '../../assets/images/zodiacs/ratingFair.jpg';
import goodRating from '../../assets/images/zodiacs/ratingGood.jpg';
import excellentRating from '../../assets/images/zodiacs/ratingExcellent.jpg';

const compImage = (props) => {
  let compImage = lowestRating;
  if (props.rate === 1) {
    compImage = lowestRating;
  } else if (props.rate === 2) {
    compImage = poorRating;
  } else if (props.rate === 3) {
    compImage = fairRating;
  } else if (props.rate === 4) {
    compImage = goodRating;
  } else if (props.rate === 5) {
    compImage = excellentRating;
  }

  return (
    <React.Fragment>
      <img
        className="logo1"
        src={compImage}
        alt="compatibility rating metter"
        height="300px"
      />
      <br />
    </React.Fragment>
  );
};.id
export default compImage;
