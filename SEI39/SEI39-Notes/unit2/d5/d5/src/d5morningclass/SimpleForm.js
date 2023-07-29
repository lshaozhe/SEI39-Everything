import React, { useState, useEffect } from "react";

const SimpleForm = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  useEffect(() => {
    //runs everytime an key is change, if no @ then it will keep setting valid email as false
    setValidEmail(inputEmail.includes("@"));
  }, [inputEmail]);

  const handleEmailChange = (e) => {
    setInputEmail(e.target.value);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    if (validEmail) {
      setSubmittedEmail(inputEmail);
    }
  };

  return (
    <>
      <form className="container" onSubmit={handleFormSubmission}>
        <div className="row">
          <div className="col-sm-5">
            <label htmlFor="email">Email</label>
          </div>
          <div className="col-sm-7">
            <input
              id="email"
              type="text"
              value={inputEmail}
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <button>Submit</button>
      </form>
      <br />
      <h2>{validEmail ? "email valid" : "email invalid"}</h2>
      <h2>{submittedEmail}</h2>
    </>
  );
};

export default SimpleForm;
