/** @format */

import React, { useState } from "react";
import styles from "./SignUpForm.module.css";
import noticeIcon from "../../assets/svg_icons/volunteer_8_notice.svg";
import { Checkbox, FilledInput, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import PhoneInput from "react-phone-input-2";

const SignUpForm = () => {
	const languageOptions = ["English", "Bahasa Indonesia", "Burmese", "Hindi", "Malay", "Mandarin", "Tagalog", "Tamil", "Others"];

	const [name, setName] = useState("");
	const [languagesSpoken, setLanguagesSpoken] = useState([]);
	const [phone, setPhone] = useState("");

	const handleNameUpdate = (e) => {
		setName(e.target.value);
	};

	const handleLanguageUpdate = (e) => {
		const input = e.target.value;

		setLanguagesSpoken(typeof input === "string" ? input.split(", ") : input);
	};

	const handlePhoneUpdate = (e) => {
		setPhone(e);
	};

	return (
		<div className={styles.container}>
			{/* Header */}
			<h3 className={styles.header}>You're applying for the role of Mentor (Module 1, 2 or 3)</h3>
			{/* Section on orientation reminder */}
			<div className={styles.orientationReminderContainer}>
				<img src={noticeIcon} alt="notice-icon" className={styles.orientationReminderIcon} />
				<p className={styles.orientationReminderText}>Please ensure you've attended the Volunteer Orientation before applying for this role!</p>
				<button type="button" className={styles.orientationReminderButton}>
					Register here
				</button>
			</div>
			{/* Form */}
			<div className={styles.formContainer}>
				<div className={styles.formField}>
					<TextField id="name" value={name} onChange={handleNameUpdate} variant="outlined" label="Name" required sx={{ width: "24vw", backgroundColor: "#eee7df" }} />
					{/* <label className={styles.nameLabel} htmlFor="name">
						Name
                    </label>
                    <input className={styles.nameInput} type="text" required name="name" id="name" value={name} onChange={handleNameUpdate} /> */}
				</div>
				<div className={styles.formField}>
					<FormControl sx={{ width: "24vw", backgroundColor: "#eee7df" }}>
						<InputLabel id="languages-spoken" sx={{ fontWeight: "bold" }}>
							Languages spoken
						</InputLabel>
						<Select
							labelId="languages-spoken"
							id="languages-spoken"
							multiple
							renderValue={(selected) => selected.join(", ")}
							input={<OutlinedInput label="Languages spoken" />}
							onChange={handleLanguageUpdate}
							value={languagesSpoken}
						>
							{languageOptions.map((language) => (
								<MenuItem key={language} value={language}>
									<Checkbox />
									<ListItemText primary={language} />
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
				<div className={styles.formField}>
					<PhoneInput
						country={"sg"}
						onChange={handlePhoneUpdate}
						containerStyle={{ height: "42px" }}
						inputStyle={{ backgroundColor: "#eee7df", border: "none", height: "42px", marginLeft: "2vw" }}
						buttonStyle={{ backgroundColor: "#eee7df", border: "none", borderRadius: "10px", width: "50px", display: "flex", justifyContent: "flex-end", marginLeft: "1.3vw" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;
