import React, { useState } from "react";
import logo from "../assets/aidha-logo.png";
import styles from "./Navbar.module.css";

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

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navlogo}>
          <img src={logo} alt="logo" style={{}} />
        </div>
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
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Courses</span>
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
                    aria-controls="menu-lang-python"
                    className="w-full text-center flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">Course 1</span>
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    aria-controls="menu-lang-python"
                    className="w-full text-center flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">Course 2</span>
                  </button>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    aria-haspopup="true"
                    aria-controls="menu-lang-python"
                    className="w-full text-center flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">Course 3</span>
                  </button>
                </li>
              </ul>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Student Stories</span>
              </button>
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
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Our Reach & Impact</span>
              </button>
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
              <button
                aria-haspopup="true"
                aria-controls="menu-lang"
                className="w-full text-center flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Volunteer With Us</span>
              </button>
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
          <span className={styles.emoji} aria-label="sg-flag">
            <span
              className="material-icons"
              style={{
                fontSize: "30px",
                paddingRight: "1vw",
              }}
            >
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
