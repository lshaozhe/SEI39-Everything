import React from "react";
import styles from "./FavButton.module.css";

const FavButton = () => {
  return (
    <label htmlFor="fav" className="favbutton">
      <input type="checkbox" id="fav" />
    </label>
  );
};

export default FavButton;
