import React from "react";

const BurgerHouseShowcase = () => {
  return (
    <React.Fragment>
      <section className="container-fluid">
        <div className="burger-showcase-container">
          <div className="burger-col-1">
            <div className="burger-showcase-desc">
              <p className="text-bebas">TRY IT TODAY</p>
              <h3 className="text-bebas">MOST POPULAR BURGER</h3>
            </div>
          </div>
          <div className="burger-col-2">
            <div className="burger-col-2-col-1">
              <div className="burger-showcase-desc">
                <p className="text-bebas">TRY IT TODAY</p>
                <h3 className="text-bebas">MORE FUN</h3>
                <h3 className="text-bebas">MORE TASTE</h3>
              </div>
            </div>
            <div className="burger-col-2-col-2">
              <div className="burger-showcase-desc">
                <p className="text-bebas">TRY IT TODAY</p>
                <h3 className="text-bebas">FRESH & CHILI</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="btn btn-yellow text-bebas catch-phrase">ALWAYS TASTY BURGER</div>
      </section>
    </React.Fragment>
  )
}

export default BurgerHouseShowcase