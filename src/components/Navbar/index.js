import MotorIcon from "@assets/icon/delivery-motor-icon.png";
import BurgerHouseLogo from "@assets/logo/burger-house-logo.png";
import React, { useState } from "react";
const BurgerHouseNavbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <React.Fragment>
      <nav className="nav">
        <div className="container custom-container">
          <div className="navbar-brand-container">
            <a href="/" className="navbar-brand"><img src={BurgerHouseLogo} alt="burger house logo" /></a>
          </div>
          <div className="navbar-right-container">
            <div className="navbar-express">
              <img src={MotorIcon} alt="express-delivery-icon" className="navbar-express-icon" />
              <p className="text-b">Express Delivery +1 234 567 890</p>
            </div>
            <ul className={menu ? "navbar show" : "navbar"}>
              <li className="nav-item">
                <a href="/" className="nav-link">HOME</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">MENU</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">OUR STORY</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">CONTACT US</a>
              </li>
            </ul>
            <div className="navbar-toggler-menu-container" onClick={() => setMenu(!menu)}>
              <div className={menu ? "navbar-toggler-menu-icon active" : "navbar-toggler-menu-icon"}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default BurgerHouseNavbar