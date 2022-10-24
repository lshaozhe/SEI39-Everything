import React from "react";
import styles from "./VolunteerDonate.module.css";
import volunteerImage from "../../assets/volunteer_pages/getinvolved_03.jpeg";

const VolunteerDonate = () => {
  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_box}>
        {/* image on the left side of buttons */}
        <div className={styles.signup_img}>
          <img src={volunteerImage} alt="" />
        </div>
        <div className={styles.signup_label}>
          <p>
            Enable & empower more ladies like Nilushika. Every contribution
            counts.
          </p>
          <div className={styles.button_container}>
            <button className={styles.signup_button}>Volunteer</button>
            <button className={styles.signup_button}>Donate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDonate;
