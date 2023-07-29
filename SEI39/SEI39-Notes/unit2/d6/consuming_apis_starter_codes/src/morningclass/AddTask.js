import React, { useState } from "react";
import Button from "./Button";
import ErrorModal from "./ErrorModal";

const AddTask = (props) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.length === 0) {
      setError(true);
    }
    setTask("");
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleModalOkay = (e) => {
    setError(false);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title="Error Encountered"
          message="There is an error with your input"
          okayClicked={handleModalOkay}></ErrorModal>
      )}

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-3">
            <label className="col-md-3" htmlfor="input-task">
              Task
            </label>
            <input
              className="col-md-3"
              id="input-task"
              value={task}
              type="text"
              onChange={handleChange}
            />
            <div className="col-md-3"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <Button className="col-md-6" type="submit">
            Add Task
          </Button>
          <div className="col-md-3"></div>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
