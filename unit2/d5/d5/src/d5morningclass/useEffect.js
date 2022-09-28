import React, { useState, useEffect } from "react";

const ReactApp = () => {
  const [clicked, setClicked] = useState[0];

  const handleClick = () => {
    setClicked(clicked + 1);
    console.log("clicked");
  };

  useEffect(() => {
    console.log("useEffect");

    return () => {
      //this is a cleanup function which runs before the main function after mounting )it is setup that way
      if (clicked > 10) {
        setClicked(0);
      }
    };
  }, [clicked]); //can be empty array [], which will run useEffect on mount and dismount only. or no input which runs everytime
  //the array that follows determines the condition when it runs. It runs when the state you looking at changes
  //for now the array can take state

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <h2>{clicked}</h2>
    </>
  );
};

export default ReactApp;

//More on useEffect
//useEffect(() => {}) // runs every mount and update and unmount
//useEffect(() => {}, []) // runs on mount and unmount
//useEffect(()) => {}, [state]) // runs on mount and unmount, runs on state change too
