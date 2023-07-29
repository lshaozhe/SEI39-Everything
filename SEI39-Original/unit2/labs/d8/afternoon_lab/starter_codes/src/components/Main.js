import React from "react";
import { Route } from "react-router-dom"
import Home from "./Home"
import Dashboard from "./Dashboard"
import About from "./About"

function Main() {

  return (
    <main>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/stocks" component={Dashboard} />
    </main>
  )
}

export default Main
