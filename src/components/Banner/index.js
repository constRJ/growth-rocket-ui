import BannerBurger from "@assets/banner/banner-image.png"
import React from "react"

const BurgerHouseBanner = () => {
  return (
    <React.Fragment>
      <section className="banner-container">
        <div className="container banner-custom-container">
          <div className="banner-info">
            <p className="text-b text-bebas">IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</p>
            <h1 className="text-b">BURGER <span className="banner-sp-text">WEEK</span></h1>
            <h2 className="text-b">WEEK</h2>
          </div>
          <div className="banner-image">
            <img src={BannerBurger} alt="banner-burger-house" />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
export default BurgerHouseBanner