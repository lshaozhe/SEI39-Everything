import React from "react";
import styles from "../../components/volunteer/VolunteerWithUs.module.css";
import Carousel from "react-multi-carousel";
import mentorHowTo from "../../assets/volunteer_pages/mentor_01_howto.png";
import bannerTwo from "../../assets/volunteer_pages/mentor_02_fundraising.jpeg";
import bannerThree from "../../assets/volunteer_pages/volunteer_03.jpeg";
import bannerFour from "../../assets/volunteer_pages/volunteer_04.png";
import bannerFive from "../../assets/volunteer_pages/volunteer_05.jpeg";

const VolunteerRequirements = () => {
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
          <span>
            Get Involved / Volunteer / Available Roles / Mentor (Module 1, 2 or
            3) Details
          </span>
        </div>
      </div>

      <div className={styles.coursegoals_container} style={{ height: "24vw" }}>
        <h2>How do I become a mentor?</h2>
        <div className={styles.goals_box} style={{ marginTop: "3vh" }}>
          <img src={mentorHowTo} alt="" className="mentor_image" />
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
              <span>Fundraising Volunteer</span>
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
                <p>• Flexible</p>
              </div>
              {/* container sets icons in-line with label */}
              <div className={styles.roles_icons_container}>
                <span className={styles.roles_icons_location}></span>
                <span className={styles.roles_label}>Location</span>
              </div>
              <p>• Remote via Zoom</p>
              {/* container sets icons in-line with label */}
              <div className={styles.roles_icons_container}>
                <span className={styles.roles_icons_requirements}></span>
                <span className={styles.roles_label}>Requirements</span>
              </div>
              <p>
                • Experience with Events Management or Business Development
                preferred
              </p>
              {/* container sets icons in-line with label */}
              <div className={styles.roles_icons_container}>
                <span className={styles.roles_icons_responsibilities}></span>
                <span className={styles.roles_label}>Responsibilities</span>
              </div>
              <p>• Any of the following:</p>
              <p style={{ marginLeft: "7.5vw" }}>
                • Help us organise our annual fundraising events
              </p>
              <p style={{ marginLeft: "7.5vw" }}>
                • Propose your own fundraising initiative
              </p>
              <p style={{ marginLeft: "7.5vw" }}>
                • Connect us with potential fundraising partners
              </p>
              {/* first carousel buttons */}
              <div className={styles.roles_button_container}>
                <div className={styles.roles_button}>More Info</div>
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

export default VolunteerRequirements;
