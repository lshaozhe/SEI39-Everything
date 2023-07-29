import React from "react";

const Gif = (props) => {
  return (
    <div>
      <img src={props.results.image} />
    </div>
  );
};

export default Gif;
