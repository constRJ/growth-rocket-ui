import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const BurgerHouseShowcase = () => {
  const [ref, inView] = useInView({
    threshold: .2
  })
  const animeOnView = useAnimation();
  const animeOnViewCol2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animeOnView.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: .5
        }
      });
      animeOnViewCol2.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
        }
      })
    } else {
      animeOnView.start({
        x: "-100vw",
        opacity: 0,
        transition: {
          duration: .5
        }
      })
      animeOnViewCol2.start({
        x: "100vw",
        opacity: 0,
        transition: {
          duration: .5
        }
      })
    }
  }, [inView])
  return (
    <React.Fragment>
      <section className="container-fluid" >
        <div className="burger-showcase-container" ref={ref}>
          <motion.div className="burger-col-1"
            animate={animeOnView}
          >
            <div className="burger-showcase-desc">
              <p className="text-bebas">TRY IT TODAY</p>
              <h3 className="text-bebas">MOST POPULAR BURGER</h3>
            </div>
          </motion.div>
          <motion.div className="burger-col-2"
            animate={animeOnViewCol2}
          >
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
          </motion.div>
        </div>
        <div className="btn btn-yellow text-bebas catch-phrase">ALWAYS TASTY BURGER</div>
      </section>
    </React.Fragment>
  )
}

export default BurgerHouseShowcase