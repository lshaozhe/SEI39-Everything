import React from "react";

export default function Input(props) {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <input type={props.type} value={props.value} onChange={handleChange} />
  );
}
