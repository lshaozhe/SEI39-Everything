import React from "react";

const Result = (props) => {
  let allResult = props.searchResult.map((d, i) => {
    return (
      <div>
        <p>{d.show.name}</p>
        {d.show.image ? (
          <img src={d.show.image.medium} />
        ) : (
          <img src="../logo512.png" />
        )}
      </div>
    );
  });

  return <>{allResult}</>;
};

export default Result;
