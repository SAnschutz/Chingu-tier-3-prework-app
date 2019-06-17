import React, { useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import PicsContext from './context/PicsContext';
import picsReducer from './reducers/pics';
// import axios from 'axios';

const App = () => {
  const [pics, dispatch] = useReducer(picsReducer, []);

  return (
    <PicsContext.Provider value={{ pics, dispatch }}>
      <Header />
      <SearchForm />
    </PicsContext.Provider>
  );
};

export default App;
