import React, {useContext} from 'react';
import Context from '../context/context';

function AllTheThings(props) {

  const context = useContext(Context);

  // console.log('this is props  from ALlTheThings', props);

  // FOR USECONTEXT HW
  // let things = context.products.map((d, i) => {
  //   return (
  //     <li key={i} onClick={() => props.handleClick(d)}>
  //       {d.name} - ${d.price}<br></br>
  //       {d.description}
  //     </li>
  //   );
  // });

  let things = props.products.map((d, i) => {
    return (
      <li key={i} onClick={() => props.dispatchCart({type: "ADD_TO_CART", payload: d})}>
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
