import React, { useReducer } from 'react';
import './App.css';
import Title from './components/Title';
import TextBox from './components/TextBox';
import SearchForm from './components/SearchForm';
import PicsContext from './context/PicsContext';
import picsReducer from './reducers/pics';

const App = () => {
  const [pics, dispatch] = useReducer(picsReducer, []);

  return (
    <PicsContext.Provider value={{ pics, dispatch }}>
      <Title />
      <TextBox />
      <SearchForm />
    </PicsContext.Provider>
  );
};

export default App;
