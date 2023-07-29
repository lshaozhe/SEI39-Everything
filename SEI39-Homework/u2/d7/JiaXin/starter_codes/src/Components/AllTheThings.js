import React, { useContext } from "react";
import SomeContext from "../context/some-context";
function AllTheThings(props) {
  const someCtx = useContext(SomeContext);
  console.log("this is props  from ALlTheThings", props);
  let things = someCtx.products.map((d, i) => {
    return (
      <li key={i} onClick={() => props.handleClick(d)}>
        {d.name} - ${d.price}
        <br></br>
        {d.description}
      </li>
    );
  });
  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      {things}
    </div>
  );
}

export default AllTheThings;
