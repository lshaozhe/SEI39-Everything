/** @format */

import React from "react";
import RequirementsOverview from "../../components/volunteer/RequirementsOverview";
import SignUpForm from "../../components/volunteer/SignUpForm";

const SignUpPage = () => {
	return (
		<div className="page_container">
			<div className="page_header">
				<span>Get Involved / Volunteer / Volunteer Application Form</span>
			</div>
			<div style={{ display: "flex" }}>
				<RequirementsOverview />
				<SignUpForm />
			</div>
		</div>
	);
};

export default SignUpPage;
