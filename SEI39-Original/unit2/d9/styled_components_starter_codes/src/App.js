import React from "react";
import "./styles.css";
import AllStyles from './AllStyles'
import StandardCss from './StandardCss'
import InlineStyle from './InlineStyles'
import Module from './Modules'
import StyledComponents from './StyledComponents'
import Navigation from './Navigation'
import {Route, Switch} from 'react-router-dom'


export default function App() {

  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path='/' component={AllStyles} />
        <Route path='/standard' component={StandardCss} />
        <Route path='/inline' component={InlineStyle} />
        <Route path='/module' component={Module} />
        <Route path='/styled-components' component={StyledComponents} />
      </Switch>
      <p>Instructor may add two more buttons for Secondary and Success</p>
    </>
  );
}
