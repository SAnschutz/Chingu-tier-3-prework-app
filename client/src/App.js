import React from 'react';
import './App.css';
import Title from './components/Title';
import TextBox from './components/TextBox';
import SearchForm from './components/SearchForm';

const App = () => {
  return (
    <div>
      <Title />
      <TextBox />
      <SearchForm />
    </div>
  );
};

export default App;
