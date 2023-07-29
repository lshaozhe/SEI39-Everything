import React, { useState, useEffect, useContext } from "react";
import styles from "./StudentStories.module.css";
import eventsIconOne from "../../assets/mdw_pages/stories_02a.jpg";
import eventsIconTwo from "../../assets/mdw_pages/stories_02b.jpg";
import eventsIconThree from "../../assets/mdw_pages/stories_02c.jpg";
import eventsIconFour from "../../assets/mdw_pages/stories_02d.jpg";
import eventsIconFive from "../../assets/mdw_pages/stories_02e.jpg";
import eventsIconSix from "../../assets/mdw_pages/stories_02f.jpg";
import eventsIconSeven from "../../assets/mdw_pages/stories_02g.jpg";
import profileIconOne from "../../assets/mdw_pages/stories_03a_profilepic.png";
import profileIconTwo from "../../assets/mdw_pages/stories_03b_profilepic.png";
import profileIconThree from "../../assets/mdw_pages/stories_03c_profilepic.png";
import profileIconFour from "../../assets/mdw_pages/stories_03d_profilepic.png";
import profileIconFive from "../../assets/mdw_pages/stories_03e_profilepic.png";
import profileIconSix from "../../assets/mdw_pages/stories_03f_profilepic.png";
import signupImage from "../../assets/mdw_pages/stories_04.png";
import { CCarousel } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import { Link } from "react-router-dom";
import ContextStorage from "../../context/context";
import languageObj from "../../assets/languages/pages/StudentStoriesLanguages";
import useFetch from "../../hooks/useFetch";

