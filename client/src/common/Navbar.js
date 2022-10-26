/** @format */

import React, { useState, useEffect, useContext } from "react";
import logo from "../assets/aidha-logo.png";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import languageObj from "../assets/languages/common/NavbarLanguages";
import ContextStorage from "../context/context";

const Navbar = () => {
  // hover states and functions allow the parent navlabel to also be highlighted
  // in orange, when the user hovers over the child (nested unordered list)

  const [aboutHoverState, setAboutHoverState] = useState({});
  const [studentHoverState, setStudentHoverState] = useState({});
  const [employerHoverState, setEmployerHoverState] = useState({});
  const [volunteerHoverState, setVolunteerHoverState] = useState({});

  const [showMobileMenu, setShowMobileMenu] = useState("none");
  const [showStudentsNestedMenu, setShowStudentsNestedMenu] = useState("none");
  const [hideOtherButtons, setHideOtherButtons] = useState("block");
  const [studentButtonBorder, setStudentButtonBorder] = useState("20px");
  const [studentButtonColor, setStudentButtonColor] = useState("#eee7df");
  const [studentButtonText, setStudentButtonText] = useState("#2C384AF2");
  const [showLanguageMenu, setShowLanguageMenu] = useState("none");

  const ctx = useContext(ContextStorage);
  const [languageText, setLanguageText] = useState(languageObj.en);

  const [countryFlag, setCountryFlag] = useState("🇸🇬");

  useEffect(() => {
    switch (ctx.language) {
      case "bu":
        setLanguageText(languageObj.bu);
        setCountryFlag("🇲🇲");
        break;
      default:
        setLanguageText(languageObj.en);
        setCountryFlag("🇸🇬");
    }
  }, [ctx.language]);

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

  //   function changes mobile menu state, which toggles its visibility
  const mobileMenu = () => {
    if (showMobileMenu === "none") {
      setShowMobileMenu("block");
      setShowLanguageMenu("none");
    } else {
      setShowMobileMenu("none");
      setShowStudentsNestedMenu("none");
      setHideOtherButtons("block");
      setStudentButtonBorder("20px");
      setStudentButtonColor("#eee7df");
      setStudentButtonText("#2C384AF2");
      setShowLanguageMenu("none");
    }
  };

  //   function changes nested menu state, which toggles its visibility and appearance
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

  //   function changes language menu state, which toggles its visibility
  const setLanguageMenu = (e) => {
    //if statement as only span in the dropdown has id
    if (e.target.id) {
      //for language setting
      ctx.setLanguage(e.target.id);
    }
    if (showLanguageMenu === "none") {
      setShowLanguageMenu("block");
      setShowMobileMenu("none");
    } else {
      setShowLanguageMenu("none");
      setShowMobileMenu("none");
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
            <span className="pr-1 font-semibold flex-1">
              {languageText.about.a}
            </span>
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
                <span className="pr-1 flex-1">{languageText.about.b}</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">{languageText.about.c}</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">{languageText.about.d}</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">{languageText.about.e}</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">{languageText.about.f}</span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">{languageText.about.g}</span>
              </button>
            </li>
          </ul>
        </div>

        {/* mobile menu only appears for width 768px and below */}
        <div className={styles.mobileMenu} style={{ display: showMobileMenu }}>
          <div className={styles.mobileButton}>{languageText.about.a}</div>
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
            {languageText.forStudents.a}
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
            {languageText.forStudents.b}
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
              {languageText.forStudents.c}
            </div>
          </Link>
          <Link
            to="/students/stories"
            style={{ textDecoration: "none", color: "#2C384AF2" }}
          >
            <div
              className={styles.nestedButton}
              style={{ display: showStudentsNestedMenu }}
              onClick={mobileMenu}
            >
              {languageText.stories.a}
            </div>
          </Link>
          <div
            className={styles.mobileButton}
            style={{ display: hideOtherButtons }}
          >
            {languageText.forEmployers.a}
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
              {languageText.getInvolved.a}
            </div>
          </Link>
        </div>

        {/* menu for language switching */}
        <div
          className={styles.languageMenu}
          style={{ display: showLanguageMenu }}
        >
          <span className={styles.emoji} aria-label="sg-flag">
            🇸🇬
          </span>
          {/* change this onClick to toggle English language */}
          <span id="en" onClick={setLanguageMenu}>
            English
          </span>
          <br />
          <span className={styles.emoji} aria-label="my-flag">
            {" "}
            🇲🇲
          </span>
          {/* change this onClick to toggle Burmese language */}
          <span id="bu" onClick={setLanguageMenu}>
            မြန်မာဘာသာ
          </span>
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
            <span className="pr-1 font-semibold flex-1">
              {languageText.forStudents.a}
            </span>
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
                <span className="pr-1 flex-1">
                  {languageText.forStudents.b}
                </span>
              </button>
              <ul
                id="menu-lang"
                aria-hidden="true"
                className="bg-white border rounded-sm absolute top-0 right-0 
                origin-top-left min-w-32"
              >
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    className="w-full text-center flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">
                      {languageText.forStudents.freeTips.a}
                    </span>
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    className="w-full text-center flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">
                      {languageText.forStudents.freeTips.b}
                    </span>
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    className="w-full text-center flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">
                      {languageText.forStudents.freeTips.c}
                    </span>
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    className="w-full text-center flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">
                      {languageText.forStudents.freeTips.d}
                    </span>
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
                  <span className="pr-1 flex-1">
                    {languageText.forStudents.c}
                  </span>
                </button>
              </Link>
              <ul
                id="menu-lang"
                aria-hidden="true"
                className="bg-white border rounded-sm absolute top-0 right-0 
                origin-top-left min-w-32"
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
                      <span className="pr-1 flex-1">
                        {languageText.forStudents.courses.a}
                      </span>
                    </button>
                  </Link>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    aria-controls="menu-lang-python"
                    className="w-full text-center flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">
                      {languageText.forStudents.courses.b}
                    </span>
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    aria-controls="menu-lang-python"
                    className="w-full text-center flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">
                      {languageText.forStudents.courses.c}
                    </span>
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
                  <span className="pr-1 flex-1">
                    {languageText.forStudents.d}
                  </span>
                </button>
              </Link>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">
                  {languageText.forStudents.e}
                </span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">
                  {languageText.forStudents.f}
                </span>
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
            <span className="pr-1 font-semibold flex-1">
              {languageText.forEmployers.a}
            </span>
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
                <span className="pr-1 flex-1">
                  {languageText.forEmployers.b}
                </span>
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
            <span className="pr-1 font-semibold flex-1">
              {languageText.getInvolved.a}
            </span>
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
                  <span className="pr-1 flex-1">
                    {languageText.getInvolved.b}
                  </span>
                </button>
              </Link>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">
                  {languageText.getInvolved.c}
                </span>
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
                  <span className="pr-1 flex-1">
                    {languageText.getInvolved.d}
                  </span>
                </button>
              </Link>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">
                  {languageText.getInvolved.e}
                </span>
              </button>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">
                  {languageText.getInvolved.f}
                </span>
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
          <span
            className={styles.emoji}
            aria-label="sg-flag"
            onClick={setLanguageMenu}
          >
            {countryFlag}
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
