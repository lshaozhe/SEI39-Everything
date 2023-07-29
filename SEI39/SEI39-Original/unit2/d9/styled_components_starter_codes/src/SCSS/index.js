import React from 'react';
import styles from './styles.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';

export default function SCSS() {
  return (
    <div className='container'>
      <h2>SCSS</h2>
      <button>Default</button>
      <button className='button'>Customized</button>
    </div>
  );
}
