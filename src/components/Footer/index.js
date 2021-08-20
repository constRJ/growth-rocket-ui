import FooterEmailLogo from "@assets/icon/email-icon.png";
import FooterFacebookIcon from "@assets/icon/facebook-icon.png";
import FooterInstagramIcon from "@assets/icon/instagram-icon.png";
import FooterLocationLogo from "@assets/icon/location-icon.png";
import FooterTwitterIcon from "@assets/icon/twitter-icon.png";
import FooterWhatsappIcon from "@assets/icon/whatsapp-icon.png";
import FooterLogo from "@assets/logo/footer-logo.png";
import React from "react";

const BurgerHouseFooter = () => {
  return (
    <React.Fragment>
      <footer className="footer-container">
        <div className="footer-content">

          <div className="footer-row-1">
            <div className="footer-col-1">
              <div className="footer-logo">
                <a href="/" className="footer-brand"><img src={FooterLogo} alt="burger-house" /></a>
              </div>
              <div className="footer-desc">
                <p className="text-lw">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis. </p>
              </div>
              {/* <div className="footer-copyrights text-l text-bebas">
              <p>&copy; BURGER HOUSE 2020. ALL RIGHTS RESERVED</p>
            </div> */}
            </div>
            <div className="footer-col-2">
              <ul className="footer-company-info">
                <li>
                  <img src={FooterLocationLogo} alt="burger-house-location" />
                  <p className="text-bebas text-l">MAIN ROAD, BUILDING NAME, COUNTRY</p>
                </li>
                <li>
                  <img src={FooterEmailLogo} alt="burger-house-location" />
                  <p className="text-bebas text-l">INFO@COMPANYNAME.COM</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-row-2">
            <div className="footer-copyrights">
              <p className="text-lw">&copy; COMPANY NAME 2020. ALL RIGHTS RESERVED</p>
            </div>
            <ul className="footer-social-icons">
              <li>
                <a href="/">
                  <img src={FooterInstagramIcon} alt="burger-house-instagram" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={FooterFacebookIcon} alt="burger-house-facebook" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={FooterTwitterIcon} alt="burger-house-twitter" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={FooterWhatsappIcon} alt="burger-house-whatsapp" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default BurgerHouseFooter