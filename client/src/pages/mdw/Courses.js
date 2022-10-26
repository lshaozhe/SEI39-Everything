/** @format */

import React, { useState, useEffect, useContext } from "react";
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
import languageObj from "../../assets/languages/pages/coursesLanguages";
import ContextStorage from "../../context/context";
import { Link } from "react-router-dom";

const Courses = () => {
  const ctx = useContext(ContextStorage);
  const [languageText, setLanguageText] = useState(languageObj.en);

  useEffect(() => {
    switch (ctx.language) {
      case "bu":
        setLanguageText(languageObj.bu);
        break;
      default:
        setLanguageText(languageObj.en);
    }
  }, [ctx.language]);

  return (
    <div className="page_container">
      {/* Page Header */}
      <div className="page_header">
        <span>{languageText.header}</span>
      </div>
      {/* Banner */}
      <div className="banner_container">
        <img src={CoursesBanner} alt="courses-banner" className="w-100 banner" />
      </div>
      <div className="page_mobile_header">
        <span>Courses</span>
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
                  <span>{languageText.financialEducation.a}</span>
                </div>
                <div className="content_label">
                  <span>{languageText.financialEducation.b}</span>
                </div>
              </Link>
            </div>

            <div className="content">
              <div className="content_image">
                <img src={CoursesImg3} alt="dealing-with-stress" />
              </div>
              <div className="content_button"></div>
              <div className="button_label">
                <span>{languageText.dealingWithStress.a}</span>
              </div>
              <div className="content_label">
                <span>{languageText.dealingWithStress.b}</span>
              </div>
            </div>
            <div className="content">
              <div className="content_image">
                <img src={CoursesImg5} alt="understanding-debt" />
              </div>
              <div className="content_button"></div>
              <div className="button_label">
                <span>{languageText.understandingDebt.a}</span>
              </div>
              <div className="content_label">
                <span>{languageText.understandingDebt.b}</span>
              </div>
            </div>
            <div className="content">
              <div className="content_image">
                <img src={CoursesImg7} alt="debt-counselling-explained" />
              </div>
              <div className="content_button"></div>
              <div className="button_label">
                <span>{languageText.debtCounselling.a}</span>
              </div>
              <div className="content_label">
                <span>{languageText.debtCounselling.b}</span>
              </div>
            </div>
            <div className="content">
              <div className="content_image">
                <img src={CoursesImg9} alt="how-to-open-a-bank-account" />
              </div>
              <div className="content_button"></div>
              <div className="button_label">
                <span>{languageText.openBankAccount.a}</span>
              </div>
              <div className="content_label">
                <span>{languageText.openBankAccount.b}</span>
              </div>
            </div>
            <div className="content">
              <div className="content_image">
                <img src={CoursesImg10} alt="computer-skills" />
              </div>
              <div className="content_button"></div>
              <div className="button_label">{languageText.computerSkills.a}</div>
              <div className="content_label">
                <span>{languageText.computerSkills.b}</span>
              </div>
            </div>
            <div className="content">
              <div className="content_image">
                <img src={CoursesImg11} alt="building-your-resilience" />
              </div>
              <div className="content_button"></div>
              <div className="button_label">{languageText.buildingResilience.a}</div>
              <div className="content_label">
                <span>{languageText.buildingResilience.b}</span>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <div className="content_image">
                <img src={CoursesImg2} alt="improve-english" />
              </div>
              <div className="content_button"></div>
              <div className="button_label">{languageText.ImproveEnglish.a}</div>
              <div className="content_label">
                <span>{languageText.ImproveEnglish.b}</span>
              </div>
            </div>
            <div className="content">
              <div className="content_image">
                <img src={CoursesImg4} alt="module-1-manage-money-and-tech" />
              </div>
              <div className="content_button"></div>
              <div className="button_label">
                <span>{languageText.Module1.a}</span>
              </div>
              <div className="content_label">
                <span>{languageText.Module1.b}</span>
              </div>
            </div>
            <div className="content">
              <div className="content_image">
                <img src={CoursesImg6} alt="module-2-plan-your-financial-future" />
              </div>
              <div className="content_button"></div>
              <div className="button_label">
                <span>{languageText.Module2.a}</span>
              </div>
              <div className="content_label">
                <span>{languageText.Module2.b}</span>
              </div>
            </div>
            <div className="content">
              <div className="content_image">
                <img src={CoursesImg8} alt="module-3-start-your-business" />
              </div>
              <div className="content_button"></div>
              <div className="button_label">
                <span>{languageText.Module3.a}</span>
              </div>
              <div className="content_label">
                <span>{languageText.Module3.b}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
