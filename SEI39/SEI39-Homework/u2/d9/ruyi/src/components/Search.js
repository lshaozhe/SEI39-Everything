import React from 'react';

const Search = (props) => {

    const handleChange = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <form onSubmit={props.onSubmit}>
            <input type="text" placeholder='Enter a show name...' onChange={handleChange} value={props.value} />
            <button type='submit' >Search</button>
        </form>
    );
};

export default Search;