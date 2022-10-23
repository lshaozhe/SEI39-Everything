/** @format */

import React, { useState } from "react";
import styles from "./SignUpForm.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import WhatsappIcon from "../../assets/mdw_pages/signup_02_whatsapp.png";

const SignUpForm = () => {
	const [phone, setPhone] = useState();
	const [aboutYourself, setAboutYourself] = useState("");
	const [aboutYourselfCount, setAboutYourselfCount] = useState(0);

	const handlePhoneUpdate = (e) => {
		setPhone(e);
	};

	const handleAboutYourselfUpdate = (e) => {
		setAboutYourself(e.target.value);
		setAboutYourselfCount(e.target.value.length);
	};

	return (
		<div className={styles.container}>
			<h3 className={styles.header}>You're applying for the FREE Financial Education course</h3>
			<div className="grid grid-cols-2 gap-x-10">
				<div>
					<form className={styles.formContainer}>
						<div className={styles.formRow}>
							<label className={styles.nameLabel} htmlFor="name">
								Name
							</label>
							<input className={styles.nameInput} type="text" required name="name" id="name" />
						</div>
						<div className={styles.formRow}>
							{/* TODO: cannot remove the default styling on hover & expanding the flag & arrow. To consider creating this from scratch again */}
							<PhoneInput
								country={"sg"}
								onChange={handlePhoneUpdate}
								containerStyle={{ height: "42px" }}
								inputStyle={{ backgroundColor: "#eee7df", border: "none", height: "42px" }}
								buttonStyle={{ backgroundColor: "#eee7df", border: "none", borderRadius: "10px", width: "50px", display: "flex", justifyContent: "flex-end" }}
							/>
						</div>
						<div className={styles.formRow}>
							<label className={styles.workPermitLabel} htmlFor="workpermit">
								Last 3 digits of work permit
							</label>
							<input className={styles.workPermitInput} type="text" required name="workpermit" id="workpermit" />
						</div>
						<div className={styles.formRow}>
							<label className={styles.courseDateLabel} htmlFor="coursedate">
								Select a Course Date
							</label>
							<select className={styles.courseDateInput} required name="coursedate" id="coursedate">
								<option disabled></option>
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
								onKeyUp={handleAboutYourselfUpdate}
							/>
							<p className={styles.aboutYourselfCount}>{aboutYourselfCount}/200</p>
						</div>
						<div className={styles.privacyPolicyRow}>
							<input className={styles.privacyPolicyCheckbox} type="checkbox" name="privacyPolicy" id="privacyPolicy" value="true" />
							<label className={styles.privacyPolicyLabel} htmlFor="privacyPolicy">
								I have read and agree to Aidha's <span>privacy policy</span>
							</label>
						</div>
						<button className={styles.continueButton} type="button">
							Continue
						</button>
					</form>
				</div>
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
