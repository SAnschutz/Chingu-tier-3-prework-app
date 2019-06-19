import React, { useState, useReducer } from 'react';
import axios from 'axios';
import picsReducer from '../reducers/pics';
import Result from '../components/Result';

const SearchForm = () => {
  const [solData, setSolData] = useState('');
  const [cameraData, setCameraData] = useState('');
  const [currentSolData, setCurrentSolData] = useState('');
  const [currentCameraData, setCurrentCameraData] = useState('');
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
      setCurrentSolData(sol);
      setCurrentCameraData(camera);
      setSolData('');
      setCameraData('');
    });
  };

  return (
    <div class='submit-form'>
      <form
        onSubmit={e => {
          e.preventDefault();
          getPicUrls(solData, cameraData);
        }}
      >
        <div className='input' id='sol-input'>
          <label>Sol</label>
          <input
            type='text'
            placeholder='Mission Day Number'
            name='sol'
            value={solData}
            onChange={e => onChangeSolData(e)}
            required
          />
        </div>
        <div className='input' id='camera-input'>
          <label>Camera</label>
          <input
            type='text'
            placeholder='Camera'
            name='camera'
            value={cameraData}
            onChange={e => onChangeCameraData(e)}
            required
          />
        </div>
        <button>Get Photos</button>
      </form>
      {picArray && (
        <div>
          <p>
            Showing results for Sol: {currentSolData}, Camera:{' '}
            {currentCameraData.toUpperCase()}
          </p>
          <p>Click on any photo to get full-size image</p>
        </div>
      )}
      {picArray && picArray.map(pic => <Result key={pic} image={pic} />)}
    </div>
  );
};

export default SearchForm;
