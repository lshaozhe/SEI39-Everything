import React from "react";

const TodoItem = (props) => {
  const handleComplete = () => {
    props.dispatchTodos({ type: "SET_COMPLETE", payload: { id: props.id } });
  };

  const handleRemove = () => {
    props.dispatchTodos({ type: "REMOVE", payload: { id: props.id } });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"> {props.name}</div>
        <div className="col-md-2">{props.complete ? "complete" : "incomplete"}</div>
        <div className="col-md-2">
          <button onclick={handleComplete}>Completed</button>
        </div>
        <div className="col-md-2">
          <button onclick={handleRemove}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
