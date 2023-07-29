import React, { useContext } from 'react';
import CountContext from '../context/count-context';

function Controls(props) {

  const countCtx = useContext(CountContext);

  const handleClick = (button) => {
    // console.log('Controls - handleClick - button', button);
    props.dispatchLightLevel({type: button.toUpperCase()})

    countCtx.setCount((prev) => prev + 1);
  }

  const lightButtons = props.controls.map( (d,i) => {
    return <button 
      key={i}
      onClick={() => handleClick(d)}
    >{d}</button>
  })

  const handleReset = () => {
    countCtx.setCount(0);
  }

  return (
    <>
      <div className="controls">
        {lightButtons}
      </div>
      <p>Number of clicks: {countCtx.count}</p>
      <button onClick={handleReset}>Reset</button>
   </>
  )
}

export default Controls