import React from "react";

const Form = (props) => {
  return (
    <div className="form-container">
      <form>
        <input placeholder="type of giphy"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
