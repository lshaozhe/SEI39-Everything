import React from 'react';
import {Link} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Nav, NavItem, NavLink } from 'reactstrap';



export default function Navigation() {
  return (
    <div className='container'>
     <button><Link to='/'>All Styles</Link></button>
     <button><Link to='/standard'>Standard CSS</Link></button>
     <button><Link to='/inline'>Inline SS</Link></button>
     <button><Link to='/module'>Module</Link></button>
     <button><Link to='/styled-components'>Styled Components</Link></button>
    </div>
  );
}


// export default function Example(props) {
//   return (
//     <div>
//       <Nav tabs>
//         <NavItem>
//           <NavLink href="#"><Link to='/'>All Styles</Link></NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="#">Link</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="#">Another Link</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink disabled href="#">Disabled Link</NavLink>
//         </NavItem>
//       </Nav>
//     </div>
//   );
// }