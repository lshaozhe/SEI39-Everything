import React, { useState } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Gif } from '@giphy/react-components';

const Giphy = (props) => {

    return (
        <img src={props.url} alt="gif" />
    );
};

export default Giphy;