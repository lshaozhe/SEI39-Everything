import React from "react";

const Gif = (props) => {
  return (
    <div>
      <img src={props.imageUrl} onchange={props.onChange} alt="gif" />
    </div>
  );
};

export default Gif;
