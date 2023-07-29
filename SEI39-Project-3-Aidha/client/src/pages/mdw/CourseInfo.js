/** @format */

import React from "react";
import CourseInfoBanner from "../../components/mdw/CourseInfoBanner";
import styles from "../../components/mdw/CourseInfoBanner.module.css";
import signupImage from "../../assets/mdw_pages/stories_04.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import courseImageOne from "../../assets/mdw_pages/courses_05_understanding_debt.png";
import courseImageTwo from "../../assets/mdw_pages/courses_07_debt_counselling.png";
import courseImageThree from "../../assets/mdw_pages/courses_09_open_bank_account.png";
import courseImageFour from "../../assets/mdw_pages/courses_03_dealing_with_stress.png";
import leftArrow from "../../assets/svg_icons/volunteer_9a_carouselleftarrowgrey.svg";
import { Link } from "react-router-dom";

const CourseInfo = () => {
  // default responsive settings from carousel component
  // may come in handy when we try to implement mobile design
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <CourseInfoBanner />
      {/* contains buttons to sign up for course or browse other courses */}
      <div className={styles.signup_container}>
        <div className={styles.signup_box}>
          {/* image on the left side of buttons */}
          <div className={styles.signup_img}>
            <img src={signupImage} alt="" />
          </div>
          <div className={styles.signup_label}>
            <p>
              Sign up for this course and take control of your finances today.
            </p>
            <div className={styles.button_container}>
              <Link to="/students/courses/sign_up">
                <button className={styles.signup_button}>Sign Up</button>
              </Link>
              <Link to="/students/courses">
                <button className={styles.others_button}>
                  View Other Courses
                </button>
              </Link>
            </div>
            <Link
              to="/students/courses/sign_up"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              <div className={styles.mobile_signup}>
                <p>Sign Up For Course</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* carousel component to scroll through other related courses */}
      <div className={styles.carousel_container}>
        <span className={styles.related_courses}>Related Courses</span>
        <Carousel
          responsive={responsive}
          infinite
          className={styles.courses_carousel}
          transitionDuration={500}
        >
          {/* first carousel item */}
          <div className={styles.content}>
            <div className={styles.content_image}>
              <img src={courseImageOne} alt="" />
            </div>
            <div className={styles.content_button}>
              <span>Understanding Debt</span>
            </div>
            <div className={styles.content_label}>
              <span>FREE | Course Mode • Online</span>
            </div>
          </div>
          {/* second carousel item */}
          <div className={styles.content}>
            <div className={styles.content_image}>
              <img src={courseImageTwo} alt="" />
            </div>
            <div className={styles.content_button}>
              <span>Debt Counselling Explained</span>
            </div>
            {/* button_label to become navigation link */}
            <div className={styles.content_label}>
              <span>FREE | Course Mode • Online</span>
            </div>
          </div>
          {/* third carousel item */}
          <div className={styles.content}>
            <div className={styles.content_image}>
              <img src={courseImageThree} alt="" />
            </div>
            <div className={styles.content_button}>
              <span>How to Open a Bank Account</span>
            </div>
            <div className={styles.content_label}>
              <span>FREE | Course Mode • Online</span>
            </div>
          </div>
          {/* fourth carousel item */}
          <div className={styles.content}>
            <div className={styles.content_image}>
              <img src={courseImageFour} alt="" />
            </div>
            <div className={styles.content_button}>
              <span>Dealing With Stress</span>
            </div>
            <div className={styles.content_label}>
              <span>FREE | Course Mode • Online</span>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default CourseInfo;
