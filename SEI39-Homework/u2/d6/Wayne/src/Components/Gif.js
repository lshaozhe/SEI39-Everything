import React from "react";

const Gif = (props) => {
  return (
    <>
      <img src={props.post.image}></img>
    </>
  );
};

export default Gif;
