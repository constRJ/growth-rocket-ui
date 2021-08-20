import Burger1 from "@assets/products/burger-1.png";
import Burger2 from "@assets/products/burger-2.png";
import React from "react";

const BurgerHouseProduct = () => {
  return (
    <React.Fragment>
      <div className="product-container">
        <div className="product-desc">
          <h2 className="text-b">CHOOSE & ENJOY</h2>
          <p className="text-b">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, aperiam dicta? Delectus culpa nulla est magni sed in molestiae eius sit ea ullam non, cumque, dolores fugiat adipisci corrupti reprehenderit.</p>
        </div>
        <div className="products">
          <div className="product-item">
            <div className="product-img-container"><img src={Burger1} alt="burger-house" /></div>
            <div className="product-item-desc">
              <h3 className="text-b text-bebas">LOREM IPSUM DOLOR</h3>
              <p className="text-b">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo.</p>
              <button className="btn btn-orange-red btn-cta-order">ORDER NOW</button>
            </div>
          </div>
          <div className="product-item">
            <div className="product-img-container"><img src={Burger2} alt="burger-house" /></div>
            <div className="product-item-desc">
              <h3 className="text-b text-bebas">LOREM IPSUM DOLOR</h3>
              <p className="text-b">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo.</p>
              <button className="btn btn-orange-red btn-cta-order">ORDER NOW</button>
            </div>
          </div>
          <div className="product-item">
            <div className="product-img-container"><img src={Burger1} alt="burger-house" /></div>
            <div className="product-item-desc">
              <h3 className="text-b text-bebas">LOREM IPSUM DOLOR</h3>
              <p className="text-b">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo.</p>
              <button className="btn btn-orange-red btn-cta-order">ORDER NOW</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BurgerHouseProduct