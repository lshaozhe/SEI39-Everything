/** @format */

import React, { useState } from "react";
import styles from "./SignUpForm.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import WhatsappIcon from "../../assets/mdw_pages/signup_02_whatsapp.png";

const SignUpForm = (props) => {
	// Form details to save as state/input value from parent (SignUpPage)
	const formDetails = props.formDetails;

	// States to contain values from form
	const [name, setName] = useState(formDetails.name);
	const [phone, setPhone] = useState(formDetails.phone);
	const [workPermit, setWorkPermit] = useState(formDetails.workPermit);
	const [courseDate, setCourseDate] = useState(formDetails.courseDate);
	const [aboutYourself, setAboutYourself] = useState(formDetails.aboutYourself);
	// Checkbox checked or unchecked
	const [privacyPolicyAgreed, setPrivacyPolicyAgreed] = useState(formDetails.privacyPolicyAgreed);

	// This is the number of characters typed by user in about yourself field
	const [aboutYourselfCount, setAboutYourselfCount] = useState(0);

	// Event handlers for form fields
	const handleNameUpdate = (e) => {
		setName(e.target.value);
	};

	const handlePhoneUpdate = (e) => {
		setPhone(e);
	};

	const handleWorkPermitUpdate = (e) => {
		setWorkPermit(e.target.value);
	};

	const handleCourseDateUpdate = (e) => {
		setCourseDate(e.target.value);
	};

	const handleAboutYourselfUpdate = (e) => {
		setAboutYourself(e.target.value);
		setAboutYourselfCount(e.target.value.length);
	};

	const handlePrivacyPolicyAgreedUpdate = () => {
		setPrivacyPolicyAgreed((prev) => !prev);
	};

	const handleFormSubmission = () => {
		// Below is for passing data input by user to parent component (SignUpStep1)`
		const formSubmitted = {
			name,
			phone,
			workPermit,
			courseDate,
			aboutYourself,
			privacyPolicyAgreed,
		};

		// Lifts form details from user to parent, SignUpStep1
		props.handleFormSubmissionInStep1(formSubmitted);
	};

	return (
		<div className={styles.container}>
			<h3 className={styles.header}>You're applying for the FREE Financial Education course</h3>
			{/* Split into 2 columns for the form and Whatsapp instructions respectively */}
			<div className="grid grid-cols-2 gap-x-10">
				{/* 1st column is the form */}
				<div>
					<form className={styles.formContainer}>
						<div className={styles.formRow}>
							<label className={styles.nameLabel} htmlFor="name">
								Name
							</label>
							<input className={styles.nameInput} type="text" required name="name" id="name" onChange={handleNameUpdate} value={name} />
						</div>
						<div className={styles.formRow}>
							<PhoneInput
								country={"sg"}
								onChange={handlePhoneUpdate}
								containerStyle={{ height: "42px" }}
								inputStyle={{ backgroundColor: "#eee7df", border: "none", height: "42px", marginLeft: "2vw" }}
								buttonStyle={{ backgroundColor: "#eee7df", border: "none", borderRadius: "10px", width: "50px", display: "flex", justifyContent: "flex-end", marginLeft: "1.3vw" }}
							/>
						</div>
						<div className={styles.formRow}>
							<label className={styles.workPermitLabel} htmlFor="workpermit">
								Last 3 digits of work permit
							</label>
							<input className={styles.workPermitInput} type="text" required name="workpermit" id="workpermit" onChange={handleWorkPermitUpdate} value={workPermit} />
						</div>
						<div className={styles.formRow}>
							<label className={styles.courseDateLabel} htmlFor="coursedate">
								Select a Course Date
							</label>
							<select className={styles.courseDateInput} required name="coursedate" id="coursedate" onChange={handleCourseDateUpdate} value={courseDate}>
								<option selected disabled></option>
								<option value="9 October 2022, 10am - 1pm">9 October 2022, 10am - 1pm</option>
								<option value="9 October 2022, 2pm - 5pm">9 October 2022, 2pm - 5pm</option>
								<option value="20 November 2022, 10am - 1pm">20 November 2022, 10am - 1pm</option>
								<option value="20 November 2022, 2pm - 5pm">20 November 2022, 2pm - 5pm</option>
							</select>
						</div>
						<div className={styles.formRow}>
							<label className={styles.aboutyourselfLabel} htmlFor="aboutyourself">
								Tell us about yourself
							</label>
							<textarea
								className={styles.aboutyourselfInput}
								type="text"
								required
								name="aboutyourself"
								id="aboutyourself"
								// Spaces added after the text to create line breaks in placeholder
								placeholder="For example,                                                                                                                                               
                                    What do you hope to get out of Aidha?                                                                                                  
                                    How did you find out about Aidha?"
								maxLength="200"
								rows="6"
								onChange={handleAboutYourselfUpdate}
								value={aboutYourself}
							/>
							<p className={styles.aboutYourselfCount}>{aboutYourselfCount}/200</p>
						</div>
						<div className={styles.privacyPolicyRow}>
							<input
								className={styles.privacyPolicyCheckbox}
								type="checkbox"
								required
								name="privacyPolicy"
								id="privacyPolicy"
								value="privacyPolicyAgreedByUser"
								onClick={handlePrivacyPolicyAgreedUpdate}
								checked={privacyPolicyAgreed}
							/>
							<label className={styles.privacyPolicyLabel} htmlFor="privacyPolicy">
								I have read and agree to Aidha's <span>privacy policy</span>
							</label>
						</div>
						<button className={styles.continueButton} type="submit" onClick={handleFormSubmission}>
							Continue
						</button>
					</form>
				</div>
				{/* 2nd column is for Whatsapp instructions */}
				<div>
					<div className={styles.whatsappSection}>
						<div className={styles.imgSection}>
							<img src={WhatsappIcon} alt="whatsapp-icon" className={styles.whatsappIcon} />
						</div>
						<div className={styles.pSection}>
							<p>Details about your class will be provided through Whatsapp.</p>
							<p>Call or Whatsapp us at +65 9789 4041 if you have any questions!</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;
