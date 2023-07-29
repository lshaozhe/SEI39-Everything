import React, { useState, useRef } from "react";

const SimpleForm = () => {
  const emailInputRef = useRef();
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const handleFormSubmission = (e) => {
    e.preventDefault();

    //gets the email into  useRef when form is submitted
    const inputEmail = emailInputRef.current.value;

    if (inputEmail.includes("@")) {
      setValidEmail(true);
      setSubmittedEmail(inputEmail);
    }
  };

  //conditional rendering can be defined as a variable as well
  //something like (then call the variable in the JSX):
  //const validEmailVar = validEmail ? "email valid" : "email invalid"

  let outEmail = <p>Invalid</p>;
  if (validEmail) {
    outEmail = <p>Valid</p>;
  }

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

      {/* Short Circuit Evaluation */}
      {/* if whatever in the first few space is true, it will return the value after the last && */}
      {validEmail && <p>Valid</p>}
      {!validEmail && <p>Invalid</p>}
      {/* || can also do the same, but it will return the first true */}

      {outEmail}
      <h2>{submittedEmail}</h2>
    </>
  );
};

export default SimpleForm;
