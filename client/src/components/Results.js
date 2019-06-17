import React, { useContext } from 'react';
import PicsContext from '../context/PicsContext';
import Result from '../components/Result';

const Results = () => {
  const { pics } = useContext(PicsContext);
};

export default Results;

// return notes.map(note => <Note key={note.title} note={note} />);
