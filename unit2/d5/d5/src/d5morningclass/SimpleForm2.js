import React, { useState, useRef } from "react";

const SimpleForm = () => {
  const emailInputRef = useRef();
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const handleFormSubmission = (e) => {
    e.preventDefault();

    //gets the email into  useRef when form is submitted
    //no re-render until button is clicked, as compared to prev case where any letter typed re-renders the page
    const inputEmail = emailInputRef.current.value;

    if (inputEmail.includes("@")) {
      setValidEmail(true);
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
            <input id="email" type="text" ref={emailInputRef} />
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
