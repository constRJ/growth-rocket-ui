import BurgerHouseBanner from "@components/Banner";
import BurgerHouseEvents from "@components/Events";
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
      <BurgerHouseEvents />
    </>
  )
}


export default LandingPageLayout