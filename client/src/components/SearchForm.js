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

  const prevPage = () => {
    const newPage = page - 1;
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
        <button className='fetch-button'>Fetch Photos</button>
      </form>
      {picArray && (
        <div id='image-point'>
          <p className='result-cam-and-sol'>
            Results for Sol: {currentSolData}, Camera:{' '}
            {currentCameraData.toUpperCase()}
          </p>
          {picArray && picArray.length > 25 && (
            <p className='num-of-photos'>
              Showing photos {page * 25 - 24} - {page * 25}
            </p>
          )}
          {picArray.length > 0 && picArray.length <= 25 && (
            <p>
              Showing photos {page * 25 - 24} -{' '}
              {(page - 1) * 25 + picArray.length}
            </p>
          )}
          {picArray.length === 0 && page > 1 ? (
            <p className='no-results'>No more photos available</p>
          ) : picArray.length > 0 ? (
            <p className='full-size'>
              Click on any photo to see full-size image
            </p>
          ) : (
            <p className='no-results'>No photos available</p>
          )}
        </div>
      )}

      {picArray && picArray.map(pic => <Result key={pic} image={pic} />)}
      <div className='next-prev-buttons'>
        {page > 1 && (
          <button onClick={prevPage} className='prev-button'>
            {'<< '} Previous Page
          </button>
        )}
        {picArray.length === 25 && (
          <button onClick={nextPage} className='next-button'>
            Next Page >>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
