import React from "react";

const Form = (props) => {
  const handleChange = (e) => {
    if (e.target.name === "first") {
      props.setSearch((prevState) => ({
        first: e.target.value,
        next: prevState.next,
      }));
    } else {
      props.setSearch((prevState) => ({
        first: prevState.first,
        next: e.target.value,
      }));
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-800 w-4/5 h-4/6 rounded-lg p-4 gap-4 text-white shadow-lg">
      <label className="font-bold" htmlFor="first">
        First:
      </label>
      <input
        className="w-1/4 border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
        name="first"
        onChange={handleChange}
        placeholder="Enter a coin to start searching"
      ></input>

      <label className="font-bold" htmlFor="second">
        Second:
      </label>
      <input
        className="w-1/4 border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
        name="second"
        onChange={handleChange}
        placeholder="Enter another coin to start searching"
      ></input>
    </div>
  );
};

export default Form;
