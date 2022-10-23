/** @format */

import React from "react";
import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
	return (
		<div>
            <h3 className={styles.header}>You're applying for the FREE Financial Education course</h3>
            <div className="grid grid-cols-2">
                <div>
                    <form className="grid grid-rows-5 gap-y-4">
                        <div className={styles.formRow}>
                            <label className={styles.nameLabel} for="name">Name</label>
                            <input className={styles.nameInput} type="text" required name="name" />
                        </div>
                        <div className={styles.formRow}>
                            <label className={styles.phoneNoLabel} for="number">Name</label>
                            <input className={styles.phoneNoInput} type="tel" required name="number" />
                        </div>
                        <div className={styles.formRow}>
                            <label className={styles.workPermitLabel} for="workpermit">Last 3 digits of work permit</label>
                            <input className={styles.workPermitInput} type="text" required name="workpermit" />
                        </div>
                        <div className={styles.formRow}>
                            <label className={styles.courseDateLabel} for="coursedate">Select a Course Date</label>
                            <input className={styles.courseDateInput} type="text" required name="coursedate" />
                        </div>
                        <div className={styles.formRow}>
                            <label className={styles.aboutyourselfLabel} for="aboutyourself">Tell us about yourself</label>
                            <input className={styles.aboutyourselfInput} type="text" required name="aboutyourself" />
                        </div>

                    </form>
                </div>
                <div>
                    
                </div>
            </div>
		</div>
	);
};

export default SignUpForm;
