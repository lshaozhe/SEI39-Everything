import React, { useState, useEffect, useRef } from "react";

const ReactApp = () => {
  const [string, setString] = useState("");
  //const [renderCount, setRenderCount] = useState(0);
  //const renderCount = useRef(1); //{current(1)}
  const prevString = useRef("");

  useEffect(() => {
    //setRenderCount(renderCount + 1);
    //renderCount.current = renderCount + 1;
    prevString.current = string;
  }, [string]);

  return (
    <>
      <input
        value={string}
        onChange={(e) => {
          setString(e.target.value);
        }}
      />

      <div>Render Count {renderCount.current}</div>
      <div>
        The current string is {string} and it used to be {prevString.current}
      </div>
    </>
  );
};

//another (second) usecase of useRef is as above : to be paired with useEffect to act on something that perpectually runs
//and 3rd case
//first case is autofocus
