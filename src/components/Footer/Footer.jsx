import React from "react";
import "./footer.css";
import Logo from '../../assets/images/logo.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram , FaLinkedin, FaRegCopyright } from "react-icons/fa6";

export const Footer = () => {
    return (

        <div className="footer">
            <div className="footer-content">
                <div className="connect" id="Footer">
                        <img src={Logo} alt="logo" />
                    

                    <div className="copyright">
                        <FaRegCopyright />
                        <p>2024 TravelWell. All rights reserved</p>
                    </div>
                </div>
                <div className="About" id="Footer">
                    <p className="text_about">A propos</p>
                    <div className="about-content">
                    <p>Gagnez du temps et de l'argent.
Voyagez en toute confiance. Vivez des expériences inoubliables                    </p>
                    </div>

                </div>

                <div className="ContactUs" id="Footer">
                    <p className="contactname">Contactez-nous</p>
                    <div className="contact12">
                        <FaWhatsapp/>
                        <p>+2376000000</p>
                    </div>
                    <div className="contact12">
                        <FaWhatsapp/>
                        <p>+2370000000</p>
                    </div>
                    <p>ENSPY </p>
                    <p>Yaoundé Cmr</p>
                </div>

                  <div className="About" id="Footer">
                    <p className="text_about">Services</p>
                    <div className="about-content">
                    <p>                      
                    Recherche de voyage<br/>
                    Planification de voyage<br/>
                    Creation d'itineraire<br/>
                    Suivi en temps reel                 
                    </p>
                    </div>

                </div>


                <div className="social_Media_Icons">
                <FaXTwitter to="https://twitter.com/i/flow/login" />
                {/* <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank"><FaFacebookF/> </a> */}
                <FaFacebookF/>
                <FaInstagram />
                <FaLinkedin />
            </div>

             </div>

            
        </div>
        
    );
};

export default Footer