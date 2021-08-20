import BurgerHouseBanner from "@components/Banner";
import BurgerHouseContact from "@components/Contact";
import BurgerHouseEvents from "@components/Events";
import BurgerHouseFooter from "@components/Footer";
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
      <BurgerHouseContact />
      <BurgerHouseFooter />
    </>
  )
}


export default LandingPageLayout