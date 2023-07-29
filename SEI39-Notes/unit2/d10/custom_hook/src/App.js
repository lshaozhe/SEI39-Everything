import React, { useState, useRef } from "react";
import DoCheck from "./components/DoCheck";

function App() {
  const array1Ref = useRef();
  const array2Ref = useRef();
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleClick = () => {
    setInput1(array1Ref.current.value);
    setInput2(array2Ref.current.value);
  };

  const handleReset = () => {
    array1Ref.current.value = "";
    array2Ref.current.value = "";
    setInput1("");
    setInput2("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-2"></div>

        <label htmlFor="array1" className="col-sm-4">
          Array 1
        </label>
        <input
          id="array1"
          className="col-sm-4"
          ref={array1Ref}
          type="text"
          placeholder="array only"
        />

        <div className="col-sm-2"></div>
      </div>

      <div className="row">
        <div className="col-sm-2"></div>

        <label htmlFor="array2" className="col-sm-4">
          Array 2
        </label>
        <input
          id="array2"
          className="col-sm-4"
          ref={array2Ref}
          type="text"
          placeholder="array only"
        />

        <div className="col-sm-2"></div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-2"></div>
        <button className="col-sm-4" onClick={handleClick}>
          Compare
        </button>
        <button className="col-sm-4" onClick={handleReset}>
          Reset
        </button>
        <div className="col-sm-2"></div>
      </div>
      <br />
      <DoCheck input1={input1} input2={input2} />
    </div>
  );
}

export default App;
