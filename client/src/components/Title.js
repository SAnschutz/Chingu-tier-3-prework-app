import React from 'react';
import image from '../img/Rover~small.jpg';

const PageTitle = () => {
  return (
    <div className='title'>
      <img src={image} alt='' />
      <h1>
        Mars Rover<span> Curiosity </span>Images
      </h1>
    </div>
  );
};

export default PageTitle;
