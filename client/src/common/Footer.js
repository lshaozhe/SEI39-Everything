/** @format */

import React, { useState, useEffect, useContext } from "react";
import styles from "./Footer.module.css";
import FacebookIcon from "../assets/footer/footer_1_facebook.png";
import InstagramIcon from "../assets/footer/footer_2_instagram.png";
import YoutubeIcon from "../assets/footer/footer_3_youtube.png";
import TiktokIcon from "../assets/footer/footer_4_tiktok.png";
import TelegramIcon from "../assets/footer/footer_5_telegram.png";
import WhatsappIcon from "../assets/footer/footer_6_whatsapp.png";

import languageObj from "../assets/languages/common/footerLanguages";
import ContextStorage from "../context/context";
const Footer = () => {
  const ctx = useContext(ContextStorage);
  const [languageText, setLanguageText] = useState(languageObj.en);

  useEffect(() => {
    switch (ctx.language) {
      case "bu":
        setLanguageText(languageObj.bu);
        break;
      default:
        setLanguageText(languageObj.en);
    }
  }, [ctx.language]);

  return (
    // Container for entire footer, horizontal margin, bg-color & text color set via tailwind
    <div className="mx-0 bg-[#eee7df] text-[#3c3d3c]">
      {/* Grid container for 5 columns, size 4 gap horizontally b/w columns, horizontal margin, top & bottom padding set */}
      <div className="grid grid-rows-4 lg:grid-cols-5 gap-x-4 mx-16 pt-3 lg:pt-10 pb-16">
        {/* Container for 1 column out of 5 */}
        <div>
          <p className="font-bold">{languageText.group1.a}</p>
          <ul className="mt-1 lg:mt-10 leading-relaxed">
            <li className="cursor-pointer">{languageText.group1.b}</li>
            <li className="cursor-pointer">{languageText.group1.c}</li>
            <li className="cursor-pointer">{languageText.group1.d}</li>
            <li className="cursor-pointer">{languageText.group1.e}</li>
            <li className="cursor-pointer">{languageText.group1.f}</li>
          </ul>
        </div>
        <div>
          <p className="font-bold">{languageText.group2.a}</p>
          <ul className="mt-1 lg:mt-10 leading-relaxed">
            <li className="cursor-pointer">{languageText.group2.b}</li>
            <li className="cursor-pointer">{languageText.group2.c}</li>
            <li className="cursor-pointer">{languageText.group2.d}</li>
            <li className="cursor-pointer">{languageText.group2.e}</li>
            <li className="cursor-pointer">{languageText.group2.f}</li>
          </ul>
        </div>
        <div>
          <p className="font-bold">{languageText.group3.a}</p>
          <ul className="mt-1 lg:mt-10 leading-relaxed">
            <li className="cursor-pointer">{languageText.group3.b}</li>
            <li className="cursor-pointer">{languageText.group3.c}</li>
            <li className="cursor-pointer">{languageText.group3.d}</li>
            <li className="cursor-pointer">{languageText.group3.e}</li>
            <li className="cursor-pointer">{languageText.group3.f}</li>
            <li className="cursor-pointer">{languageText.group3.g}</li>
            <li className="cursor-pointer">{languageText.group3.h}</li>
          </ul>
        </div>
        <div className="hidden lg:block"></div>
        <div className="mt-3 lg:mt-0">
          <p className="font-bold">{languageText.group4.a}</p>
          <p className="mt-1 lg:mt-10">{languageText.group4.b}</p>
          <input
            className={styles.emailInput}
            type="email"
            placeholder={languageText.group4.c}
          />
          <div className={styles.socialMediaIconsContainer}>
            <a
              href="https://www.facebook.com/aidha.org/"
              target="_blank"
              rel="noreferrer"
            >
              <input
                type="image"
                src={FacebookIcon}
                alt="facebook"
                className={styles.socialMediaIcons}
              />
            </a>
            <a
              href="https://www.instagram.com/aidha.sg/"
              target="_blank"
              rel="noreferrer"
            >
              <input
                type="image"
                src={InstagramIcon}
                alt="instagram"
                className={styles.socialMediaIcons}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCEpqUcq2u0jcTQu7fYxD2vQ"
              target="_blank"
              rel="noreferrer"
            >
              <input
                type="image"
                src={YoutubeIcon}
                alt="youtube"
                className={styles.socialMediaIcons}
              />
            </a>
            <a
              href="https://www.tiktok.com/@aidha.sg"
              target="_blank"
              rel="noreferrer"
            >
              <input
                type="image"
                src={TiktokIcon}
                alt="tiktok"
                className={styles.socialMediaIcons}
              />
            </a>
            <input
              type="image"
              src={TelegramIcon}
              alt="telegram"
              className={styles.socialMediaIcons}
            />
            <a
              href="https://api.whatsapp.com/send?phone=6597894041"
              target="_blank"
              rel="noreferrer"
            >
              <input
                type="image"
                src={WhatsappIcon}
                alt="whatsapp"
                className={styles.socialMediaIcons}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
