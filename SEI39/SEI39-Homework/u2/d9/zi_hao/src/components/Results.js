import React from "react";

const Results = (props) => {
  const searchAgain = () => {
    props.setHasSearched(false);
  };
  return (
    <>
      <button onClick={searchAgain}>Search Again</button>
      <div class="container">
        <div>{props.name}</div>
        <img
          className="Results_item_image"
          src={props.img}
          width="200px"
          height="200px"
        ></img>
      </div>
    </>
  );
};

export default Results;
