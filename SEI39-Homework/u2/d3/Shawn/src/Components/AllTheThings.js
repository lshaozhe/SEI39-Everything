import React from "react";

function AllTheThings(props) {
  console.log("this is props  from ALlTheThings", props);

  const things = props.products.map((d, i) => {
    return (
      <li key={i} onClick={() => props.handleClick(d)}>
        {d.name} - ${d.price} <br />
        {d.description}
      </li>
    );
  });

  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      <ul>{things}</ul>
    </div>
  );
}

export default AllTheThings;
