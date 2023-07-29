import React from "react";
import styles from "./VolunteerDonate.module.css";
import volunteerImage from "../../assets/volunteer_pages/getinvolved_03.jpeg";
import { Link } from "react-router-dom";

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
            <button className={styles.signup_button}>
              <Link
                to="/volunteers/volunteer_with_us"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                Volunteer
              </Link>
            </button>
            <button className={styles.signup_button}>Donate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDonate;
