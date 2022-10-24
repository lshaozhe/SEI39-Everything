/** @format */

import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../assets/svg_icons/leftarrow.svg";
import styles from "./SignUpFormPagination.module.css";

const SignUpFormPagination = (props) => {

    // This is the current page being displayed, passed down from parent (SignUpPage)
    const currentSignUpPage = props.currentSignUpPage;

    const possibleHeaders = ["Step 1: Enter your details", "Step 2: Confirm your details", "Step 3: Application Successful!"];

    let dot1 = "";
    let dot2 = "";
    let dot3 = "";

    if (currentSignUpPage === 1) {
        dot1 = (<div id="dot1" className={styles.dots_active}></div>);
        dot2 = (<div id="dot2" className={styles.dots}></div>);
        dot3 = (<div id="dot3" className={styles.dots}></div>);
    } else if (currentSignUpPage === 2) {
        dot1 = (<div id="dot1" className={styles.dots}></div>);
        dot2 = (<div id="dot2" className={styles.dots_active}></div>);
        dot3 = (<div id="dot3" className={styles.dots}></div>);
    } else {
        dot1 = (<div id="dot1" className={styles.dots}></div>);
        dot2 = (<div id="dot2" className={styles.dots}></div>);
        dot3 = (<div id="dot3" className={styles.dots_active}></div>);
    }

	return (
        <div className={styles.container}>
			<Link to="/courses" className={styles.navigateBack}>
                <img className={styles.leftArrowImg} src={leftArrow} alt="left-arrow" />
                <h6 className={styles.navigationText}>Back to Courses</h6>
            </Link>
            <div className={styles.paginationContainer}>
                <h6 className={styles.header}>{possibleHeaders[currentSignUpPage - 1]}</h6>
                <div className={styles.dotsContainer}>
                    {dot1}
                    {dot2}
                    {dot3}
                </div>
            </div>
		</div>
	);
};

export default SignUpFormPagination;
