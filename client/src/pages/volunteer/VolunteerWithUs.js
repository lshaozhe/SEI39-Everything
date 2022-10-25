import React from "react";
import { CCarousel } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import { CCarouselCaption } from "@coreui/react";
import { CImage } from "@coreui/react";
import bannerOne from "../../assets/volunteer_pages/volunteer_banner.jpeg";
import bannerTwo from "../../assets/volunteer_pages/volunteer_02.png";
import bannerThree from "../../assets/volunteer_pages/volunteer_03.jpeg";
import bannerFour from "../../assets/volunteer_pages/volunteer_04.png";
import bannerFive from "../../assets/volunteer_pages/volunteer_05.jpeg";
import Partners from "../../components/volunteer/Partners";
import ReachImpact from "../../components/volunteer/ReachImpact";
import styles from "../../components/volunteer/VolunteerWithUs.module.css";
import registerImage from "../../assets/volunteer_pages/volunteer_01.jpeg";
import rolesIconOne from "../../assets/svg_icons/volunteer_1_time.svg";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const VolunteerWithUs = () => {
  // default responsive settings from carousel component
  // may come in handy when we try to implement mobile design
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="page_container">
        {/* page_header shows current page navigation */}
        <div className="page_header">
          <span>Get Involved / Volunteer / Anna's Story</span>
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
                “Witnessing their growth is such a humbling experience that I
                would not trade for anything.”
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
                I was looking for an engaging volunteering role where I can use
                my knowledge and expertise to help others and Aidha was the
                perfect organisation.
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
                Their enthusiasm is infectious and you can’t help but fuel their
                learning journey with the same energy.
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
                Not only did I found a love for teaching, I got to know so many
                amazing women who are highly motivated in improving their lives.
              </span>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>
      </div>
      {/* container with signup button */}
      <div className={styles.register_container}>
        <div className={styles.register_box}>
          {/* image on the left side of buttons */}
          <div className={styles.register_img}>
            <img src={registerImage} alt="" />
          </div>
          <div className={styles.register_label}>
            <p>Join Our Volunteer Orientation</p>
            <p>
              We invite you to learn more about Aidha from current volunteers,
              alumni and staff.
              <br />
              <br />
              All volunteers will have to attend the orientation session before
              being assigned a role.
            </p>
            <div className={styles.button_container}>
              <button className={styles.register_button}>
                Register for Volunteer Orientation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* carousel to scroll through various mentor roles */}
      <div className={styles.carousel_container}>
        <span className={styles.related_courses}>Available Roles</span>
        <Carousel
          responsive={responsive}
          infinite
          className={styles.courses_carousel}
          transitionDuration={500}
        >
          {/* first carousel item */}
          <div className={styles.content}>
            <div className={styles.content_label}>
              {/* first carousel item label */}
              <span>Mentor (Module 1, 2 or 3)</span>
            </div>
            {/* first carousel item image */}
            <div className={styles.content_image}>
              <img src={bannerTwo} alt="" />
            </div>
            {/* first carousel item content body */}
            <div className={styles.content_button}>
              <div>
                {/* container sets icons in-line with label */}
                <div className={styles.roles_icons_container}>
                  <span className={styles.roles_icons_clock}></span>
                  <span className={styles.roles_label}>Time Commitment</span>
                </div>
                <p>• Minimum period of 6 months</p>
                <p style={{ marginLeft: "7.5vw" }}>
                  • 1.5 hours every Sunday <b>OR</b>
                </p>
                <p style={{ marginLeft: "7.5vw" }}>• 3 hours every 2 Sundays</p>
              </div>
              {/* container sets icons in-line with label */}
              <div className={styles.roles_icons_container}>
                <span className={styles.roles_icons_location}></span>
                <span className={styles.roles_label}>Location</span>
              </div>
              <p>
                • Online on Zoom <b>OR</b>
              </p>
              <p>• FAST Hub @ 3 Chin Cheng Avenue, S429401</p>
              {/* container sets icons in-line with label */}
              <div className={styles.roles_icons_container}>
                <span className={styles.roles_icons_requirements}></span>
                <span className={styles.roles_label}>Requirements</span>
              </div>
              <p>• Minimum 3 years of work experience in any field</p>
              {/* container sets icons in-line with label */}
              <div className={styles.roles_icons_container}>
                <span className={styles.roles_icons_responsibilities}></span>
                <span className={styles.roles_label}>Responsibilities</span>
              </div>
              <p>
                • Adopt a class and take the students on a learning journey that
                will build their confidence in themselves and their future
              </p>
              {/* first carousel buttons */}
              <div className={styles.roles_button_container}>
                <div className={styles.roles_button}>
                  {" "}
                  <Link
                    to="/volunteers/volunteer_with_us/details"
                    style={{ textDecoration: "none", color: "#ffffff" }}
                  >
                    More Info
                  </Link>
                </div>
                <div className={styles.roles_button}>Apply Now</div>
                {/* </div> */}
              </div>
            </div>
          </div>
          {/* second carousel item */}
          <div className={styles.content}>
            <div className={styles.content_label}>
              {/* second carousel item label */}
              <span>Mentor (Computer Classes)</span>
            </div>
            {/* second carousel item image */}
            <div className={styles.content_image}>
              <img src={bannerThree} alt="" />
            </div>
            {/* second carousel item content body */}
            <div className={styles.content_button}>
              <div>
                {/* container sets icons in-line with label */}
                <div className={styles.roles_icons_container}>
                  <span className={styles.roles_icons_clock}></span>
                  <span className={styles.roles_label}>Time Commitment</span>
                </div>
                <p>• Minimum period of 6 months</p>
                <p style={{ marginLeft: "7.5vw" }}>
                  • 1.5 hours every Sunday <b>OR</b>
                </p>
                <p style={{ marginLeft: "7.5vw" }}>• 3 hours every 2 Sundays</p>
              </div>
              {/* container sets icons in-line with label */}
              <div className={styles.roles_icons_container}>
                <span className={styles.roles_icons_location}></span>
                <span className={styles.roles_label}>Location</span>
              </div>
              <p>
                • Online on Zoom <b>OR</b>
              </p>
              <p>• FAST Hub @ 3 Chin Cheng Avenue, S429401</p>
              {/* container sets icons in-line with label */}
              <div className={styles.roles_icons_container}>
                <span className={styles.roles_icons_requirements}></span>
                <span className={styles.roles_label}>Requirements</span>
              </div>
              <p>• Minimum 1 year of work experience in any field</p>
              <p>• Good Computer Skills</p>
              {/* container sets icons in-line with label */}
              <div className={styles.roles_icons_container}>
                <span className={styles.roles_icons_responsibilities}></span>
                <span className={styles.roles_label}>Responsibilities</span>
              </div>
              <p>
                • Adopt a class and help students improve practical IT skills on
                computer and phone
              </p>
              {/* second carousel item buttons */}
              <div className={styles.roles_button_container}>
                <div className={styles.roles_button}>More Info</div>
                <div className={styles.roles_button}>Apply Now</div>
              </div>
            </div>
          </div>
          {/* third carousel item */}
          <div className={styles.content}>
            {/* third carousel item label */}
            <div className={styles.content_label}>
              <span>Mentor (Improve Your English)</span>
            </div>
            {/* third carousel item image */}
            <div className={styles.content_image}>
              <img src={bannerFour} alt="" />
            </div>
            {/* third carousel item content body */}
            <div className={styles.content_button}>
              <div>
                {/* container sets icons in-line with label */}
                <div className={styles.roles_icons_container}>
                  <span className={styles.roles_icons_clock}></span>
                  <span className={styles.roles_label}>Time Commitment</span>
                </div>
                <p>• Minimum period of 6 months</p>
                <p style={{ marginLeft: "7.5vw" }}>
                  • 1.5 hours every Sunday <b>OR</b>
                </p>
                <p style={{ marginLeft: "7.5vw" }}>• 3 hours every 2 Sundays</p>
              </div>
              {/* container sets icons in-line with label */}
              <div className={styles.roles_icons_container}>
                <span className={styles.roles_icons_location}></span>
                <span className={styles.roles_label}>Location</span>
              </div>
              <p>
                • Online on Zoom <b>OR</b>
              </p>
              <p>• FAST Hub @ 3 Chin Cheng Avenue, S429401</p>
              {/* container sets icons in-line with label */}
              <div className={styles.roles_icons_container}>
                <span className={styles.roles_icons_requirements}></span>
                <span className={styles.roles_label}>Requirements</span>
              </div>
              <p>• Native English speaker</p>
              <p>• CELTA / TESOL certification preferred</p>
              {/* container sets icons in-line with label */}
              <div className={styles.roles_icons_container}>
                <span className={styles.roles_icons_responsibilities}></span>
                <span className={styles.roles_label}>Responsibilities</span>
              </div>
              <p>
                • Adopt a class and help students build confidence in speaking,
                reading and writing in English
              </p>
              {/* third carousel item buttons */}
              <div className={styles.roles_button_container}>
                <div className={styles.roles_button}>More Info</div>
                <div className={styles.roles_button}>Apply Now</div>
              </div>
            </div>
          </div>
          {/* fourth carousel item */}
          <div className={styles.content}>
            {/* fourth carousel item label */}
            <div className={styles.content_label}>
              <span>Tech Support</span>
            </div>
            {/* fourth carousel item image */}
            <div className={styles.tech_support}>
              <img src={bannerFive} alt="" />
            </div>
            {/* fourth carousel item content body */}
            <div className={styles.content_button}>
              <div>
                {/* container sets icons in-line with label */}
                <div className={styles.roles_icons_container}>
                  <span className={styles.roles_icons_clock}></span>
                  <span className={styles.roles_label}>Time Commitment</span>
                </div>
                <p>• Minimum period of 6 months</p>
                <p style={{ marginLeft: "7.5vw" }}>
                  • 1.5 hours every Sunday <b>OR</b>
                </p>
                <p style={{ marginLeft: "7.5vw" }}>• 3 hours every 2 Sundays</p>
              </div>
              {/* container sets icons in-line with label */}
              <div className={styles.roles_icons_container}>
                <span className={styles.roles_icons_location}></span>
                <span className={styles.roles_label}>Location</span>
              </div>
              <p>
                • Online on Zoom <b>OR</b>
              </p>
              <p>• FAST Hub @ 3 Chin Cheng Avenue, S429401</p>
              {/* container sets icons in-line with label */}
              <div className={styles.roles_icons_container}>
                <span className={styles.roles_icons_requirements}></span>
                <span className={styles.roles_label}>Requirements</span>
              </div>
              <p>• Minimum 1 year of work experience in any field</p>
              <p>• Good Computer skills</p>
              {/* container sets icons in-line with label */}
              <div className={styles.roles_icons_container}>
                <span className={styles.roles_icons_responsibilities}></span>
                <span className={styles.roles_label}>Responsibilities</span>
              </div>
              <p>
                • Adopt a class and support students in any technical issues
                they may encounter during lessons
              </p>
              {/* fourth carousel item buttons */}
              <div className={styles.roles_button_container}>
                <div className={styles.roles_button}>More Info</div>
                <div className={styles.roles_button}>Apply Now</div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default VolunteerWithUs;
