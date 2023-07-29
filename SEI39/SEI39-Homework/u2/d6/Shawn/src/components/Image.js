import React from "react";

const Image = (props) => {
  return (
    <div>
      <img src={props.post.images}></img>
    </div>
  );
};

export default Image;
