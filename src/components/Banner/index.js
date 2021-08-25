import BannerBurger from "@assets/banner/banner-image.png"
import { motion } from "framer-motion"
import React from "react"
const BurgerHouseBanner = () => {

  return (
    <React.Fragment>
      <section className="banner-container">
        <div className="container banner-custom-container">
          <div className="banner-info">
            <motion.p
              className="text-b text-bebas"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: "0", opacity: 1 }}
              transition={{ duration: 0.5 }}
            >IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</motion.p>
            <motion.h1
              className="text-b"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: "0", opacity: 1 }}
              transition={{ duration: 0.6 }}
            >BURGER</motion.h1>
            <motion.h2
              className="text-b"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: "0", opacity: 1 }}
              transition={{ duration: 0.7 }}
            >WEEK</motion.h2>
          </div>
          <motion.div
            className="banner-image"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <img src={BannerBurger} alt="banner-burger-house" />
            <div className="banner-burger-price">
              <p className="text-l"><span className="banner-custom-price">$5</span>.49</p>
              <p className="text-l">ONLY</p>
            </div>
          </motion.div>
        </div>
      </section>
    </React.Fragment>
  )
}
export default BurgerHouseBanner