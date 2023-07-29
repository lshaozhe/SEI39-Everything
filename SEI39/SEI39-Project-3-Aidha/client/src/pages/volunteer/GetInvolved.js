import React from "react";
import { CCarousel } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import { CCarouselCaption } from "@coreui/react";
import { CImage } from "@coreui/react";
import bannerOne from "../../assets/volunteer_pages/getinvolved_01a_banner.png";
import bannerTwo from "../../assets/volunteer_pages/getinvolved_01b_banner.png";
import bannerThree from "../../assets/volunteer_pages/getinvolved_01c_banner.png";
import bannerFour from "../../assets/volunteer_pages/getinvolved_01d_banner.png";
import Partners from "../../components/volunteer/Partners";
import ReachImpact from "../../components/volunteer/ReachImpact";
import VolunteerDonate from "../../components/volunteer/VolunteerDonate";

const GetInvolved = () => {
  return (
    <>
      <div className="page_container">
        {/* page_header shows current page navigation */}
        <div className="page_header">
          <span>Get Involved / Nilushika's Story</span>
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
              style={{ objectPosition: "20% 10%" }}
            />
            {/* caption for first image with orange background */}
            <CCarouselCaption className="d-none d-md-block banner_label">
              <span>
                I was 16 years old. I became their parents, and their lives had
                been my responsibility ever since.
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
              <span>What a transformation!</span>
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
                I’m also happy to say that my siblings are happily married.
              </span>
            </CCarouselCaption>
          </CCarouselItem>
          {/* third carousel image */}
          <CCarouselItem>
            <CImage
              className="d-block w-100 banner"
              src={bannerFour}
              alt="slide 4"
            />
            {/* caption for third image */}
            <CCarouselCaption className="d-none d-md-block banner_label">
              <span>
                Today, I’m teaching 25 Sri Lankan women how to start their own
                micro business.
              </span>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>
      </div>
      <ReachImpact />
      <Partners />
      <VolunteerDonate />
    </>
  );
};

export default GetInvolved;
