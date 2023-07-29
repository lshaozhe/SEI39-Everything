// IMPORT useEffect
import React, {useState} from "react";

const ColoredDiv = (props) => {
  const [width, setWidth] = useState(0);

  // SETUP useEffect

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  let styles = {
    background: props.color
   // add conditional logic here
  }
  
  return (
    <>
      <div 
        style={styles}
        className="colored-div"
        >
        {props.color}
        <button>Remove</button>
      </div>
    </>
  );
}

export default ColoredDiv