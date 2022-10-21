import React from "react";
import Navbar from "../common/Navbar";
import CourseInfoBanner from "../common/CourseInfoBanner";
import Footer from "../common/Footer";
import styles from "../common/CourseInfoBanner.module.css";
import signupImage from ".././assets/mdw_pages/stories_04.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import courseImageOne from ".././assets/mdw_pages/courses_05_understanding_debt.png";
import courseImageTwo from ".././assets/mdw_pages/courses_07_debt_counselling.png";
import courseImageThree from ".././assets/mdw_pages/courses_09_open_bank_account.png";
import courseImageFour from ".././assets/mdw_pages/courses_03_dealing_with_stress.png";
import leftArrow from ".././assets/svg_icons/volunteer_9a_carouselleftarrowgrey.svg";

const CourseInfo = () => {
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
      <Navbar />
      <CourseInfoBanner />
      <div className={styles.signup_container}>
        <div className={styles.signup_box}>
          <div className={styles.signup_img}>
            <img src={signupImage} alt="" />
          </div>
          <div className={styles.signup_label}>
            <p>
              Sign up for this course and take control of your finances today.
            </p>
            <div className={styles.button_container}>
              <button className={styles.signup_button}>Sign Up</button>
              <button className={styles.others_button}>
                View Other Courses
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.carousel_container}>
        <span className={styles.related_courses}>Related Courses</span>
        <Carousel
          responsive={responsive}
          infinite
          className={styles.courses_carousel}
          transitionDuration={500}
        >
          <div className={styles.content}>
            <div className={styles.content_image}>
              <img src={courseImageOne} alt="" />
            </div>
            <div className={styles.content_button}>
              <span>Understanding Debt</span>
            </div>
            {/* button_label to become navigation link */}
            <div className={styles.content_label}>
              <span>FREE | Course Mode • Online</span>
            </div>
          </div>
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
          <div className={styles.content}>
            <div className={styles.content_image}>
              <img src={courseImageThree} alt="" />
            </div>
            <div className={styles.content_button}>
              <span>How to Open a Bank Account</span>
            </div>
            {/* button_label to become navigation link */}
            <div className={styles.content_label}>
              <span>FREE | Course Mode • Online</span>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.content_image}>
              <img src={courseImageFour} alt="" />
            </div>
            <div className={styles.content_button}>
              <span>Dealing With Stress</span>
            </div>
            {/* button_label to become navigation link */}
            <div className={styles.content_label}>
              <span>FREE | Course Mode • Online</span>
            </div>
          </div>
        </Carousel>
      </div>
      <Footer />
    </>
  );
};

export default CourseInfo;
