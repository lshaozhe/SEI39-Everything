/** @format */

import React, { useState } from "react";
import styles from "./SignUpStep1.module.css";
import MyInfo from "../../assets/mdw_pages/signup_01_retrieve_myinfo.png";
import SignUpForm from "./SignUpForm";

const SignUpStep1 = () => {
	// This is to store boolean value of whether registration button is clicked, to change CSS style on click
	const [registrationButtonClicked, setRegistrationButtonClicked] = useState(true);

    const handleClick = (e) => {
        setRegistrationButtonClicked(true);
		e.target.style.backgroundColor = "#f68121";
		e.target.style.color = "#ffffff";
	};

	return (
		<>
			{/* Below is the registration type selection */}
			<div className="mx-0 py-5">
				<h1 className={styles.sign_up_header}>Sign up for this course using...</h1>
				<div className="grid grid-cols-3 justify-items-center items-center">
					<div>
						<img src={MyInfo} alt="retrieve-myinfo-with-singpass" className={styles.myInfo} />
					</div>
					<div>
						<h1 className={styles.or_header}>OR</h1>
					</div>
					<div>
						<button type="button" className={styles.registration_button} onClick={handleClick}>
							Register manually
						</button>
					</div>
				</div>
			</div>
            {registrationButtonClicked && (<SignUpForm />)}
		</>
	);
};

export default SignUpStep1;
