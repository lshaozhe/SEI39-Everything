/** @format */

import React from "react";
import ThankYouImg from "../../assets/mdw_pages/signup_03_thankyou.png";
import styles from "./SignUpStep3.module.css";
import WhatsappIcon from "../../assets/mdw_pages/signup_02_whatsapp.png";

const SignUpStep3 = () => {
	return (
		<div className={styles.container}>
			<img className={styles.thankYouImage} src={ThankYouImg} alt="thank-you" />
            <div>
                <h3 className={styles.header}>Thank you for believing in Aidha!!</h3>
                <div className={styles.whatsappSection}>
                    <div className={styles.imgSection}>
                        <img src={WhatsappIcon} alt="whatsapp-icon" className={styles.whatsappIcon} />
                    </div>
                    <div className={styles.pSection}>
                        <p>Details about your class will be provided through Whatsapp.</p>
                        <p>Call or Whatsapp us at +65 9789 4041 if you have any questions!</p>
                        <p>We will see you online!</p>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default SignUpStep3;
