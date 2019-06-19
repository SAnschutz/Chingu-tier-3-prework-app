import React from 'react';
import image from '../img/Rover~small.jpg';

const PageTitle = () => {
  return (
    <div class='title'>
      <img src={image} alt='' />
      <h1>Mars Rover Curiosity Images</h1>
    </div>
  );
};

export default PageTitle;
