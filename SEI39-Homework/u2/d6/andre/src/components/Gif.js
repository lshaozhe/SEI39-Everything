import React from "react";
import styles from "./Gif.module.css";

const Gif = (props) => {
  return (
    <img
      src={props.url}
      alt={props.error}
      className={`${props.className} ${styles.img}`}
    ></img>
  );
};

export default Gif;
