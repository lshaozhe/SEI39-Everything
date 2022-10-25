import React from "react";
import styles from "./Partners.module.css";
import partnerLogoA from "../../assets/volunteer_pages/getinvolved_02a_partner.png";
import partnerLogoB from "../../assets/volunteer_pages/getinvolved_02b_partner.png";
import partnerLogoC from "../../assets/volunteer_pages/getinvolved_02c_partner.png";
import partnerLogoD from "../../assets/volunteer_pages/getinvolved_02d_partner.png";
import partnerLogoE from "../../assets/volunteer_pages/getinvolved_02e_partner.png";
import partnerLogoF from "../../assets/volunteer_pages/getinvolved_02f_partner.png";
import partnerLogoG from "../../assets/volunteer_pages/getinvolved_02g_partner.png";
import partnerLogoH from "../../assets/volunteer_pages/getinvolved_02h_partner.jpeg";
import partnerLogoI from "../../assets/volunteer_pages/getinvolved_02i_partner.png";
import partnerLogoJ from "../../assets/volunteer_pages/getinvolved_02j_partner.png";

const Partners = () => {
  return (
    <div className={styles.partners_container}>
      <h2>Our Partners</h2>
      <div className={styles.partners_row}>
        <img src={partnerLogoA} alt="Logo A" />
        <img src={partnerLogoB} alt="Logo B" />
        <img src={partnerLogoC} alt="Logo C" />
        <img src={partnerLogoD} alt="Logo D" />
        <img src={partnerLogoE} alt="Logo E" />
      </div>
      <div className={styles.partners_row}>
        <img src={partnerLogoF} alt="Logo F" />
        <img src={partnerLogoG} alt="Logo G" />
        <img src={partnerLogoH} alt="Logo H" />
        <img src={partnerLogoI} alt="Logo I" />
        <img src={partnerLogoJ} alt="Logo J" />
      </div>
      <div className={styles.partner_extend_text}>
        <span>View All Partners</span>
      </div>
    </div>
  );
};

export default Partners;
