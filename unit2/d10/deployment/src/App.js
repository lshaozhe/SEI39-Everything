import React from "react";
import FirstApp from "./components/FirstApp";
import SecontApp from "./components/SecontApp";

function App() {
  return (
    <div className="container">
      <div className="row">
        <FirstApp />
      </div>
      <hr />
      <div className="row">
        <SecontApp />
      </div>
    </div>
  );
}

export default App;

//lazy loading on router lesson
// const PageOne = React.lazy(() => import("./pages/PageOne"));

//then add this to JSX (wrap around)
{
  /* <Suspense fallback={<p>Loading ...</p>} > */
}

//need to import suspense from React

//then npm start build, which builds a new folder
