/** @format */

import React, { useState } from "react";
import styles from "./SignUpStep1.module.css";
import MyInfo from "../../assets/mdw_pages/signup_01_retrieve_myinfo.png";
import SignUpForm from "./SignUpForm";

const SignUpStep1 = (props) => {
	// This is to store boolean value of whether registration button is clicked, to change CSS style on click
	const [registrationButtonClicked, setRegistrationButtonClicked] = useState(false);

	const handleClick = (e) => {
		setRegistrationButtonClicked(true);
		e.target.style.backgroundColor = "#f68121";
		e.target.style.color = "#ffffff";
	};

	const handleFormSubmissionInStep1 = (liftedData) => {
		// Updates current page state in parent, SignUpPage, and passes lifted data from child (SignUpForm) to parent
		props.handleStep1Submission(liftedData);
    };
    
    // Boolean is true if registration button is clicked or user is returning from step 2
    let displaySignUpForm = false;

    if (registrationButtonClicked || props.returnedFromStep2) {
        displaySignUpForm = true;
    }

	return (
		<>
			{/* Below is the registration type selection */}
			<div className="mx-0 py-5">
				<h1 className={styles.sign_up_header}>Sign up for this course using...</h1>
				<div className={styles.row}>
                    <div className={styles.column_1}>
						<img src={MyInfo} alt="retrieve-myinfo-with-singpass" className={styles.myInfo} />
					</div>
					<div className={styles.column_2}>
						<h1 className={styles.or_header}>OR</h1>
					</div>
					<div className={styles.column_3}>
						<button type="button" className={styles.registration_button} onClick={handleClick}>
							Register manually
						</button>
					</div>
				</div>
			</div>
			{displaySignUpForm && <SignUpForm handleFormSubmissionInStep1={handleFormSubmissionInStep1} formDetails={props.formDetails} />}
		</>
	);
};

export default SignUpStep1;
