import React, { useContext } from 'react';
import Context from './context';

function AllTheThings(props) {
  const ctx= useContext(Context)
  console.log('this is props  from ALlTheThings', props);
  let things = ctx.products.map((d, i) => {
    return (
      <li key={i} onClick={() => props.handleClick(d)}>
        {d.name} - ${d.price}<br></br>
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
