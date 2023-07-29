import React, { useState } from 'react';
import Result from './Result';

const Results = (props) => {

    const [movieClicked, setMovieClicked] = useState({});
    const [displayMovieDetails, setDisplayMovieDetails] = useState(false);

    const passData = (data) => {
        setMovieClicked(data);
        setDisplayMovieDetails(true);
        console.log("data passed")
    }

    const resultsDisplay = props.results.map((result, index) => {
        return (
            <div key={index} onClick={() => passData(result)} className="result-card">
                <img src={result.show.image.medium} alt={result.show.name} />
                <p>{result.show.name}</p>
            </div>
        )
    })

    let content = "";

    if (displayMovieDetails) {
        content = <Result movie={movieClicked} />
    } else {
        content = resultsDisplay;
    }

    return (
        <div className='results-container'>
            {content}
        </div>
    );
};

export default Results;