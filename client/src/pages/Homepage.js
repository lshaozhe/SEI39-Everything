import React from "react";
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

const Homepage = () => {
  return (
    <>
      <div className="page_container">
        {/* page_header shows current page navigation */}
        <div className="page_header">
          <span>
            Shows which page you are currently on *to be removed from homepage*
          </span>
        </div>
        {/* carousel for banner image, transitions between 3 different images */}
        <CCarousel
          indicators
          className="banner_container"
          transition="crossfade"
        >
          {/* first carousel image */}
          <CCarouselItem>
            <CImage
              className="d-block w-100 banner"
              src={bannerOne}
              alt="slide 1"
            />
            {/* caption for first image with orange background */}
            <CCarouselCaption className="d-none d-md-block banner_label">
              <span>
                Aidha helps migrant domestic workers achieve economic
                independence through financial education.
              </span>
            </CCarouselCaption>
          </CCarouselItem>
          {/* second carousel image */}
          <CCarouselItem>
            <CImage
              className="d-block w-100 banner"
              src={bannerTwo}
              alt="slide 2"
            />
            {/* caption for second image */}
            <CCarouselCaption className="d-none d-md-block banner_label">
              <span>
                Aidha helps migrant domestic workers achieve economic
                independence through financial education.
              </span>
            </CCarouselCaption>
          </CCarouselItem>
          {/* third carousel image */}
          <CCarouselItem>
            <CImage
              className="d-block w-100 banner"
              src={bannerThree}
              alt="slide 3"
            />
            {/* caption for third image */}
            <CCarouselCaption className="d-none d-md-block banner_label">
              <span>
                Aidha helps migrant domestic workers achieve economic
                independence through financial education.
              </span>
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
            <div className="content_button"></div>
            {/* button_label to become navigation link */}
            <div className="button_label">Hear Our Stories</div>
            <div className="content_label">
              <span>FOR STUDENTS</span>
            </div>
          </div>
          {/* second content element */}
          <div className="content">
            <div className="content_image">
              <img src={contentImgTwo} alt="" />
            </div>
            <div className="content_button"></div>
            {/* button_label to become navigation link */}
            <div className="button_label">Available Courses</div>
            <div className="content_label">
              <span>FOR STUDENTS</span>
            </div>
          </div>
        </div>
        <div className="content_box">
          {/* third content element */}
          <div className="content">
            <div className="content_image">
              <img src={contentImgThree} alt="" />
            </div>
            <div className="content_button"></div>
            {/* button_label to become navigation link */}
            <div className="button_label">
              <span>Make A Difference Today</span>
            </div>
            <div className="content_label">
              <span>GET INVOLVED</span>
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
              <span>Ride For Aidha OCBC 2022</span>
            </div>
            <div className="content_label">
              <span>EVENTS</span>
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
