import React from 'react';


const Result = (props) => {
    return (
        <div>
             <img src={props.title.show.image.medium} alt={props.title.show.name} />
            <h2>Title: {props.title.show.name}</h2>
            <h3>Status: {props.title.show.status}</h3>
            <h3>Average Rating: {props.title.show.rating.average}</h3>
        </div>
    );
};

export default Result;