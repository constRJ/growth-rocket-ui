import BurgerLeft from "@assets/images/reservation-image-1.png";
import Coke from "@assets/images/reservation-image-2.png";
import BurgerRight from "@assets/images/reservation-image-3.png";
import { ButtonSoftRed } from "@components/Button";
import { FormControl } from "@components/Input";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const BurgerHouseContact = () => {

  const { ref: BurgerContactInfo, inView: BurgerContactInview } = useInView({
    threshold: .2
  });
  const { ref: BurgerContactCol1, inView: BurgerContactCol1Inview } = useInView({
    threshold: .2
  })
  const { ref: BurgerContactCol2, inView: BurgerContactCol2Inview } = useInView({
    threshold: .2
  })
  const animateContactInfo = useAnimation();

  useEffect(() => {
    if (BurgerContactInview) {
      animateContactInfo.start({
        scale: 1,
        transition: {
          duration: .2
        }
      })
    } else {
      animateContactInfo.start({
        scale: 0,
        transition: {
          duration: .2
        }
      })
    }
  }, [BurgerContactInview])

  useEffect(() => {
    if (BurgerContactCol1Inview) {
      console.log("show")
      animateContactInfo.start({
        scale: 1,
        transition: {
          duration: .2
        }
      })
    } else {
      animateContactInfo.start({
        scale: 0,
        transition: {
          duration: .2
        }
      })
    }
  }, [BurgerContactCol1Inview])

  useEffect(() => {
    if (BurgerContactCol2Inview) {
      animateContactInfo.start({
        scale: 1,
        transition: {
          duration: .2
        }
      })
    } else {
      animateContactInfo.start({
        scale: 0,
        transition: {
          duration: .2
        }
      })
    }
  }, [BurgerContactCol2Inview])
  return (
    <React.Fragment>
      <section className="burger-contact-container">
        <div className="container">
          <div className="burger-contact-info" ref={BurgerContactInfo}>
            <motion.h4 className="text-b text-bebas" animate={animateContactInfo}>RESERVATION</motion.h4>
            <motion.h2 className="text-b" animate={animateContactInfo}>BOOK YOUR TABLE</motion.h2>
          </div>
          <form>
            <div className="form-container">
              <div className="form-col-1" ref={BurgerContactCol1}>
                <FormControl
                  type="text"
                  placeholder="NAME"
                  animate={BurgerContactCol1Inview}
                />
                <FormControl
                  type="text"
                  placeholder="DATE"
                  animate={BurgerContactCol1Inview}
                />
                <FormControl
                  type="number"
                  placeholder="PEOPLE"
                  animate={BurgerContactCol1Inview}
                />
              </div>
              <div className="form-col-2" ref={BurgerContactCol2}>
                <FormControl
                  type="email"
                  placeholder="EMAIL"
                  animate={BurgerContactCol2Inview}
                />
                <FormControl
                  type="time"
                  placeholder="TIME"
                  animate={BurgerContactCol2Inview}
                />
                <div className="form-group" >
                  <ButtonSoftRed
                    className="btn btn-orange-red btn-submit"
                    type="submit"
                    title="FIND A TABLE"
                    animate={BurgerContactCol2Inview}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="contact-img-container">
          <img
            src={BurgerLeft}
            alt="burger-house-reservation"
            className="reservation-image-1"
          />
          <img
            src={Coke}
            alt="burger-house-coke-img"
            className="reservation-image-2"
          />
          <img
            src={BurgerRight}
            alt="burger-house-plating"
            className="reservation-image-3"
          />
        </div>
      </section>
    </React.Fragment>
  )
}

export default BurgerHouseContact