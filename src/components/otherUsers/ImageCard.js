import React from 'react';

const ImageCard = ({ image }) => {
  const { id, index, image_url, caption, created_at } = image;

  return (
    <div id={`card-${index}`} className="card/">
    
      <img src={image_url} alt={id} height="300px" width="300px" />
      <br />
      <div className="details">
        <section>
          <h4>{caption}</h4>
        </section>
        <br/>
      </div>
    </div>
  );
};
export default ImageCard;
