import React, { useState } from 'react';
import './styles.css';
import Form from './Form';
import MovieInfo from './MovieInfo';

function App() {
  const [movieData, setMovieData] = useState('');
  const [movieTitle, setMovieTitle] = useState('');

  const handleSubmit = (title) => {
    console.log('App - handleSubmit - title', title);
    setMovieTitle(title);
  };

  return (
    <div className="App">
      <div>Best Movie App Ever</div>
      <Form handleSubmit={handleSubmit} />
      <MovieInfo movie={movieData} />
    </div>
  );
}

export default App;
