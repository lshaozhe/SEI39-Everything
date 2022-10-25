/** @format */

import React from "react";
import { Link } from "react-router-dom";
import styles from "./SignUpFormReturnButtonBanner.module.css";
import leftArrow from "../../assets/svg_icons/leftarrow.svg";

const SignUpFormReturnButtonBanner = () => {
	return (
		<div className={styles.container}>
			<Link to="/volunteers/volunteer_with_us" className={styles.navigateBack}>
				<img className={styles.leftArrowImg} src={leftArrow} alt="left-arrow" />
				<h6 className={styles.navigationText}>Back to Volunteer page</h6>
			</Link>
		</div>
	);
};

export default SignUpFormReturnButtonBanner;
