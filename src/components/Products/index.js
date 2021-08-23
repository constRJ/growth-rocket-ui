import Burger1 from "@assets/products/burger-1.png";
import Burger2 from "@assets/products/burger-2.png";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const BurgerHouseProduct = () => {
  const [ref, inView] = useInView({
    threshold: .6
  })
  const { ref: cardRef, inView: cardRefInView } = useInView({
    threshold: .8
  })
  const animateProductDescInView = useAnimation()
  const animateProductItemInView = useAnimation()

  useEffect(() => {
    if (inView) {
      animateProductDescInView.start({
        scale: 1,
        transition: {
          duration: .2
        }
      })
    } else {
      animateProductDescInView.start({
        scale: 0,
        transition: {
          duration: .2
        }
      })
    }
  }, [inView])

  useEffect(() => {
    if (cardRefInView) {
      animateProductItemInView.start({
        scale: 1,
        transition: {
          duration: .2
        }
      })
    } else {
      animateProductItemInView.start({
        scale: 0,
        transition: {
          duration: .2
        }
      })
    }
  }, [cardRefInView])
  return (
    <React.Fragment>
      <section className="product-container">
        <div className="product-desc" ref={ref}>
          <motion.h2 className="text-b"
            animate={animateProductDescInView}
          >CHOOSE & ENJOY</motion.h2>
          <motion.p className="text-b"
            animate={animateProductDescInView}
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, aperiam dicta? Delectus culpa nulla est magni sed in molestiae eius sit ea ullam non, cumque, dolores fugiat adipisci corrupti reprehenderit.</motion.p>
        </div>
        <div className="products" ref={cardRef}>
          <motion.div className="product-item" animate={animateProductItemInView}>
            <div className="product-img-container"><img src={Burger1} alt="burger-house" /></div>
            <div className="product-item-desc">
              <h3 className="text-b text-bebas">LOREM IPSUM DOLOR</h3>
              <p className="text-b">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo.</p>
              <button className="btn btn-orange-red btn-cta-order">ORDER NOW</button>
            </div>
          </motion.div>
          <motion.div className="product-item" animate={animateProductItemInView}>
            <div className="product-img-container"><img src={Burger2} alt="burger-house" /></div>
            <div className="product-item-desc">
              <h3 className="text-b text-bebas">LOREM IPSUM DOLOR</h3>
              <p className="text-b">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo.</p>
              <button className="btn btn-orange-red btn-cta-order">ORDER NOW</button>
            </div>
          </motion.div>
          <motion.div className="product-item" animate={animateProductItemInView}>
            <div className="product-img-container"><img src={Burger1} alt="burger-house" /></div>
            <div className="product-item-desc">
              <h3 className="text-b text-bebas">LOREM IPSUM DOLOR</h3>
              <p className="text-b">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo.</p>
              <button className="btn btn-orange-red btn-cta-order">ORDER NOW</button>
            </div>
          </motion.div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default BurgerHouseProduct