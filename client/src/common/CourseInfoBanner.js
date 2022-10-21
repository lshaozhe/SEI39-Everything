import React from "react";
import styles from "./CourseInfoBanner.module.css";
import { CCarousel } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import { CCarouselCaption } from "@coreui/react";
import { CImage } from "@coreui/react";
import banner from "../assets/mdw_pages/courses_01_financial_education.png";
import goalsIconOne from "../assets/svg_icons/coursedetails_1_futuregoals.svg";
import goalsIconTwo from "../assets/svg_icons/coursedetails_2_moneymanagementgame.svg";
import goalsIconThree from "../assets/svg_icons/coursedetails_3_trackspending.svg";
import goalsIconFour from "../assets/svg_icons/coursedetails_3_finances.svg";

const CourseInfoBanner = () => {
  return (
    <>
      <div className="page_container">
        {/* page_header shows current page navigation */}
        <div className="page_header">
          <span>
            For Students / Courses / Free Courses / Financial Education
          </span>
        </div>
        {/* carousel for banner image, transitions between 3 different images */}
        <CCarousel className="banner_container" interval="false">
          {/* first carousel image */}
          <CCarouselItem>
            <CImage
              className={("d-block w-100", styles.banner)}
              src={banner}
              alt="slide 1"
            />
            {/* caption for first image with orange background */}
            <CCarouselCaption
              className={
                ("d-none d-md-block banner_label", styles.banner_label)
              }
            >
              <h2>Financial Education</h2>
              <span>
                FREE | Course Mode <div className={styles.dot_span}> </div>
                Online
              </span>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>
      </div>
      <div className={styles.coursegoals_container}>
        <h2>Course Goals</h2>
        <div className={styles.goals_box} style={{ marginTop: "3vh" }}>
          {/* content contains the image, navigation button & label */}
          <div className={styles.goals}>
            <div className={styles.goals_icons}>
              <img src={goalsIconOne} alt="" />
            </div>
            <div className={styles.goals_label}>
              <div>
                Identify future goals and learn how to save and plan for them
              </div>
            </div>
          </div>
          <div className={styles.goals}>
            <div className={styles.goals_icons}>
              <img src={goalsIconTwo} alt="" />
            </div>
            <div className={styles.goals_label}>
              <div>Participate in money management game</div>
            </div>
          </div>
          <div className={styles.goals}>
            <div className={styles.goals_icons}>
              <img src={goalsIconThree} alt="" />
            </div>
            <div className={styles.goals_label}>
              <div>
                Explore day-to-day spending and understand how decision-making
                affects your future
              </div>
            </div>
          </div>
          <div className={styles.goals}>
            <div className={styles.goals_icons}>
              <img src={goalsIconFour} alt="" />
            </div>
            <div className={styles.goals_label}>
              <div>Take control of your finances</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseInfoBanner;
