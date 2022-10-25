/** @format */

import React, { useState } from "react";
import logo from "../assets/aidha-logo.png";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  // hover states and functions allow the parent navlabel to also be highlighted
  // in orange, when the user hovers over the child (nested unordered list)

  const [aboutHoverState, setAboutHoverState] = useState({});
  const [studentHoverState, setStudentHoverState] = useState({});
  const [employerHoverState, setEmployerHoverState] = useState({});
  const [volunteerHoverState, setVolunteerHoverState] = useState({});

  const aboutHover = () => {
    setAboutHoverState({
      backgroundColor: "#f68121",
      color: "#ffffff",
      borderColor: "rgba(17, 0, 0, 0.1)",
    });
  };

  const studentHover = () => {
    setStudentHoverState({
      backgroundColor: "#f68121",
      color: "#ffffff",
      borderColor: "rgba(17, 0, 0, 0.1)",
    });
  };

  const employerHover = () => {
    setEmployerHoverState({
      backgroundColor: "#f68121",
      color: "#ffffff",
      borderColor: "rgba(17, 0, 0, 0.1)",
    });
  };

  const volunteerHover = () => {
    setVolunteerHoverState({
      backgroundColor: "#f68121",
      color: "#ffffff",
      borderColor: "rgba(17, 0, 0, 0.1)",
    });
  };

  const [showMobileMenu, setShowMobileMenu] = useState("none");
  const [showStudentsNestedMenu, setShowStudentsNestedMenu] = useState("none");
  const [hideOtherButtons, setHideOtherButtons] = useState("block");
  const [studentButtonBorder, setStudentButtonBorder] = useState("20px");
  const [studentButtonColor, setStudentButtonColor] = useState("#eee7df");
  const [studentButtonText, setStudentButtonText] = useState("#2C384AF2");

  const mobileMenu = () => {
    if (showMobileMenu === "none") {
      setShowMobileMenu("block");
    } else {
      setShowMobileMenu("none");
      setShowStudentsNestedMenu("none");
      setHideOtherButtons("block");
      setStudentButtonBorder("20px");
      setStudentButtonColor("#eee7df");
      setStudentButtonText("#2C384AF2");
    }
  };

  const showStudentsNested = () => {
    if (showStudentsNestedMenu === "none") {
      setShowStudentsNestedMenu("block");
      setHideOtherButtons("none");
      setStudentButtonBorder("20px 20px 0 0");
      setStudentButtonColor("#f68121");
      setStudentButtonText("#ffffff");
    } else {
      setShowStudentsNestedMenu("none");
      setHideOtherButtons("block");
      setStudentButtonBorder("20px");
      setStudentButtonColor("#eee7df");
      setStudentButtonText("#2C384AF2");
    }
  };

  return (
    <>
      <div className={styles.navbar}>
        <Link to="/">
          <div className={styles.navlogo}>
            <img
              src={logo}
              alt="logo"
              style={{ objectFit: "contain" }}
              onClick={() => setShowMobileMenu("none")}
            />
          </div>
        </Link>
        {/* about us tab */}
        <div className="group inline-block">
          <button
            aria-haspopup="true"
            aria-controls="menu"
            className={
              ("outline-none focus:outline-none px-3 py-1 bg-white flex items-center min-w-32",
              styles.navlabel)
            }
            style={aboutHoverState}
          >
            <span className="pr-1 font-semibold flex-1">About</span>
          </button>
          <ul
            id="menu"
            aria-hidden="true"
            className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  origin-top min-w-32"
            onMouseEnter={aboutHover}
            onMouseLeave={() => setAboutHoverState()}
          >
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Who We Are</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">History</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Board of Directors</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Management Team</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Contact Us</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Social Media</span>
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.mobileMenu} style={{ display: showMobileMenu }}>
          <div className={styles.mobileButton}>About Us</div>
          <div
            className={styles.mobileButton}
            onClick={showStudentsNested}
            style={{
              borderRadius: studentButtonBorder,
              backgroundColor: studentButtonColor,
              color: studentButtonText,
            }}
          >
            {" "}
            For Students
          </div>
          <div
            className={styles.nestedButton}
            style={{
              display: showStudentsNestedMenu,
              borderRadius: "0",
              borderBottom: "1px solid",
              borderColor: "#f68121",
            }}
          >
            Free Tips
          </div>
          <Link
            to="/students/courses"
            style={{ textDecoration: "none", color: "#2C384AF2" }}
          >
            <div
              className={styles.nestedButton}
              style={{
                display: showStudentsNestedMenu,
                borderRadius: "0",
                borderBottom: "1px solid",
                borderColor: "#f68121",
              }}
              onClick={mobileMenu}
            >
              Courses
            </div>
          </Link>
          <div
            className={styles.nestedButton}
            style={{ display: showStudentsNestedMenu }}
          >
            Stories
          </div>
          <div
            className={styles.mobileButton}
            style={{ display: hideOtherButtons }}
          >
            For Employers
          </div>
          <Link
            to="/volunteers"
            style={{ textDecoration: "none", color: "#2C384AF2" }}
          >
            <div
              className={styles.mobileButton}
              style={{ display: hideOtherButtons }}
              onClick={mobileMenu}
            >
              Get Involved
            </div>
          </Link>
        </div>

        {/* students tab */}
        <div className="group inline-block">
          <button
            aria-haspopup="true"
            aria-controls="menu"
            className={
              ("outline-none focus:outline-none px-3 py-1 bg-white flex items-center min-w-32",
              styles.navlabel)
            }
            style={studentHoverState}
          >
            <span className="pr-1 font-semibold flex-1">For Students</span>
          </button>
          <ul
            id="menu"
            aria-hidden="true"
            className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
 origin-top min-w-32"
            onMouseEnter={studentHover}
            onMouseLeave={() => setStudentHoverState()}
          >
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Free Tips</span>
              </button>
              <ul
                id="menu-lang"
                aria-hidden="true"
                className="bg-white border rounded-sm absolute top-0 right-0 
  origin-top-left
  min-w-32
  "
              >
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    className="w-full text-center flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">Set Your Savings Goal</span>
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    className="w-full text-center flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">Track Your Spending</span>
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    className="w-full text-center flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">
                      Reflect on Your Spending
                    </span>
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    className="w-full text-center flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">One Simple Change</span>
                  </button>
                </li>
              </ul>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <Link
                to="/students/courses"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                <button
                  aria-haspopup="true"
                  aria-controls="menu-lang"
                  className="w-full text-center flex items-center outline-none focus:outline-none"
                >
                  <span className="pr-1 flex-1">Courses</span>
                </button>
              </Link>
              <ul
                id="menu-lang"
                aria-hidden="true"
                className="bg-white border rounded-sm absolute top-0 right-0 
  origin-top-left
  min-w-32
  "
              >
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <Link
                    to="/students/courses/financial_education"
                    style={{ textDecoration: "none", color: "#ffffff" }}
                  >
                    <button
                      aria-haspopup="true"
                      aria-controls="menu-lang-python"
                      className="w-full text-center flex items-center outline-none focus:outline-none"
                    >
                      <span className="pr-1 flex-1">Financial Education</span>
                    </button>
                  </Link>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    aria-controls="menu-lang-python"
                    className="w-full text-center flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">Improve Your English</span>
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    aria-controls="menu-lang-python"
                    className="w-full text-center flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">Dealing With Stress</span>
                  </button>
                </li>
              </ul>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <Link
                to="/students/stories"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                <button
                  aria-haspopup="true"
                  aria-controls="menu-lang"
                  className="w-full text-center flex items-center outline-none focus:outline-none"
                >
                  <span className="pr-1 flex-1">Student Stories</span>
                </button>
              </Link>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">The Aidha Experience</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">FAQ</span>
              </button>
            </li>
          </ul>
        </div>

        {/* employers tab */}
        <div className="group inline-block">
          <button
            aria-haspopup="true"
            aria-controls="menu"
            className={
              ("outline-none focus:outline-none px-3 py-1 bg-white flex items-center min-w-32",
              styles.navlabel)
            }
            style={employerHoverState}
          >
            <span className="pr-1 font-semibold flex-1">For Employers</span>
          </button>
          <ul
            id="menu"
            aria-hidden="true"
            className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  origin-top min-w-32"
            onMouseEnter={employerHover}
            onMouseLeave={() => setEmployerHoverState()}
          >
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Enrol my Helper</span>
              </button>
            </li>
          </ul>
        </div>

        {/* get involved tab */}
        <div className="group inline-block">
          <button
            aria-haspopup="true"
            aria-controls="menu"
            className={
              ("outline-none focus:outline-none px-3 py-1 bg-white flex items-center min-w-32",
              styles.navlabel)
            }
            style={volunteerHoverState}
          >
            <span className="pr-1 font-semibold flex-1">Get Involved</span>
          </button>
          <ul
            id="menu-lang"
            aria-hidden="true"
            className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
 origin-top min-w-32"
            onMouseEnter={volunteerHover}
            onMouseLeave={() => setVolunteerHoverState()}
          >
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <Link
                to="/volunteers"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                <button
                  aria-haspopup="true"
                  aria-controls="menu-lang"
                  className="w-full text-center flex items-center outline-none focus:outline-none"
                >
                  <span className="pr-1 flex-1">Our Reach & Impact</span>
                </button>
              </Link>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Our Partners</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <Link
                to="/volunteers/volunteer_with_us"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                <button
                  aria-haspopup="true"
                  aria-controls="menu-lang"
                  className="w-full text-center flex items-center outline-none focus:outline-none"
                >
                  <span className="pr-1 flex-1">Volunteer With Us</span>
                </button>
              </Link>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Donate To Us</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">FAQ</span>
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.navsearch}>
          <span
            className="material-icons"
            id={styles.search}
            style={{
              fontSize: "30px",
              paddingRight: "1vw",
              paddingTop: "0.5vw",
            }}
          >
            search
          </span>
          <span className={styles.emoji} aria-label="sg-flag">
            {" "}
            🇸🇬
          </span>
          <span
            className="material-icons"
            id={styles.menuHamburger}
            style={{
              fontSize: "35px",
              paddingRight: "1vw",
              paddingLeft: "1vw",
            }}
            onClick={mobileMenu}
          >
            menu
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
