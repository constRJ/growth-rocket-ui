import BurgerHouseBanner from "@components/Banner";
import BurgerHouseNavbar from "@components/Navbar";
import BurgerHouseProduct from "@components/Products";
import BurgerHouseShowcase from "@components/Showcase";
import React from "react";
const LandingPageLayout = () => {
  return (
    <>
      <BurgerHouseNavbar />
      <BurgerHouseBanner />
      <BurgerHouseShowcase />
      <BurgerHouseProduct />
    </>
  )
}


export default LandingPageLayout