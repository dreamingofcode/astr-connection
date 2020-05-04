import React from 'react';

const ImageCard = ({ image }) => {
  const { id, index, image_url, caption, created_at } = image;

  return (
    <div id={`card-${index}`} className="card/">
    
      <img src={image_url} alt={id} height="300px" width="300px" style={{ transform: 'rotate(90deg)' }}/>
      <br />
      <div className="details">
        <section>
          <h4>{caption}</h4>
        </section>
        <p> </p>
      </div>
    </div>
  );
};
export default ImageCard;
