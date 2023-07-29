import React, { useContext } from "react";
import SomeContext from "../context/some-context";

const Component1 = () => {
  const someCtx = useContext(SomeContext);

  const handleButtonClick = () => {
    someCtx.setEmail("whoever@email.com");
  };

  return (
    <div className="row">
      <div className="col-sm-4">
        <p>{someCtx.email}</p>
      </div>
      <div className="col-sm-4">
        <button onClick={handleButtonClick}>Click Me</button>
      </div>
    </div>
  );
};

export default Component1;
