/** @format */

import React, { useState, useEffect, useContext } from "react";
import { CCarousel } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import { CCarouselCaption } from "@coreui/react";
import { CImage } from "@coreui/react";
import bannerOne from ".././assets/homepage/homepage_banner.png";
import bannerTwo from ".././assets/homepage/homepage_banner2.jpeg";
import bannerThree from ".././assets/homepage/homepage_banner3.png";
import contentImgOne from ".././assets/homepage/0_1_hear_our_stories.png";
import contentImgTwo from ".././assets/homepage/0_2_financial_planning.png";
import contentImgThree from ".././assets/homepage/0_3_make_a_change.png";
import contentImgFour from ".././assets/homepage/0_4_ride_for_aidha.png";
import contentImgFive from ".././assets/homepage/0_5_aidha_photography.png";
import languageObj from "../assets/languages/pages/homepageLanguages";
import { Link } from "react-router-dom";
import ContextStorage from "../context/context";
import useFetch from "../hooks/useFetch";

const Homepage = () => {
  const ctx = useContext(ContextStorage);
  const [languageText, setLanguageText] = useState(languageObj.en);
  const { response } = useFetch("http://127.0.0.1:5001/api/languages/homepage");

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
        {/* carousel for banner image, transitions between 3 different images */}
        <CCarousel indicators className="banner_container" transition="crossfade">
          {/* first carousel image */}
          <CCarouselItem>
            <CImage className="d-block w-100 banner" src={bannerOne} alt="slide 1" />
            {/* caption for first image with orange background */}
            <CCarouselCaption className="d-md-block banner_label">
              <span>{languageText.carousel.a}</span>
            </CCarouselCaption>
          </CCarouselItem>
          {/* second carousel image */}
          <CCarouselItem>
            <CImage className="d-block w-100 banner" src={bannerTwo} alt="slide 2" />
            {/* caption for second image */}
            <CCarouselCaption className="d-md-block banner_label">
              <span>{languageText.carousel.b}</span>
            </CCarouselCaption>
          </CCarouselItem>
          {/* third carousel image */}
          <CCarouselItem>
            <CImage className="d-block w-100 banner" src={bannerThree} alt="slide 3" />
            {/* caption for third image */}
            <CCarouselCaption className="d-md-block banner_label">
              <span>{languageText.carousel.c}</span>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>
      </div>
      {/* all content below the main banner goes here */}
      <div className="content_container">
        {/* content_box contains the 5 'content' elements */}
        <div className="content_box" style={{ marginTop: "3vh" }}>
          {/* content contains the image, navigation button & label */}
          <div className="content">
            <div className="content_image">
              <img src={contentImgOne} alt="" />
            </div>
            <Link to="/students/stories" style={{ textDecoration: "none", color: "#ffffff" }}>
              <div className="content_button"></div>
              {/* button_label to become navigation link */}
              <div className="button_label">
                <span>{languageText.contentOne.a}</span>
              </div>
            </Link>
            <div className="content_label">
              <span>{languageText.contentOne.b}</span>
            </div>
          </div>
          {/* second content element */}
          <div className="content">
            <div className="content_image">
              <img src={contentImgTwo} alt="" />
            </div>
            <Link to="/students/courses" style={{ textDecoration: "none", color: "#ffffff" }}>
              <div className="content_button"></div>
              {/* button_label to become navigation link */}
              <div className="button_label">
                <span>{languageText.contentTwo.a}</span>
              </div>
            </Link>
            <div className="content_label">
              <span>{languageText.contentTwo.b}</span>
            </div>
          </div>
        </div>
        <div className="content_box">
          {/* third content element */}
          <div className="content">
            <div className="content_image">
              <img src={contentImgThree} alt="" />
            </div>
            <Link
              to="/volunteers/volunteer_with_us"
              style={{ textDecoration: "none", color: "#ffffff" }}>
              <div className="content_button"></div>
              {/* button_label to become navigation link */}

              <div className="button_label">
                <span>{languageText.contentThree.a}</span>
              </div>
            </Link>
            <div className="content_label">
              <span>{languageText.contentThree.b}</span>
            </div>
          </div>
          {/* fourth content element */}
          <div className="content">
            <div className="content_image">
              <img src={contentImgFour} alt="" />
            </div>
            <div className="content_button"></div>
            {/* button_label to become navigation link */}
            <div className="button_label">
              <span>{languageText.contentFour.a}</span>
            </div>
            <div className="content_label">
              <span>{languageText.contentFour.b}</span>
            </div>
          </div>
        </div>
        <div className="content_box">
          {/* fifth content element */}
          <div className="content">
            <div className="content_image">
              <img src={contentImgFive} alt="" />
            </div>
            <div className="content_button"></div>
            {/* button_label to become navigation link */}
            <div className="button_label">
              <span>{languageText.contentFive.a}</span>
            </div>
            <div className="content_label">
              <span>{languageText.contentFive.b}</span>
            </div>
          </div>
          <div className="empty_content"></div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
