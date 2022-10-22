/** @format */

import React from "react";
import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
	return (
		<div>
            <h3 className={styles.header}>You're applying for the FREE Financial Education course</h3>
            <div className="grid grid-cols-2">
                <div>
                    <form className="grid grid-rows-5">
                        <div className={styles.formRow}>
                            <label className={styles.nameLabel} for="name">Name</label>
                            <input className={styles.nameInput} type="text" required name="name" />
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
