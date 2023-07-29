import React from "react";
import Home from "./Home";

const App = () => {
    return (
        <div>
          <nav>
            <a href="/">Go to Home Page</a>
            <a href="/procedures">See Our Procedures</a>
            <a href="/contact">Contact Us!</a>
          </nav>
          <div>
            <Home />
          </div>
        </div>
    );
}

export default App;
