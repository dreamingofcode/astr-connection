import React from 'react';

const ZodiacCard = ({ property }) => {
  const {
    index,
    sign,
    picture,
    Element,
    ElPicture,
    Quality,
    Color,
    Day,
    Ruler,
    Compatibility,
    luckyNumbers,
    dateRange,
    Strengths,
    Weaknesses,
    likes,
    dislikes,
    description,
    description2,
    description3,
    description4
  } = property;

  return (
    <div id={`card-${index}`} className="card">
        <h2>{sign.toUpperCase()}</h2>
        <span className="index">{index + 1}</span>
      <img src={picture} alt={sign} height="300px" width="300px"/><br/>
      <div className="details">
        {/* <img src={ ElPicture} height="50px" width="50px"></img> */}
        <section>
        <p>
          {dateRange}
        </p>
        </section>
        <p> </p>
      </div>
    </div>
  );
};
export default ZodiacCard;
