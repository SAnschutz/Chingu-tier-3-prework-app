import React from 'react';

const TextBox = () => {
  return (
    <div className='text'>
      <h2>Search by Sol and Camera</h2>
      <div className='border'>
        <div className='camera-info'>
          <p className='camera'>FHAZ:</p>
          <p className='description'>Front Hazard Avoidance Camera</p>
        </div>
        <div className='camera-info'>
          <p className='camera'>RHAZ:</p>
          <p className='description'>Rear Hazard Avoidance Camera</p>
        </div>
        <div className='camera-info'>
          <p className='camera'>NAVCAM:</p>
          <p className='description'>Navigation Camera</p>
        </div>
        <div className='camera-info' id='scroll-to'>
          <p className='camera'>MAST:</p>
          <p className='description'>Mast Camera</p>
        </div>
        <div classname='camera-info'>
          <p className='camera'>CHEMCAM:</p>
          <p className='description'>Chemistry and Camera Complex</p>
        </div>
        <div className='camera-info'>
          <p className='camera'>MAHLI:</p>
          <p className='description'>Mars Hand Lens Imager</p>
        </div>
        <div className='camera-info'>
          <p className='camera'>MARDI:</p>
          <p className='description'>Mars Descent Imager</p>
        </div>
      </div>
    </div>
  );
};

export default TextBox;
