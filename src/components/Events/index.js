import DiscoverEvent1 from "@assets/images/discover-image-1.jpg";
import React from "react";
const BurgerHouseEvents = () => {
  return (
    <React.Fragment>
      <section className="burger-event-container">
        <div className="burger-event-content">
          <div className="burger-event-slides">
            <div className="burger-event-item-slide">
              <div className="burger-event-info">
                <h4 className="text-dg text-bebas">DISCOVER</h4>
                <h3 className="text-b">UPCOMING EVENTS</h3>
                <p className="text-dg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veniam provident et est dolor id eius ratione, soluta quas, voluptatem molestiae laborum ipsa ab! Cum.</p>
              </div>
              <div className="burger-event-img">
                <img src={DiscoverEvent1} alt="burger-house-event" />
              </div>
            </div>
          </div>
          <div className="slides-button-container">
            <div className="slides-button-trigger active"></div>
            <div className="slides-button-trigger"></div>
            <div className="slides-button-trigger"></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
export default BurgerHouseEvents