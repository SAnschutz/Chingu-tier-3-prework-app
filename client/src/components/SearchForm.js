import React, { useState } from 'react';
import axios from 'axios';
import Result from '../components/Result';

const SearchForm = () => {
  const [newSolData, setNewSolData] = useState('');
  const [newCameraData, setNewCameraData] = useState('');
  const [currentSolData, setCurrentSolData] = useState('');
  const [currentCameraData, setCurrentCameraData] = useState('');
  const [picArray, setPicArray] = useState('');
  const [page, setPage] = useState(1);

  const onChangeSolData = e => setNewSolData(e.target.value);
  const onChangeCameraData = e => setNewCameraData(e.target.value);

  const getPicUrls = (sol, camera, page) => {
    const element = document.getElementById('scroll-to');
    // if (newSolData !== currentSolData || newCameraData !== currentCameraData) {
    //   setPage(1);
    // }

    axios.get(`/api/roverquery/${sol}/${camera}/${page}`).then(results => {
      setPicArray(results.data.images);
      setCurrentSolData(sol);
      setCurrentCameraData(camera);
      setNewSolData('');
      setNewCameraData('');
      element.scrollIntoView();
    });
  };

  const nextPage = () => {
    const newPage = page + 1;
    getPicUrls(currentSolData, currentCameraData, newPage);
    setPage(newPage);
  };

  return (
    <div className='submit-form'>
      <form
        onSubmit={e => {
          e.preventDefault();
          setPage(1);
          getPicUrls(newSolData, newCameraData, 1);
        }}
      >
        <div className='input' id='sol-input'>
          <label>Sol</label>
          <input
            type='text'
            placeholder='Mission Day Number'
            name='sol'
            value={newSolData}
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
            value={newCameraData}
            onChange={e => onChangeCameraData(e)}
            required
          />
        </div>
        <button>Fetch Photos</button>
      </form>
      {picArray && (
        <div>
          <p id='image-point'>
            <strong>
              Results for{' '}
              <span className='result-cam-and-sol'>
                Sol: {currentSolData}, Camera: {currentCameraData.toUpperCase()}
              </span>
              <div className='num-of-photos'>
                {picArray.length > 25 ? (
                  <p>
                    Showing photos {page * 25 - 24} - {page * 25}
                  </p>
                ) : (
                  <p>
                    Showing photos {page * 25 - 24} -{' '}
                    {(page - 1) * 25 + picArray.length}
                  </p>
                )}
              </div>
            </strong>
          </p>
          <p className='no-results'>
            {picArray.length > 0
              ? 'Click on any photo to see full-size image'
              : 'No photos available'}
          </p>
        </div>
      )}

      {picArray && picArray.map(pic => <Result key={pic} image={pic} />)}
      {picArray.length === 25 && <button onClick={nextPage}>Next Page</button>}
    </div>
  );
};

export default SearchForm;