const StudentStories = () => {
  const ctx = useContext(ContextStorage);
  const [languageText, setLanguageText] = useState(languageObj.en);
  const { response } = useFetch("http://127.0.0.1:5001/api/languages/stories");

  useEffect(() => {
    if (response) {
      switch (ctx.language) {
        case "bu":
          setLanguageText(response.bu);
          break;
        default:
          setLanguageText(response.en);
      }
    }
  }, [ctx.language, response]);

  return (
    <>
      <div className="page_container">
        <div className="page_header">
          <span>{languageText.header}</span>
        </div>
        <div className={styles.banner}>
          <div className={styles.banner_video}>
            <iframe
              src="https://www.youtube.com/embed/xsuNrqkzNqI"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="video"></iframe>
          </div>
          <div className={styles.banner_caption}>
            <CCarousel indicators className="banner_container" transition="crossfade">
              <CCarouselItem>
                <div className={styles.carousel_item}>
                  <h2>{languageText.carousel1}</h2>
                  <p>
                    <span>🇵🇭</span> @YolandaBermas
                  </p>
                </div>
              </CCarouselItem>
              {/* second carousel image */}
              <CCarouselItem>
                <div className={styles.carousel_item}>
                  <h2>{languageText.carousel2}</h2>
                  <p>
                    <span>🇵🇭</span>@Gleia
                  </p>
                </div>
              </CCarouselItem>
              {/* third carousel image */}
              <CCarouselItem>
                <div className={styles.carousel_item}>
                  <h2>{languageText.carousel3}</h2>
                  <p>
                    <span>🇵🇭</span>@ArnolitaCruz
                  </p>
                </div>
              </CCarouselItem>
            </CCarousel>
          </div>
        </div>
        <div className="page_mobile_header">
          <span>{languageText.title}</span>
        </div>
        <div className={styles.events_icons_container}>
          <div className={styles.events_box} style={{ marginTop: "3vh" }}>
            {/* content contains the image, navigation button & label */}
            <div className={styles.events}>
              <div className={styles.events_icons}>
                <img src={eventsIconOne} alt="" />
              </div>
              <div className={styles.events_label}>
                <div>TikTok!</div>
              </div>
            </div>
            <div className={styles.events}>
              <div className={styles.events_icons}>
                <img src={eventsIconTwo} alt="" />
              </div>
              <div className={styles.events_label}>
                <div>#IDWD</div>
              </div>
            </div>
            <div className={styles.events}>
              <div className={styles.events_icons}>
                <img src={eventsIconThree} alt="" />
              </div>
              <div className={styles.events_label}>
                <div>Ride for Aidha 2022</div>
              </div>
            </div>
            <div className={styles.events}>
              <div className={styles.events_icons}>
                <img src={eventsIconFour} alt="" />
              </div>
              <div className={styles.events_label}>
                <div>Ride for Aidha 2021</div>
              </div>
            </div>
            <div className={styles.events}>
              <div className={styles.events_icons}>
                <img src={eventsIconFive} alt="" />
              </div>
              <div className={styles.events_label}>
                <div>Inside Life</div>
              </div>
            </div>
            <div className={styles.events}>
              <div className={styles.events_icons}>
                <img src={eventsIconSix} alt="" />
              </div>
              <div className={styles.events_label}>
                <div>Life @ Aidha</div>
              </div>
            </div>
            <div className={styles.events}>
              <div className={styles.events_icons}>
                <img src={eventsIconSeven} alt="" />
              </div>
              <div className={styles.events_label}>
                <div>Aidha Alumni</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content_container}>
        {/* content_box contains the 5 'content' elements */}
        <div className={styles.content_box} style={{ marginTop: "3vh" }}>
          {/* content contains the image, navigation button & label */}
          <div className={styles.content}>
            <div className={styles.content_image}>
              <img src={profileIconOne} alt="" />
              <span>@Ritchelle</span>
              <p>🇵🇭</p>
            </div>
            <div className={styles.content_button}></div>
            {/* button_label to become navigation link */}
            <div className={styles.button_label}>
              <span className={styles.quote_icon}>“</span>
              <span>{languageText.story1}</span>
            </div>
          </div>
          {/* second content element */}
          <div className={styles.content}>
            <div className={styles.content_image}>
              <img src={profileIconTwo} alt="" />
              <span>@NonaDaza</span>
              <p>🇮🇩</p>
            </div>
            <div className={styles.content_button}></div>
            {/* button_label to become navigation link */}
            <div className={styles.button_label}>
              <span className={styles.quote_icon}>“</span>
              <span>{languageText.story2}</span>
            </div>
          </div>
        </div>
        <div className={styles.content_box}>
          {/* third content element */}
          <div className={styles.content}>
            <div className={styles.content_image}>
              <img src={profileIconThree} alt="" />
              <span>@ArnolitaCruz</span>
              <p>🇵🇭</p>
            </div>
            <div className={styles.content_button}></div>
            {/* button_label to become navigation link */}
            <div className={styles.button_label}>
              <span className={styles.quote_icon}>“</span>
              <span>{languageText.story3}</span>
            </div>
          </div>
          {/* fourth content element */}
          <div className={styles.content}>
            <div className={styles.content_image}>
              <img src={profileIconFour} alt="" />
              <span>@CherryDiaz</span>
              <p>🇵🇭</p>
            </div>
            <div className={styles.content_button}></div>
            {/* button_label to become navigation link */}
            <div className={styles.button_label}>
              <span className={styles.quote_icon}>“</span>
              <span>{languageText.story4}</span>
            </div>
          </div>
        </div>
        <div className={styles.content_box}>
          {/* fifth content element */}
          <div className={styles.content}>
            <div className={styles.content_image}>
              <img src={profileIconFive} alt="" />
              <span>@EmeldaCaria</span>
              <p>🇵🇭</p>
            </div>
            <div className={styles.content_button}></div>
            {/* button_label to become navigation link */}
            <div className={styles.button_label}>
              <span className={styles.quote_icon}>“</span>
              <span>{languageText.story5}</span>
            </div>
          </div>
          {/* sixth content element */}
          <div className={styles.content}>
            <div className={styles.content_image}>
              <img src={profileIconSix} alt="" />
              <span>@AngelineDiego</span>
              <p>🇵🇭</p>
            </div>
            <div className={styles.content_button}></div>
            {/* button_label to become navigation link */}
            <div className={styles.button_label}>
              <span className={styles.quote_icon}>“</span>
              <span>{languageText.story6}</span>
            </div>
          </div>
        </div>
      </div>
      {/* container with signup button at bottom of page */}
      <div className={styles.signup_container}>
        <div className={styles.signup_box}>
          {/* image on the left side of buttons */}
          <div className={styles.signup_img}>
            <img src={signupImage} alt="" />
          </div>
          <div className={styles.signup_label}>
            <p>{languageText.signup.a}</p>
            <div className={styles.button_container}>
              <button className={styles.signup_button}>
                <Link to="/students/courses" style={{ textDecoration: "none", color: "#ffffff" }}>
                  {languageText.signup.b}
                </Link>
              </button>
            </div>
            <Link to="/students/courses" style={{ textDecoration: "none", color: "#ffffff" }}>
              <div className={styles.mobile_signup}>
                <p>{languageText.signup.c}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentStories;
