import BurgerHouseBanner from "@components/Banner";
import BurgerHouseNavbar from "@components/Navbar";
import BurgerHouseShowcase from "@components/Showcase";
import React from "react";
const LandingPageLayout = () => {
  return (
    <>
      <BurgerHouseNavbar />
      <BurgerHouseBanner />
      <BurgerHouseShowcase />
    </>
  )
}


export default LandingPageLayout