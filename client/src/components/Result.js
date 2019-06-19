import React from 'react';

const Result = props => {
  return (
    <a href={props.image} target='_blank' rel='noopener noreferrer'>
      <img src={props.image} alt='' className='photo' />
    </a>
  );
};

export default Result;
