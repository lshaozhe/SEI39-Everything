/** @format */

import React, { useState } from "react";
import CourseInfoBanner from "../../common/CourseInfoBanner";
import SignUpFormPagination from "../../components/mdw/SignUpFormPagination";
import SignUpStep1 from "../../components/mdw/SignUpStep1";
import SignUpStep2 from "../../components/mdw/SignUpStep2";
import SignUpStep3 from "../../components/mdw/SignUpStep3";

const SignUpPage = () => {
    const [currentSignUpPage, setCurrentSignUpPage] = useState(1);
    
    const [returnedFromStep2, setReturnedFromStep2] = useState(false);

	// This is to store the form submission details from child, SignUpForm
    const [formDetails, setFormDetails] = useState({
        name: "",
        phone: "",
        workPermit: "",
        courseDate: "",
        aboutYourself: "",
        privacyPolicyAgreed: false,
    });

    // Upon step 1 submission, update current page to 2 and save form details in state
	const handleStep1Submission = (liftedData) => {
		setCurrentSignUpPage(2);
		setFormDetails(liftedData);
    };

    // Upon click of return button in step 2, change to display step 1 form
    const handleReturnClickInStep2 = () => {
        setCurrentSignUpPage(1);
        setReturnedFromStep2(true);
    }

    // Upon step 3 confirmation, update current page to 3
    const handleStep2Submission = () => {
        setCurrentSignUpPage(3);
    }
    
	return (
        <>
            <CourseInfoBanner />
            <SignUpFormPagination currentSignUpPage={currentSignUpPage} />
            {currentSignUpPage === 1 && <SignUpStep1 handleStep1Submission={handleStep1Submission} returnedFromStep2={returnedFromStep2} formDetails={formDetails} />}
            {currentSignUpPage === 2 && <SignUpStep2 formDetails={formDetails} handleReturnClickInStep2={handleReturnClickInStep2} handleStep2Submission={handleStep2Submission} />}
            {currentSignUpPage === 3 && <SignUpStep3 />}
		</>
	);
};

export default SignUpPage;
