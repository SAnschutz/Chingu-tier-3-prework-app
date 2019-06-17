import React, { useState, useReducer } from 'react';
import axios from 'axios';
import picsReducer from '../reducers/pics';
import Result from '../components/Result';

const SearchForm = () => {
  const [solData, setSolData] = useState('');
  const [cameraData, setCameraData] = useState('');
  const [picArray, setPicArray] = useState('');
  const [, dispatch] = useReducer(picsReducer, []);
  // const { pics } = useContext(PicsContext);

  const onChangeSolData = e => setSolData(e.target.value);
  const onChangeCameraData = e => setCameraData(e.target.value);

  const getPicUrls = (sol, camera) => {
    const page = 1;
    axios.get(`/api/roverquery/${sol}/${camera}/${page}`).then(results => {
      dispatch({ type: 'ADD_PICS', newPics: results.data });
      setPicArray(results.data);
    });
  };

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          getPicUrls(solData, cameraData);
        }}
      >
        <label>Sol</label>
        <input
          type='text'
          placeholder='Sol'
          name='sol'
          value={solData}
          onChange={e => onChangeSolData(e)}
          required
        />
        <label>Camera</label>
        <input
          type='text'
          placeholder='Camera'
          name='camera'
          value={cameraData}
          onChange={e => onChangeCameraData(e)}
          required
        />
        <button>Get Photos</button>
      </form>
      {picArray && picArray.map(pic => <Result key={pic} image={pic} />)}
    </div>
  );
};

export default SearchForm;
