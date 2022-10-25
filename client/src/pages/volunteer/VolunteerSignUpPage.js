/** @format */

import { display } from "@mui/system";
import React, { useState } from "react";
import RequirementsOverview from "../../components/volunteer/RequirementsOverview";
import SignUpConfirmation from "../../components/volunteer/SignUpConfirmation";
import SignUpForm from "../../components/volunteer/SignUpForm";
import SignUpFormReturnButtonBanner from "../../components/volunteer/SignUpFormReturnButtonBanner";

const SignUpPage = () => {
	const [showConfirmation, setShowConfirmation] = useState(false);

	const handleFormSubmission = () => {
		setShowConfirmation(true);
	};

	let display = "";

	if (showConfirmation === false) {
		display = (
			<>
				<div className="page_header">
					<span>Get Involved / Volunteer / Volunteer Application Form</span>
				</div>
				<SignUpFormReturnButtonBanner />
				<div style={{ display: "flex" }}>
					<RequirementsOverview />
					<SignUpForm handleFormSubmission={handleFormSubmission} />
				</div>
			</>
		);
	} else {
		display = (
			<>
				<div className="page_header">
					<span>Get Involved / Volunteer / Volunteer Application Submitted</span>
                </div>
				<SignUpConfirmation />
			</>
		);
	}

	return <div className="page_container">{display}</div>;
};

export default SignUpPage;
