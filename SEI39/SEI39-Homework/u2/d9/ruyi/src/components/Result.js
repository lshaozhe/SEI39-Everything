import React from 'react';

const Result = (props) => {
    return (
        <div>
            <img src={props.movie.show.image.medium} alt={props.movie.show.name} />
            <h2>Title: {props.movie.show.name}</h2>
            <h3>Status: {props.movie.show.status}</h3>
            <h3>Average Rating: {props.movie.show.rating.average}</h3>
        </div>
    );
};

export default Result;