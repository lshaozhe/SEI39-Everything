import React from "react";

const Gif = (props) => {
  return (
    <div className="row">
      <img src={props.post} alt="" />
      {/* <h2>{props.onChange}</h2> */}
    </div>
  );
};

export default Gif;
