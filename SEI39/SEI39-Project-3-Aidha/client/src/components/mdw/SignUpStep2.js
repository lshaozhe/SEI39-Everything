/** @format */

import React from "react";
import styles from "./SignUpStep2.module.css";

const SignUpStep2 = (props) => {
  // Save form details passed down from parent (SignUpPage) in variable
  const formDetails = props.formDetails;

  //Function declaration to convert form data before POST to backend
  function convertFormDataBeforeFetch(formDetails) {
    let convertedFormData = {};
    convertedFormData.name = formDetails.name;
    convertedFormData.mobileNumber = formDetails.phone;
    convertedFormData.workPermitLastThreeDigits = formDetails.workPermit;
    convertedFormData.selectADate = formDetails.courseDate;
    convertedFormData.studentDescription = formDetails.aboutYourself;
    convertedFormData = JSON.stringify(convertedFormData);
    return convertedFormData;
  }

  //fetch function with error logging in console
  async function fetchPost(url, method, body) {
    try {
      const res = await fetch(url, {
        method,
        body,
        headers: { "Content-Type": "application/json" },
      });
      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }
      const data = await res.json();
      console.log(`response from server: ${data.status}, ${data.message}`);
    } catch (err) {
      console.error(`error from server: ${err.message}`);
    }
  }

  const handleReturnClick = () => {
    // Changes current page in parent (SignUpPage) to 1
    props.handleReturnClickInStep2();
  };

  const handleConfirmClick = () => {
    // Convert Form Data to fit what backend db structure first
    let convertedFormData = convertFormDataBeforeFetch(formDetails);

    // Call the API to pass Form Data to backend
    fetchPost("http://127.0.0.1:5001/api/mdw", "POST", convertedFormData);

    // Changes current page in parent (SignUpPage) to 3
    props.handleStep2Submission();
  };

  return (
    <div className="mx-0 pt-5 pb-20">
      <h1 className={styles.header}>
        Please check if the information below is correct
      </h1>
      <div className={styles.formDetailsDiv}>
        <ul className={styles.formUl}>
          <li className={styles.firstFormLi}>
            <span className={styles.formQuestion}>Course name: </span>Financial
            Education
          </li>
          <li className={styles.formLi}>
            <span className={styles.formQuestion}>Fee: </span>Free
          </li>
          <li className={styles.formLi}>
            <span className={styles.formQuestion}>Mode: </span>Online
          </li>
          <li className={styles.formLi}>
            <span className={styles.formQuestion}>Date & time: </span>
            {formDetails.courseDate}
          </li>
          <br />
          <li className={styles.formLi}>
            <span className={styles.formQuestion}>Student name: </span>
            {formDetails.name}
          </li>
          <li className={styles.formLi}>
            <span className={styles.formQuestion}>Phone number: </span>
            {formDetails.phone}
          </li>
          <li className={styles.lastFormLi}>
            <span className={styles.formQuestion}>
              Last 3 digits of work permit:{" "}
            </span>
            {formDetails.workPermit}
          </li>
        </ul>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.returnButton}
          type="button"
          onClick={handleReturnClick}
        >
          Go back and edit
        </button>
        <button
          className={styles.confirmButton}
          type="button"
          onClick={handleConfirmClick}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SignUpStep2;
