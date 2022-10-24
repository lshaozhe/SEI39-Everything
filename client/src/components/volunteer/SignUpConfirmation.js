/** @format */

import React from "react";
import ThankYouImg from "../../assets/mdw_pages/signup_03_thankyou.png";
import styles from "./SignUpConfirmation.module.css";

const SignUpConfirmation = () => {
	return (
		<div className={styles.container}>
			{/* Split into 2 columns for image & text respectively */}
			<img className={styles.thankYouImage} src={ThankYouImg} alt="thank-you" />
			<div className={styles.messageContainer}>
				<h3 className={styles.header}>We have received your application!</h3>
				<div className={styles.pSection}>
					<p>
						Thank you for applying for the role of <span>Mentor (Module 1, 2 or 3).</span>
					</p>
					<p>We will update you via email in 2 - 3 business days regarding your application.</p>
				</div>
			</div>
		</div>
	);
};

export default SignUpConfirmation;
