import React from "react";
import styles from "../../components/volunteer/VolunteerDetails.module.css";
import Carousel from "react-multi-carousel";
import mentorHowTo from "../../assets/volunteer_pages/mentor_01_howto.png";
import bannerTwo from "../../assets/volunteer_pages/mentor_02_fundraising.jpeg";
import bannerThree from "../../assets/volunteer_pages/volunteer_03.jpeg";
import bannerFour from "../../assets/volunteer_pages/volunteer_04.png";
import bannerFive from "../../assets/volunteer_pages/volunteer_05.jpeg";
import noticeIcon from "../../assets/svg_icons/volunteer_8_notice.svg";
import detailsImage from "../../assets/volunteer_pages/volunteer_02.png";

const VolunteerDetails = () => {
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
      <div className={styles.details_container}>
        {/* left container consists of image and time commitment etc */}
        <div className={styles.left_container}>
          {/* container for image */}
          <div className={styles.details_image_container}>
            <img className={styles.detailsImage} src={detailsImage} alt="" />
          </div>
          {/* container for time commitment etc */}
          <div className={styles.leftDescriptionContainer}>
            {/* container keeps icon in line with label */}
            <div className={styles.description_icons_container}>
              <span className={styles.roles_icons_clock}></span>
              <span className={styles.description_label}>Time Commitment</span>
            </div>
            <p className={styles.detailsText}>• Minimum period of 6 months</p>
            <p
              className={styles.detailsText}
              style={{
                marginLeft: "7.5vw",
                marginTop: "-1vw",
                marginBottom: "0.25vw",
              }}
            >
              • 1.5 hours every Sunday <b>OR</b>
              <br />• 3 hours every 2 Sundays
            </p>
            <p className={styles.detailsText}>
              • Attend a compulsory 2-hour training session (held online on
              Zoom)
              <br />• Observe 2 x 2-hour classes
            </p>
            {/* container keeps icon in line with label */}
            <div className={styles.description_icons_container}>
              <span className={styles.roles_icons_location}></span>
              <span className={styles.description_label}>Location</span>
            </div>
            <p className={styles.detailsText}>
              • Online on Zoom <b>OR</b>
              <br />• FAST Hub @ 3 Chin Cheng Avenue, S429401
            </p>
            {/* container keeps icon in line with label */}
            <div className={styles.description_icons_container}>
              <span className={styles.roles_icons_requirements}></span>
              <span className={styles.description_label}>Requirements</span>
            </div>
            <p className={styles.detailsText}>
              • Minimum 3 years of work experience in any field
            </p>
            {/* container keeps icon in line with label */}
            <div className={styles.description_icons_container}>
              <span className={styles.roles_icons_responsibilities}></span>
              <span className={styles.description_label}>Responsibilities</span>
            </div>
            <p className={styles.detailsText}>
              • Adopt a class and take the students on a learning journey that
              will build their confidence in themselves and their future
            </p>
          </div>
        </div>
        {/* right container consists of header, volunteer orientation box, description, course dates */}
        <div className={styles.right_container}>
          {/* Header */}
          <div className={styles.headerContainer}>
            <h3 className={styles.header}>Mentor (Module 1, 2 or 3) Details</h3>
            <button type="button" className={styles.applyButton}>
              Apply for this role
            </button>
          </div>
          {/* Section on orientation reminder */}
          <div className={styles.orientationReminderContainer}>
            <img
              src={noticeIcon}
              alt="notice-icon"
              className={styles.orientationReminderIcon}
            />
            <p className={styles.orientationReminderText}>
              Please ensure you've attended the Volunteer Orientation before
              applying for this role!
            </p>
            <button type="button" className={styles.orientationReminderButton}>
              Register here
            </button>
          </div>
          {/* container for description etc and course dates */}
          <div className={styles.rightDescriptionContainer}>
            {/* sub container for description etc */}
            <div className={styles.description}>
              {/* container keeps icon in line with label */}
              <div className={styles.description_icons_container}>
                <span
                  className={styles.details_icons_description}
                  style={{ marginTop: "0.25vw" }}
                ></span>
                <span className={styles.description_label}>Description</span>
              </div>
              <p className={styles.detailsText}>
                Mentoring is at the heart of what we do. Each mentor adopts a
                class of students and takes them on a learning journey that will
                build their confidence in themselves and their future.
                <br />
                <br />
                Adopting a class gives mentors the opportunity to develop their
                own cross-cultural facilitation and presentation skills, leading
                a group of women from India, Indonesia, Myanmar, the Philippines
                and Sri Lanka. It’s an opportunity to join an exciting and
                positive community of mentors and students from around the
                world.
                <br />
                <br />
                We ask our mentors to commit to adopting a class for 6 months.
                This will allow you to build rapport with each of your students.
                As they grow comfortable with your guidance, they will be able
                to open up and be more willing to share their experiences with
                you and their classmates.
              </p>
              {/* container keeps icon in line with label */}
              <div className={styles.description_icons_container}>
                <span className={styles.details_icons_support}></span>
                <span className={styles.description_label}>
                  Support & resources provided
                </span>
              </div>
              <p className={styles.detailsText}>
                • All new mentors will be assigned a mentor buddy to learn and
                receive support from
                <br />
                • Class materials will be provided for each class. Learn more
                about the courses you could mentor here
                <br />• Aidha understands that from time to time, volunteers may
                need to miss a class due to work or unexpected family
                commitments. Fortunately, we have a strong volunteer support
                network that can provide substitutes
              </p>
            </div>
            {/* sub container for course dates */}
            <div className={styles.courseDates}>
              {/* container keeps icon in line with label */}
              <div className={styles.description_icons_container}>
                <span className={styles.details_icons_calendar}></span>
                <span className={styles.description_label}>
                  Upcoming Course Dates
                </span>
              </div>
              <p className={styles.detailsText}>
                <b>Updated for 2022 Q3 & Q4</b>
                <br />
                <br />
                <b>Module 1 - Manage Your Money & Tech</b>
              </p>
              <p className={styles.detailsText} style={{ marginLeft: "6vw" }}>
                <b>• Sunday, 9 October 2022</b>
                <br />
                Hybrid classes – mix of online & in-person
                <br />
                <b>• Sunday, 20 November 2022</b>
                <br />
                Hybrid classes – mix of online & in-person
              </p>
              <p className={styles.detailsText}>
                <b>Module 2 - Plan Your Financial Future</b>
              </p>
              <p className={styles.detailsText} style={{ marginLeft: "6vw" }}>
                <b>• Sunday, 9 October 2022</b>
                <br />
                Hybrid classes – mix of online & in-person
              </p>
              <p className={styles.detailsText}>
                <b>Module 3 - Start Your Business</b>
              </p>
              <p className={styles.detailsText} style={{ marginLeft: "6vw" }}>
                <b>• Sunday, 20 November 2022</b>
                <br />
                Online Classes – held on Zoom
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* container for 'how do I become a mentor' section */}
      <div className={styles.coursegoals_container} style={{ height: "24vw" }}>
        {/* section header */}
        <h2>How do I become a mentor?</h2>
        {/* section image */}
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

export default VolunteerDetails;
