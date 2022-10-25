/** @format */

import React, { useState, useEffect } from "react";
import logo from "../assets/aidha-logo.png";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import languageObj from "../assets/languages/common/NavbarLanguages";

const Navbar = () => {
  // hover states and functions allow the parent navlabel to also be highlighted
  // in orange, when the user hovers over the child (nested unordered list)

  const [aboutHoverState, setAboutHoverState] = useState({});
  const [studentHoverState, setStudentHoverState] = useState({});
  const [employerHoverState, setEmployerHoverState] = useState({});
  const [volunteerHoverState, setVolunteerHoverState] = useState({});

  const [language, setLanguage] = useState("en");
  const [languageText, setLanguageText] = useState(languageObj.en);

  useEffect(() => {
    switch (language) {
      case "bu":
        setLanguageText(languageObj.bu);
        break;
      default:
        setLanguageText(languageObj.en);
    }
  }, [language]);

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

  return (
    <>
      <div className={styles.navbar}>
        <Link to="/">
          <div className={styles.navlogo}>
            <img src={logo} alt="logo" style={{ objectFit: "contain" }} />
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
            style={aboutHoverState}>
            <span className="pr-1 font-semibold flex-1">{languageText.about.a}</span>
          </button>
          <ul
            id="menu"
            aria-hidden="true"
            className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  origin-top min-w-32"
            onMouseEnter={aboutHover}
            onMouseLeave={() => setAboutHoverState()}>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">{languageText.about.b}</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">{languageText.about.c}</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">{languageText.about.d}</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">{languageText.about.e}</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">{languageText.about.f}</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">{languageText.about.g}</span>
              </button>
            </li>
          </ul>
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
            style={studentHoverState}>
            <span className="pr-1 font-semibold flex-1">{languageText.forStudents.a}</span>
          </button>
          <ul
            id="menu"
            aria-hidden="true"
            className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
 origin-top min-w-32"
            onMouseEnter={studentHover}
            onMouseLeave={() => setStudentHoverState()}>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">{languageText.forStudents.b}</span>
              </button>
              <ul
                id="menu-lang"
                aria-hidden="true"
                className="bg-white border rounded-sm absolute top-0 right-0 
  origin-top-left
  min-w-32
  ">
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    className="w-full text-center flex items-center outline-none focus:outline-none">
                    <span className="pr-1 flex-1">{languageText.forStudents.freeTips.a}</span>
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    className="w-full text-center flex items-center outline-none focus:outline-none">
                    <span className="pr-1 flex-1">{languageText.forStudents.freeTips.b}</span>
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    className="w-full text-center flex items-center outline-none focus:outline-none">
                    <span className="pr-1 flex-1">{languageText.forStudents.freeTips.c}</span>
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    className="w-full text-center flex items-center outline-none focus:outline-none">
                    <span className="pr-1 flex-1">{languageText.forStudents.freeTips.d}</span>
                  </button>
                </li>
              </ul>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <Link to="/students/courses" style={{ textDecoration: "none", color: "#ffffff" }}>
                <button
                  aria-haspopup="true"
                  aria-controls="menu-lang"
                  className="w-full text-center flex items-center outline-none focus:outline-none">
                  <span className="pr-1 flex-1">{languageText.forStudents.c}</span>
                </button>
              </Link>
              <ul
                id="menu-lang"
                aria-hidden="true"
                className="bg-white border rounded-sm absolute top-0 right-0 
  origin-top-left
  min-w-32
  ">
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <Link
                    to="/students/courses/financial_education"
                    style={{ textDecoration: "none", color: "#ffffff" }}>
                    <button
                      aria-haspopup="true"
                      aria-controls="menu-lang-python"
                      className="w-full text-center flex items-center outline-none focus:outline-none">
                      <span className="pr-1 flex-1">{languageText.forStudents.courses.a}</span>
                    </button>
                  </Link>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    aria-controls="menu-lang-python"
                    className="w-full text-center flex items-center outline-none focus:outline-none">
                    <span className="pr-1 flex-1">{languageText.forStudents.courses.b}</span>
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    aria-controls="menu-lang-python"
                    className="w-full text-center flex items-center outline-none focus:outline-none">
                    <span className="pr-1 flex-1">{languageText.forStudents.courses.c}</span>
                  </button>
                </li>
              </ul>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <Link to="/students/stories" style={{ textDecoration: "none", color: "#ffffff" }}>
                <button
                  aria-haspopup="true"
                  aria-controls="menu-lang"
                  className="w-full text-center flex items-center outline-none focus:outline-none">
                  <span className="pr-1 flex-1">{languageText.forStudents.d}</span>
                </button>
              </Link>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">{languageText.forStudents.e}</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">{languageText.forStudents.f}</span>
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
            style={employerHoverState}>
            <span className="pr-1 font-semibold flex-1">{languageText.forEmployers.a}</span>
          </button>
          <ul
            id="menu"
            aria-hidden="true"
            className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  origin-top min-w-32"
            onMouseEnter={employerHover}
            onMouseLeave={() => setEmployerHoverState()}>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">{languageText.forEmployers.b}</span>
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
            style={volunteerHoverState}>
            <span className="pr-1 font-semibold flex-1">{languageText.getInvolved.a}</span>
          </button>
          <ul
            id="menu-lang"
            aria-hidden="true"
            className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
 origin-top min-w-32"
            onMouseEnter={volunteerHover}
            onMouseLeave={() => setVolunteerHoverState()}>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <Link to="/volunteers" style={{ textDecoration: "none", color: "#ffffff" }}>
                <button
                  aria-haspopup="true"
                  aria-controls="menu-lang"
                  className="w-full text-center flex items-center outline-none focus:outline-none">
                  <span className="pr-1 flex-1">{languageText.getInvolved.b}</span>
                </button>
              </Link>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">{languageText.getInvolved.c}</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <Link
                to="/volunteers/volunteer_with_us"
                style={{ textDecoration: "none", color: "#ffffff" }}>
                <button
                  aria-haspopup="true"
                  aria-controls="menu-lang"
                  className="w-full text-center flex items-center outline-none focus:outline-none">
                  <span className="pr-1 flex-1">{languageText.getInvolved.d}</span>
                </button>
              </Link>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">{languageText.getInvolved.e}</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">{languageText.getInvolved.f}</span>
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.navsearch}>
          <span className={styles.emoji} aria-label="sg-flag">
            <span
              className="material-icons"
              style={{
                fontSize: "30px",
                paddingRight: "1vw",
              }}>
              search
            </span>
            🇸🇬
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
