import React, {useState} from 'react';
import Search from './Search';
import { results } from '../results'; 
import Results from './Results';
import {Switch, Route} from "react-router-dom";

const SearchContainer = () => {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearchInput = (enteredInput) => {
        setQuery(enteredInput);
    }

    const onSubmitQuery = (event) => {

        console.log("onSubmitQuery commenced");

        event.preventDefault();

        console.log("checking input");

        setHasSearched(true);

        const searchQueryInCaps = query.toUpperCase();

        const searchResults = results.filter((data) => {
            return data.show.name.toUpperCase().includes(searchQueryInCaps);
        })

        setMovies(searchResults);
    }

    const onSearchAgain = () => {
        setHasSearched(false);
        setMovies([]);
        setQuery("");
    }
 
    let content = "";

    if (hasSearched) {
        content = (
            <>
                <button onClick={onSearchAgain}>Search Again</button>
                <Results results={movies} />
            </>
        )
    } else {
        content = <Search onChange={handleSearchInput} value={query} onSubmit={onSubmitQuery} />
    }

    return (
        <>
            {content}   
        </>
    );
};

export default SearchContainer;