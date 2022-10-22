/** @format */

import React from "react";
import styles from "./Footer.module.css";
import FacebookIcon from "../assets/footer/footer_1_facebook.png";
import InstagramIcon from "../assets/footer/footer_2_instagram.png";
import YoutubeIcon from "../assets/footer/footer_3_youtube.png";
import TiktokIcon from "../assets/footer/footer_4_tiktok.png";
import TelegramIcon from "../assets/footer/footer_5_telegram.png";
import WhatsappIcon from "../assets/footer/footer_6_whatsapp.png";

const Footer = () => {
    return (
        // Container for entire footer, horizontal margin, bg-color & text color set via tailwind
        <div className="mx-0 bg-[#eee7df] text-[#3c3d3c]">
            
            {/* Grid container for 5 columns, size 4 gap horizontally b/w columns, horizontal margin, top & bottom padding set */}
            <div className="grid grid-cols-5 gap-x-4 mx-16 pt-10 pb-16">
                
                {/* Container for 1 column out of 5 */}
				<div>
					<p className="font-bold">ABOUT</p>
					<ul className="mt-10 leading-relaxed">
						<li className="cursor-pointer">Who are we</li>
						<li className="cursor-pointer">Locate us</li>
						<li className="cursor-pointer">Contact us</li>
						<li className="cursor-pointer">Join us!</li>
						<li className="cursor-pointer">FAQ</li>
					</ul>
				</div>
				<div>
					<p className="font-bold">GET IN TOUCH</p>
					<ul className="mt-10 leading-relaxed">
						<li className="cursor-pointer">Volunteer</li>
						<li className="cursor-pointer">Donate</li>
						<li className="cursor-pointer">Partner with Aidha</li>
						<li className="cursor-pointer">Newsletters</li>
						<li className="cursor-pointer">Events</li>
					</ul>
				</div>
				<div>
					<p className="font-bold">NEED HELP?</p>
					<ul className="mt-10 leading-relaxed">
						<li className="cursor-pointer">Annual Reports</li>
						<li className="cursor-pointer">Communication Kits</li>
						<li className="cursor-pointer">Legal Help</li>
						<li className="cursor-pointer">Help with Debt</li>
						<li className="cursor-pointer">Health Matters</li>
						<li className="cursor-pointer">Privacy Policy</li>
						<li className="cursor-pointer">Whistle Blowing Policy</li>
					</ul>
				</div>
				<div></div>
				<div>
					<p className="font-bold">SUBSCRIPTION EMAIL:</p>
					<p className="mt-10">Sign up here to receive our newsletters!</p>
					<input className={styles.emailInput} type="email" placeholder="EMAIL:" />
                    <div className={styles.socialMediaIconsContainer}>
                        <a href="https://www.facebook.com/aidha.org/" target="_blank" rel="noreferrer">
                            <input type="image" src={FacebookIcon} alt="facebook" className={styles.socialMediaIcons} />
                        </a>
						<a href="https://www.instagram.com/aidha.sg/" target="_blank" rel="noreferrer">
                            <input type="image" src={InstagramIcon} alt="instagram" className={styles.socialMediaIcons} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCEpqUcq2u0jcTQu7fYxD2vQ" target="_blank" rel="noreferrer">
                            <input type="image" src={YoutubeIcon} alt="youtube" className={styles.socialMediaIcons} />
                        </a>
                        <a href="https://www.tiktok.com/@aidha.sg" target="_blank" rel="noreferrer">
                            <input type="image" src={TiktokIcon} alt="tiktok" className={styles.socialMediaIcons} />
                        </a>
                        <input type="image" src={TelegramIcon} alt="telegram" className={styles.socialMediaIcons} />
                        <a href="https://api.whatsapp.com/send?phone=6597894041" target="_blank" rel="noreferrer">
                            <input type="image" src={WhatsappIcon} alt="whatsapp" className={styles.socialMediaIcons} />
                        </a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
