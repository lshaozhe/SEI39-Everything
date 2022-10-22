import React from "react";
import styles from "../../common/StudentStories.module.css";
import eventsIconOne from "../../assets/mdw_pages/stories_02a.jpg";
import eventsIconTwo from "../../assets/mdw_pages/stories_02b.jpg";
import eventsIconThree from "../../assets/mdw_pages/stories_02c.jpg";
import eventsIconFour from "../../assets/mdw_pages/stories_02d.jpg";
import eventsIconFive from "../../assets/mdw_pages/stories_02e.jpg";
import eventsIconSix from "../../assets/mdw_pages/stories_02f.jpg";
import eventsIconSeven from "../../assets/mdw_pages/stories_02g.jpg";
import { CCarousel } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import { CCarouselCaption } from "@coreui/react";
import { CCallout } from "@coreui/react";

const StudentStories = () => {
  return (
    <>
      <div className="page_container">
        <div className="page_header">
          <span>For Students / Student Stories</span>
        </div>
        <div className={styles.banner}>
          <div className={styles.banner_video}>
            <iframe src="https://www.youtube.com/embed/xsuNrqkzNqI"></iframe>
          </div>
          <div className={styles.banner_caption}>
            <CCarousel
              indicators
              className="banner_container"
              transition="crossfade"
            >
              <CCarouselItem>
                <div className={styles.carousel_item}>
                  <h2>
                    “I feel that I’m finally on the right path to giving my
                    daughter a good future.”
                  </h2>
                  <p>
                    <span>🇵🇭</span> @YolandaBermas
                  </p>
                </div>
              </CCarouselItem>
              {/* second carousel image */}
              <CCarouselItem>
                <div className={styles.carousel_item}>
                  <h2>
                    “Aidha changed my life. It gave me the chance to reach my
                    dream, not only for myself but also for my family.”
                  </h2>
                  <p>
                    <span>🇵🇭</span>@Gleia
                  </p>
                </div>
              </CCarouselItem>
              {/* third carousel image */}
              <CCarouselItem>
                <div className={styles.carousel_item}>
                  <h2>
                    Thanks to Aidha, I now know how to manage my assets better
                    and make them work for me.
                  </h2>
                  <p>
                    <span>🇵🇭</span>@ArnolitaCruz
                  </p>
                </div>
              </CCarouselItem>
            </CCarousel>
          </div>
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
