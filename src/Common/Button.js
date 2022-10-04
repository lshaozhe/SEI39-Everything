import React from "react";

const Button = (props) => {
  const styleHandler = (e) => {
    if (
      e.target.className ===
      "bg-white h-4 w-4 rounded-lg hover:ring-red-600 hover:ring-2"
    ) {
      e.target.className =
        "bg-yellow-600 h-4 w-4 rounded-lg hover:ring-red-600 hover:ring-2";
    } else {
      e.target.className =
        "bg-white h-4 w-4 rounded-lg hover:ring-red-600 hover:ring-2";
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className={
          props.isClicked.includes(props.name)
            ? "bg-yellow-600 h-4 w-4 rounded-lg hover:ring-red-600 hover:ring-2"
            : "bg-white h-4 w-4 rounded-lg hover:ring-red-600 hover:ring-2"
        }
        onClick={styleHandler}
      ></button>
    </div>
  );
};

export default Button;
