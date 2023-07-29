import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./pages/Main";
// import PageOne from "./pages/PageOne";
// import PageTwo from "./pages/PageTwo";
// import PageThree from "./pages/PageThree";
// import Details from "./pages/Details";
import NavBar from "./components/NavBar";

const PageOne = React.lazy(() => import("./pages/PageOne"));
const PageTwo = React.lazy(() => import("./pages/PageTwo"));
const PageThree = React.lazy(() => import("./pages/PageThree"));
const Details = React.lazy(() => import("./pages/Details"));

function App() {
  return (
    <div className="container">
      <Suspense fallback={<p>Loading ...</p>}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/page-one" />} />
          <Route path="/page-one" element={<PageOne />} />
          <Route path="/page-two" element={<PageTwo />} />
          <Route path="/page-three" element={<PageThree />} />
          <Route path="/page-one/:item" element={<Details />} />
        </Routes>
      </Suspense>
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
