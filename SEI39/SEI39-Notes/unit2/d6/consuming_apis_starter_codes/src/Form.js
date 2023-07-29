import React, { useState } from 'react';

function Form(props) {
  const [movieTitle, setMovieTitle] = useState('');

  const handleSubmit = (e) => {
    console.log('Form - handleSubmit - movieTitle', movieTitle);
    e.preventDefault();
    props.handleSubmit(movieTitle);
    setMovieTitle('');
  };

  const handleChange = (e) => {
    console.log('handleChange clicked');
    const title = e.target.value;
    setMovieTitle(title);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movieTitle">Title:</label>
        <input
          id="movieTitle"
          type="text"
          value={movieTitle}
          onChange={handleChange}
        />
        <input type="submit" value="Find Movie Info" />
      </form>
    </>
  );
}

export default Form;
