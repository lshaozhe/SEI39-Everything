import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const Gif = (props) => {
  return (
    <div>
      {/* {props.isLoading && <LoadingSpinner />} */}
      <img src={props.post.image} />
    </div>
  );
};

export default Gif;
