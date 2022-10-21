import React from "react";
import { CCarousel } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import { CCarouselCaption } from "@coreui/react";
import { CImage } from "@coreui/react";
import Navbar from "../common/Navbar";
import bannerOne from ".././assets/homepage/homepage_banner.png";
import bannerTwo from ".././assets/homepage/homepage_banner2.jpeg";
import bannerThree from ".././assets/homepage/homepage_banner3.png";
import contentImgOne from ".././assets/homepage/0_1_hear_our_stories.png";
import contentImgTwo from ".././assets/homepage/0_2_financial_planning.png";
import contentImgThree from ".././assets/homepage/0_3_make_a_change.png";
import contentImgFour from ".././assets/homepage/0_4_ride_for_aidha.png";
import contentImgFive from ".././assets/homepage/0_5_aidha_photography.png";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="page_container">
        <div className="page_header">
          <span>
            Shows which page you are currently on *to be removed from homepage*
          </span>
        </div>
        <CCarousel
          indicators
          className="banner_container"
          transition="crossfade"
        >
          <CCarouselItem>
            <CImage
              className="d-block w-100 banner"
              src={bannerOne}
              alt="slide 1"
            />
            <CCarouselCaption className="d-none d-md-block banner_label">
              <p>
                Aidha helps migrant domestic workers achieve economic
                independence through financial education.
              </p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100 banner"
              src={bannerTwo}
              alt="slide 2"
            />
            <CCarouselCaption className="d-none d-md-block banner_label">
              <p>
                Aidha helps migrant domestic workers achieve economic
                independence through financial education.
              </p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100 banner"
              src={bannerThree}
              alt="slide 3"
            />
            <CCarouselCaption className="d-none d-md-block banner_label">
              <p>
                Aidha helps migrant domestic workers achieve economic
                independence through financial education.
              </p>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>
      </div>

      <div className="content_container">
        <div className="content_box" style={{ marginTop: "3vh" }}>
          <div className="content">
            <div className="content_image">
              <img src={contentImgOne} />
            </div>
            <div className="content_button"></div>
            <div className="button_label">Hear Our Stories</div>
            <div className="content_label">
              <span>FOR STUDENTS</span>
            </div>
          </div>
          <div className="content">
            <div className="content_image">
              <img src={contentImgTwo} />
            </div>
            <div className="content_button"></div>
            <div className="button_label">Available Courses</div>
            <div className="content_label">
              <span>FOR STUDENTS</span>
            </div>
          </div>
        </div>
        <div className="content_box">
          <div className="content">
            <div className="content_image">
              <img src={contentImgThree} />
            </div>
            <div className="content_button"></div>
            <div className="button_label">
              <span>Make A Difference Today</span>
            </div>
            <div className="content_label">
              <span>GET INVOLVED</span>
            </div>
          </div>
          <div className="content">
            <div className="content_image">
              <img src={contentImgFour} />
            </div>
            <div className="content_button"></div>
            <div className="button_label">
              <span>Ride For Aidha OCBC 2022</span>
            </div>
            <div className="content_label">
              <span>EVENTS</span>
            </div>
          </div>
        </div>
        <div className="content_box">
          <div className="content">
            <div className="content_image">
              <img src={contentImgFive} />
            </div>
            <div className="content_button"></div>
            <div className="button_label">
              <span>Aidha Photography Competition 2022</span>
            </div>
            <div className="content_label">
              <span>EVENTS</span>
            </div>
          </div>
          <div className="content"></div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
