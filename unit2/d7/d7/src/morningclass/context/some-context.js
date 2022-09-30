import React from "react";
//this file is the "warehouse" for everything stored within useContext

const SomeContext = React.createContext();

export default SomeContext;

//so the flow for creating useContext is
// 1. create a js file for intialising the usecontext ("warehouse")
// 2. decide the top parent where the states needs to be passed down from, and put the context wrapper there
// 3. declare everything in that parent file within the wrapper, where the states/ function (or ref also can) needs to be passed
// 4. call the usecontext in the child nodes
