import React from "react";
import styles from "./ReachImpact.module.css";
import getInvolvedIcon1 from "../../assets/svg_icons/getinvolved_1_womenimpacted.svg";
import getInvolvedIcon3 from "../../assets/svg_icons/getinvolved_3_lives.svg";
import getInvolvedIcon4 from "../../assets/svg_icons/getinvolved_4_savings.svg";
import getInvolvedIcon5 from "../../assets/svg_icons/getinvolved_5_assets.svg";
import getInvolvedIcon6 from "../../assets/svg_icons/getinvolved_6_business.svg";

//to display flag emoji, it does not work if rendered thru windows
function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const ReachImpact = () => {
  return (
    <div className={styles.reachimpact_container}>
      <h2>Our reach & impact</h2>
      <div className={styles.reachimpact_row}>
        <div className={styles.reachimpact}>
          <div className={styles.reachimpact_icons}>
            <img src={getInvolvedIcon1} alt="" />
          </div>
          <div className={styles.reachimpact_title}>
            <span>Over </span>
            <span className={styles.reachimpact_title_colourO}>5000</span>
          </div>
          <div className={styles.reachimpact_label}>
            <span>women educated</span>
          </div>
        </div>
        <div className={styles.reachimpact}>
          <div className={styles.reachimpact_emoji}>
            <span>{getFlagEmoji("IN")} </span>
            <span>{getFlagEmoji("ID")} </span>
            <span>{getFlagEmoji("MM")} </span>
            <span>{getFlagEmoji("PH")} </span>
            <span>{getFlagEmoji("LK")} </span>
          </div>
          <div className={styles.reachimpact_title}>
            <span>From </span>
            <span className={styles.reachimpact_title_colourO}>5 </span>
            <span>countries</span>
          </div>
          <div className={styles.reachimpact_label}>
            <span>India, Indonesia, Myanmar, Philippines, Sri Lanka</span>
          </div>
        </div>
        <div className={styles.reachimpact}>
          <div className={styles.reachimpact_icons}>
            <img src={getInvolvedIcon3} alt="" />
          </div>
          <div className={styles.reachimpact_title}>
            <span className={styles.reachimpact_title_colourO}>9 </span>
            <span>lives impacted</span>
          </div>
          <div className={styles.reachimpact_label}>
            <span>for every student taught at Aidha</span>
          </div>
        </div>
      </div>
      <div className={styles.reachimpact_row}>
        <div className={styles.reachimpact}>
          <div className={styles.reachimpact_icons}>
            <img src={getInvolvedIcon4} alt="" />
          </div>
          <div className={styles.reachimpact_title}>
            <span className={styles.reachimpact_title_colourO}>78% </span>
            <span>increase</span>
          </div>
          <div className={styles.reachimpact_label}>
            <span>in monthly savings</span>
          </div>
        </div>
        <div className={styles.reachimpact}>
          <div className={styles.reachimpact_icons}>
            <img src={getInvolvedIcon5} alt="" />
          </div>
          <div className={styles.reachimpact_title}>
            <span className={styles.reachimpact_title_colourO}>100% </span>
            <span>increase</span>
          </div>
          <div className={styles.reachimpact_label}>
            <span>in ownership of production assets</span>
          </div>
        </div>
        <div className={styles.reachimpact}>
          <div className={styles.reachimpact_icons}>
            <img src={getInvolvedIcon6} alt="" />
          </div>
          <div className={styles.reachimpact_title}>
            <span className={styles.reachimpact_title_colourO}>40% </span>
            <span>of alumna</span>
          </div>
          <div className={styles.reachimpact_label}>
            <span>start their own business</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachImpact;
