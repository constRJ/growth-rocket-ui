import BurgerLeft from "@assets/images/reservation-image-1.png";
import Coke from "@assets/images/reservation-image-2.png";
import BurgerRight from "@assets/images/reservation-image-3.png";
import { ButtonSoftRed } from "@components/Button";
import { FormControl } from "@components/Input";
import React from "react";

const BurgerHouseContact = () => {
  return (
    <React.Fragment>
      <section className="burger-contact-container">
        <div className="container">
          <div className="burger-contact-info">
            <h4 className="text-b text-bebas">RESERVATION</h4>
            <h2 className="text-b">BOOK YOUR TABLE</h2>
          </div>
          <form>
            <div className="form-container">
              <div className="form-col-1">
                <FormControl
                  type="text"
                  placeholder="NAME"
                />
                <FormControl
                  type="text"
                  placeholder="DATE"
                />
                <FormControl
                  type="number"
                  placeholder="PEOPLE"
                />
              </div>
              <div className="form-col-2">
                <FormControl
                  type="email"
                  placeholder="EMAIL"
                />
                <FormControl
                  type="time"
                  placeholder="TIME"
                />
                <div className="form-group">
                  <ButtonSoftRed
                    className="btn btn-orange-red btn-submit"
                    type="submit"
                    title="FIND A TABLE"
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