import React from 'react';
import styled from 'styled-components';

function Controls(props) {

  const handleClick = (button) => {
    props.dispatch({type: button.action});
  };

  const lightButtons = props.controls.map((d, i) => {
    return (
      <button key={i} onClick={() => handleClick(d)}>
        {d.name}
      </button>
    );
  });

  const Controls = styled.div`
    margin: 20px;
  `

  return (
    <div>
      <Controls>{lightButtons}</Controls>
      <p>Number of clicks: {props.clicks}</p>
      <button className="reset" onClick={() => props.dispatch({type: 'RESET'})}>
        Reset
      </button>
    </div>
  );
}

export default Controls;
