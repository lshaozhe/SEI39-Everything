/** @format */

import React from "react";
import CoursesBanner from "../../assets/mdw_pages/courses_banner.jpeg";
import CoursesImg1 from "../../assets/mdw_pages/courses_01_financial_education.png";
import CoursesImg2 from "../../assets/mdw_pages/courses_02_improve_english.png";
import CoursesImg3 from "../../assets/mdw_pages/courses_03_dealing_with_stress.png";
import CoursesImg4 from "../../assets/mdw_pages/courses_04_manage_money.png";
import CoursesImg5 from "../../assets/mdw_pages/courses_05_understanding_debt.png";
import CoursesImg6 from "../../assets/mdw_pages/courses_06_plan_financial_future.png";
import CoursesImg7 from "../../assets/mdw_pages/courses_07_debt_counselling.png";
import CoursesImg8 from "../../assets/mdw_pages/courses_08_start_business.png";
import CoursesImg9 from "../../assets/mdw_pages/courses_09_open_bank_account.png";
import CoursesImg10 from "../../assets/mdw_pages/courses_10_computer_skills.png";
import CoursesImg11 from "../../assets/mdw_pages/courses_11_building_resilience.png";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="page_container">
      {/* Page Header */}
      <div className="page_header">
        <span>For Students / Courses</span>
      </div>
      {/* Banner */}
      <div className="banner_container">
        <img
          src={CoursesBanner}
          alt="courses-banner"
          className="w-100 banner"
        />
      </div>
      {/* Section below is for the 11 course cards */}
      <div className="content_container">
        <div className="content_box">
          <div className="column">
            <div className="content">
              <Link to="/students/courses/financial_education">
                <div className="content_image">
                  <img src={CoursesImg1} alt="financial-education" />
                </div>
                <div className="content_button"></div>
                <div className="button_label">
                  <span>Financial Education</span>
                </div>
                <div className="content_label">
                  <span>FREE | Course Mode · Online</span>
                </div>
              </Link>
            </div>

            <div className="content">
              <div className="content_image">
                <img src={CoursesImg3} alt="dealing-with-stress" />
              </div>
              <div className="content_button"></div>
              <div className="button_label">
                <span>Dealing With Stress</span>
              </div>
              <div className="content_label">
                <span>FREE | Course Mode · Online</span>
              </div>
            </div>
            <div className="content">
              <div className="content_image">
                <img src={CoursesImg5} alt="understanding-debt" />
              </div>
              <div className="content_button"></div>
              <div className="button_label">
                <span>Understanding Debt</span>
              </div>
              <div className="content_label">
                <span>FREE | Course Mode · Online</span>
              </div>
            </div>
            <div className="content">
              <div className="content_image">
                <img src={CoursesImg7} alt="debt-counselling-explained" />
              </div>
              <div className="content_button"></div>
              <div className="button_label">
                <span>Debt Counselling Explained</span>
              </div>
              <div className="content_label">
                <span>FREE | Course Mode · Online</span>
              </div>
            </div>
            <div className="content">
              <div className="content_image">
                <img src={CoursesImg9} alt="how-to-open-a-bank-account" />
              </div>
              <div className="content_button"></div>
              <div className="button_label">
                <span>How to Open a Bank Account</span>
              </div>
              <div className="content_label">
                <span>FREE | Course Mode · Online</span>
              </div>
            </div>
            <div className="content">
              <div className="content_image">
                <img src={CoursesImg10} alt="computer-skills" />
              </div>
              <div className="content_button"></div>
              <div className="button_label">Computer Skills</div>
              <div className="content_label">
                <span>FREE | Course Mode · In-person</span>
              </div>
            </div>
            <div className="content">
              <div className="content_image">
                <img src={CoursesImg11} alt="building-your-resilience" />
              </div>
              <div className="content_button"></div>
              <div className="button_label">Building Your Resilience</div>
              <div className="content_label">
                <span>FREE | Course Mode · Online</span>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <div className="content_image">
                <img src={CoursesImg2} alt="improve-english" />
              </div>
              <div className="content_button"></div>
              <div className="button_label">Improve Your English</div>
              <div className="content_label">
                <span>SUBSIDISED | Course Mode · Online</span>
              </div>
            </div>
            <div className="content">
              <div className="content_image">
                <img src={CoursesImg4} alt="module-1-manage-money-and-tech" />
              </div>
              <div className="content_button"></div>
              <div className="button_label">
                <span>Module 1: Manage Your Money & Tech</span>
              </div>
              <div className="content_label">
                <span>SUBSIDISED | Course Mode · Hybrid</span>
              </div>
            </div>
            <div className="content">
              <div className="content_image">
                <img
                  src={CoursesImg6}
                  alt="module-2-plan-your-financial-future"
                />
              </div>
              <div className="content_button"></div>
              <div className="button_label">
                <span>Module 2: Plan Your Financial Future</span>
              </div>
              <div className="content_label">
                <span>SUBSIDISED | Course Mode · Online</span>
              </div>
            </div>
            <div className="content">
              <div className="content_image">
                <img src={CoursesImg8} alt="module-3-start-your-business" />
              </div>
              <div className="content_button"></div>
              <div className="button_label">
                <span>Module 3: Start Your Business</span>
              </div>
              <div className="content_label">
                <span>SUBSIDISED | Course Mode · Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
