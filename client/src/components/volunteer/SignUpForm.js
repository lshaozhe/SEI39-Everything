/** @format */

import React, { useEffect, useState } from "react";
import styles from "./SignUpForm.module.css";
import noticeIcon from "../../assets/svg_icons/volunteer_8_notice.svg";
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";

const SignUpForm = (props) => {
  // Options for language spoken field
  const languageOptions = [
    "English",
    "Bahasa Indonesia",
    "Burmese",
    "Hindi",
    "Malay",
    "Mandarin",
    "Tagalog",
    "Tamil",
    "Others",
  ];

  // To save form input by user
  const [name, setName] = useState("");
  const [languagesSpoken, setLanguagesSpoken] = useState([]);
  const [phone, setPhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [howToHelp, setHowToHelp] = useState("");
  const [learntAboutAidha, setLearntAboutAidha] = useState("");
  const [questions, setQuestions] = useState("");

  // Checkbox checked or unchecked
  const [orientationAttended, setOrientationAttended] = useState(false);
  const [privacyPolicyAgreed, setPrivacyPolicyAgreed] = useState(false);

  // For validation
  const [validEmail, setValidEmail] = useState(false);

  // For textarea character count
  const [howToHelpCount, setHowToHelpCount] = useState(0);
  const [learntAboutAidhaCount, setLearntAboutAidhaCount] = useState(0);
  const [questionsCount, setQuestionsCount] = useState(0);

  //Function declaration to convert form data before POST to backend
  function convertFormDataBeforeFetch(formDetails) {
    let convertedFormData = {};
    convertedFormData.name = formDetails.name;
    convertedFormData.languagesSpoken = formDetails.languagesSpoken;
    convertedFormData.mobileNumber = formDetails.phone;
    convertedFormData.email = formDetails.validEmail;
    convertedFormData.availableStartDate = formDetails.startDate;
    convertedFormData.availableEndDate = formDetails.endDate;
    convertedFormData.volunteerDescription = formDetails.howToHelp;
    convertedFormData.referralChannel = formDetails.learntAboutAidha;
    convertedFormData.questionsOrNotes = formDetails.questions;
    convertedFormData.attendedOrientation = formDetails.orientationAttended;
    convertedFormData.privacyPolicyAgreement = formDetails.privacyPolicyAgreed;

    convertedFormData = JSON.stringify(convertedFormData);
    return convertedFormData;
  }

  //fetch function with error logging in console
  async function fetchPost(url, method, body) {
    try {
      const res = await fetch(url, {
        method,
        body,
        headers: { "Content-Type": "application/json" },
      });
      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }
      const data = await res.json();
      console.log(`response from server: ${data.status}, ${data.message}`);
    } catch (err) {
      console.error(`error from server: ${err.message}`);
    }
  }

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

  const handleEmailUpdate = (e) => {
    setInputEmail(e.target.value);
  };

  // To validate email
  useEffect(() => {
    if (inputEmail.includes("@")) {
      setValidEmail(inputEmail);
    }
  }, [inputEmail]);

  const handleStartDateUpdate = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateUpdate = (e) => {
    setEndDate(e.target.value);
  };

  const handleHowToHelpUpdate = (e) => {
    setHowToHelp(e.target.value);
    setHowToHelpCount(e.target.value.length);
  };

  const handleLearntAboutAidha = (e) => {
    setLearntAboutAidha(e.target.value);
    setLearntAboutAidhaCount(e.target.value.length);
  };

  const handleQuestions = (e) => {
    setQuestions(e.target.value);
    setQuestionsCount(e.target.value.length);
  };

  const handleOrientationUpdate = (e) => {
    setOrientationAttended(e.target.checked);
  };

  const handlePrivacyPolicyAgreedUpdate = (e) => {
    setPrivacyPolicyAgreed(e.target.checked);
  };

  const handleFormSubmission = () => {
    const formSubmitted = {
      name,
      languagesSpoken,
      phone,
      validEmail,
      startDate,
      endDate,
      howToHelp,
      learntAboutAidha,
      questions,
      orientationAttended,
      privacyPolicyAgreed,
    };

    // check only required or validated fields
    if (
      formSubmitted.name &&
      formSubmitted.languagesSpoken &&
      formSubmitted.validEmail &&
      formSubmitted.startDate &&
      formSubmitted.endDate &&
      formSubmitted.howToHelp &&
      formSubmitted.learntAboutAidha &&
      formSubmitted.orientationAttended &&
      formSubmitted.privacyPolicyAgreed
    ) {
      // Updates the state in parent to show confirmation page
        props.handleFormSubmission();

      // Convert Form Data to fit what backend db structure first
      let convertedFormData = convertFormDataBeforeFetch(formSubmitted);

      // Call the API to pass Form Data to backend
      fetchPost(
        "http://127.0.0.1:5001/api/volunteer",
        "POST",
        convertedFormData
      );
    } else {
        window.alert(
          "Kindly ensure all required fields are completed before submission."
        );
    }
      
      if (!formSubmitted.orientationAttended) {
          window.alert("All volunteers are required to attend the Volunteer Orientation before applying for a role.")
      }
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <h3 className={styles.header}>
        You're applying for the role of Mentor (Module 1, 2 or 3)
      </h3>
      {/* Section on orientation reminder */}
      <div className={styles.orientationReminderContainer}>
        <img
          src={noticeIcon}
          alt="notice-icon"
          className={styles.orientationReminderIcon}
        />
        <p className={styles.orientationReminderText}>
          Please ensure you've attended the Volunteer Orientation before
          applying for this role!
        </p>
        <button type="button" className={styles.orientationReminderButton}>
          Register here
        </button>
      </div>
      {/* Form */}
      <div className={styles.formContainer}>
        {/* Field: Name */}
        <div className={styles.formField}>
          <TextField
            id="name"
            value={name}
            onChange={handleNameUpdate}
            variant="outlined"
            label="Name"
            required
            sx={{ width: "24vw", backgroundColor: "#eee7df", color: "#3c3d3c" }}
            InputLabelProps={{ sx: { fontWeight: "bold", color: "#3c3d3c" } }}
          />
          {/* <label className={styles.nameLabel} htmlFor="name">
						Name
                    </label>
                    <input className={styles.nameInput} type="text" required name="name" id="name" value={name} onChange={handleNameUpdate} /> */}
        </div>
        {/* Field: Languages spoken */}
        <div className={styles.formField}>
          <FormControl sx={{ width: "24vw", backgroundColor: "#eee7df" }}>
            <InputLabel
              id="languages-spoken"
              sx={{ fontWeight: "bold", color: "#3c3d3c" }}
            >
              Languages spoken
            </InputLabel>
            <Select
              labelId="languages-spoken"
              id="languages-spoken"
              multiple
              required
              renderValue={(selected) => selected.join(", ")}
              input={<OutlinedInput label="Languages spoken" />}
              onChange={handleLanguageUpdate}
              value={languagesSpoken}
              sx={{ fontWeight: "bold", color: "#3c3d3c" }}
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
        {/* Field: Phone */}
        <div className={styles.formField}>
          <PhoneInput
            country={"sg"}
            onChange={handlePhoneUpdate}
            containerStyle={{ height: "56px" }}
            inputStyle={{
              height: "56px",
              backgroundColor: "#eee7df",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "rgba(0, 0, 0, 0.23)",
              width: "24vw",
              fontWeight: "bold",
            }}
            buttonStyle={{
              height: "52px",
              marginTop: "1px",
              marginLeft: "0.5px",
              backgroundColor: "#eee7df",
              border: "none",
              borderRadius: "10px",
              width: "50px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          />
        </div>
        {/* Field: Email */}
        <div className={styles.formField}>
          <TextField
            id="email"
            value={inputEmail}
            onChange={handleEmailUpdate}
            variant="outlined"
            label="Email address"
            required
            sx={{ width: "24vw", backgroundColor: "#eee7df", color: "#3c3d3c" }}
            InputLabelProps={{ sx: { fontWeight: "bold", color: "#3c3d3c" } }}
          />
        </div>
        {/* Field: Start date */}
        <div className={styles.formFieldHTMLInput}>
          <label className={styles.dateLabel} htmlFor="start-date">
            Available dates (Start)
          </label>
          <input
            className={styles.dateInput}
            required
            type="date"
            id="start-date"
            name="start-date"
            value={startDate}
            onChange={handleStartDateUpdate}
          />
        </div>
        {/* Field: End date */}
        <div className={styles.formFieldHTMLInput}>
          <label className={styles.dateLabel} htmlFor="end-date">
            Available dates (End)
          </label>
          <input
            className={styles.dateInput}
            required
            type="date"
            id="end-date"
            name="end-date"
            value={endDate}
            onChange={handleEndDateUpdate}
          />
        </div>
        {/* Field: How would you like to help Aidha? */}
        <div className={styles.formFieldHTMLTextarea}>
          <label
            style={{ marginTop: "1vw", marginLeft: "1vw" }}
            htmlFor="how-to-help"
          >
            How would you like to help Aidha?
          </label>
          <textarea
            className={styles.textareaInput}
            required
            type="text"
            id="how-to-help"
            name="how-to-help"
            value={howToHelp}
            onChange={handleHowToHelpUpdate}
            maxLength="500"
            rows="6"
            placeholder="Write us a note explaining how you think your skills will help Aidha, and share a link to your LinkedIn profile, if you have one. This will allow us to better fit your skills to our needs."
          />
          <p className={styles.textareaCount}>{howToHelpCount}/500</p>
        </div>
        {/* Field: How did you learn about Aidha? */}
        <div className={styles.formFieldHTMLTextarea}>
          <label
            style={{ marginTop: "1vw", marginLeft: "1vw" }}
            htmlFor="learnt-about"
          >
            How did you learn about Aidha?
          </label>
          <textarea
            className={styles.textareaInput}
            required
            type="text"
            id="learnt-about"
            name="learnt-about"
            value={learntAboutAidha}
            onChange={handleLearntAboutAidha}
            maxLength="500"
            rows="6"
            placeholder="If you were referred by a friend or colleague, please mention their name or company here so that we can thank them!"
          />
          <p className={styles.textareaCount}>{learntAboutAidhaCount}/500</p>
        </div>
        {/* Field: Do you have any questions or notes for us? */}
        <div className={styles.formFieldHTMLTextarea}>
          <label
            style={{ marginTop: "1vw", marginLeft: "1vw" }}
            htmlFor="questions"
          >
            (Optional) Do you have any questions or notes for us?
          </label>
          <textarea
            className={styles.textareaInput}
            type="text"
            id="questions"
            name="questions"
            value={questions}
            onChange={handleQuestions}
            maxLength="500"
            rows="6"
            placeholder="Leave us any questions or any other information you think we should know about."
          />
          <p className={styles.textareaCount}>{questionsCount}/500</p>
        </div>
        {/* Checkbox & Submit Button Section */}
        <div className={styles.checkboxAndButtonSection}>
          {/* Checkbox container */}
          <div className={styles.checkboxesContainer}>
            <div className={styles.checkboxContainer}>
              <input
                className={styles.checkbox}
                type="checkbox"
                required
                name="orientation"
                id="orientation"
                value="orientationAttended"
                onChange={handleOrientationUpdate}
                checked={orientationAttended}
              />
              <label className={styles.checkboxLabel} htmlFor="orientation">
                I have attended the Volunteer Orientation
              </label>
            </div>
            <div className={styles.checkboxContainer}>
              <input
                className={styles.checkbox}
                type="checkbox"
                required
                name="privacyPolicy"
                id="privacyPolicy"
                value="privacyPolicyAgreedByUser"
                onChange={handlePrivacyPolicyAgreedUpdate}
                checked={privacyPolicyAgreed}
              />
              <label className={styles.checkboxLabel} htmlFor="privacyPolicy">
                I have read and agree to Aidha's privacy policy
              </label>
            </div>
          </div>
          {/* Submit button container */}
          <div>
            <button
              className={styles.submitButton}
              type="submit"
              onClick={handleFormSubmission}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
