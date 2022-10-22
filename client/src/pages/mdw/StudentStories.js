import React from "react";
import styles from "../../common/StudentStories.module.css";
import eventsIconOne from "../../assets/mdw_pages/stories_02a.jpg";
import eventsIconTwo from "../../assets/mdw_pages/stories_02b.jpg";
import eventsIconThree from "../../assets/mdw_pages/stories_02c.jpg";
import eventsIconFour from "../../assets/mdw_pages/stories_02d.jpg";
import eventsIconFive from "../../assets/mdw_pages/stories_02e.jpg";
import eventsIconSix from "../../assets/mdw_pages/stories_02f.jpg";
import eventsIconSeven from "../../assets/mdw_pages/stories_02g.jpg";

const StudentStories = () => {
  return (
    <>
      <div className="page_container">
        <div className="page_header">
          <span>For Students / Student Stories</span>
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
    </>
  );
};

export default StudentStories;
