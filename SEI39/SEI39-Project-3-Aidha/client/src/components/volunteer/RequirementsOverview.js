/** @format */

import React from "react";
import styles from "./RequirementsOverview.module.css";
import detailsImage from "../../assets/volunteer_pages/volunteer_02.png";

const RequirementsOverview = () => {
	return (
		//    {/* left container consists of image and time commitment etc */}
		<div className={styles.left_container}>
			{/* container for image */}
			<div className={styles.details_image_container}>
				<img className={styles.detailsImage} src={detailsImage} alt="" />
			</div>
			{/* container for time commitment etc */}
			<div className={styles.leftDescriptionContainer}>
				{/* container keeps icon in line with label */}
				<div className={styles.description_icons_container}>
					<span className={styles.roles_icons_clock}></span>
					<span className={styles.description_label}>Time Commitment</span>
				</div>
				<p className={styles.detailsText}>• Minimum period of 6 months</p>
				<p
					className={styles.detailsText}
					style={{
						marginLeft: "7.5vw",
						marginTop: "-1vw",
						marginBottom: "0.25vw",
					}}
				>
					• 1.5 hours every Sunday <b>OR</b>
					<br />• 3 hours every 2 Sundays
				</p>
				<p className={styles.detailsText}>
					• Attend a compulsory 2-hour training session (held online on Zoom)
					<br />• Observe 2 x 2-hour classes
				</p>
				{/* container keeps icon in line with label */}
				<div className={styles.description_icons_container}>
					<span className={styles.roles_icons_location}></span>
					<span className={styles.description_label}>Location</span>
				</div>
				<p className={styles.detailsText}>
					• Online on Zoom <b>OR</b>
					<br />• FAST Hub @ 3 Chin Cheng Avenue, S429401
				</p>
				{/* container keeps icon in line with label */}
				<div className={styles.description_icons_container}>
					<span className={styles.roles_icons_requirements}></span>
					<span className={styles.description_label}>Requirements</span>
				</div>
				<p className={styles.detailsText}>• Minimum 3 years of work experience in any field</p>
				{/* container keeps icon in line with label */}
				<div className={styles.description_icons_container}>
					<span className={styles.roles_icons_responsibilities}></span>
					<span className={styles.description_label}>Responsibilities</span>
				</div>
				<p className={styles.detailsText}>• Adopt a class and take the students on a learning journey that will build their confidence in themselves and their future</p>
			</div>
		</div>
	);
};

export default RequirementsOverview;
