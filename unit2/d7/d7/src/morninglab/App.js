import React, { useState } from "react";
import "./styles.css";
import LeftComp from "./LeftComp.js";
import RightComp from "./RightComp";
import SomeContext from "./context/some-context";

const themes = {
  light: {
    background: "blue",
    color: "black",
  },
  dark: {
    background: "#222222",
    color: "white",
  },
};

export default function App() {
  const [activeTheme, setActiveTheme] = useState(themes.light);

  const handleChange = () => {
    if (activeTheme === themes.light) {
      setActiveTheme(themes.dark);
      console.log(activeTheme);
    } else {
      setActiveTheme(themes.light);
      console.log(activeTheme);
    }
  };

  return (
    <SomeContext.Provider value={(setActiveTheme, activeTheme)}>
      <div className="App">
        <h2>Click the button to toggle themes</h2>
        <button onClick={handleChange}>Toggle Themes</button>
        <div className="children">
          <LeftComp />
          <RightComp />
        </div>
      </div>
    </SomeContext.Provider>
  );
}
