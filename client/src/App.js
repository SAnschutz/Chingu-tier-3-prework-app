import React, { useReducer } from 'react';
import './App.css';
import Title from './components/Title';
import Text from './components/Text';
import SearchForm from './components/SearchForm';
import PicsContext from './context/PicsContext';
import picsReducer from './reducers/pics';

const App = () => {
  const [pics, dispatch] = useReducer(picsReducer, []);

  return (
    <PicsContext.Provider value={{ pics, dispatch }}>
      <Title />
      <div class='text-box'>
        <Text />
        <SearchForm />
      </div>
    </PicsContext.Provider>
  );
};

export default App;
