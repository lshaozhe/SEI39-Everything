/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../assets/svg_icons/leftarrow.svg";
import styles from "./SignUpFormPagination.module.css";

const SignUpFormPagination = (props) => {

    const [currentSignUpPage, setCurrentSignUpPage] = useState(props.currentSignUpPage);

    const possibleHeaders = ["Step 1: Enter your details", "Step 2: Confirm your details", "Step 3: Application Successful!"];

    const bgColorForActiveDot = "#F68121";

    const bgColorForInactiveDot = "#FFFFFF"

    useEffect(() => {

        const activeDotId = "dot" + currentSignUpPage;

        document.getElementById(activeDotId).style.backgroundColor = bgColorForActiveDot;

        if (currentSignUpPage > 1) {
            const inactiveDotId = "dot" + (currentSignUpPage - 1);

            document.getElementById(inactiveDotId).style.backgroundColor = bgColorForInactiveDot;

        }

    }, [])

	return (
        <div className={styles.container}>
			<Link to="/courses" className={styles.navigateBack}>
                <img className={styles.leftArrowImg} src={leftArrow} alt="left-arrow" />
                <h6 className={styles.navigationText}>Back to Courses</h6>
            </Link>
            <div className={styles.paginationContainer}>
                <h6 className={styles.header}>{possibleHeaders[currentSignUpPage - 1]}</h6>
                <div className={styles.dotsContainer}>
                    <div id="dot1" className={styles.dots}></div>
                    <div id="dot2" className={styles.dots}></div>
                    <div id="dot3" className={styles.dots}></div>
                </div>
            </div>
		</div>
	);
};

export default SignUpFormPagination;
