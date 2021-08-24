import Burger1 from "@assets/products/burger-1.png";
import Burger2 from "@assets/products/burger-2.png";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const BurgerHouseProduct = () => {
  const [ref, inView] = useInView({
    threshold: .6
  })
  const { ref: cardRefOne, inView: cardRefInViewOne } = useInView({
    threshold: .5
  })
  const { ref: cardRefTwo, inView: cardRefInViewTwo } = useInView({
    threshold: .5
  })
  const { ref: cardRefThree, inView: cardRefInViewThree } = useInView({
    threshold: .5
  })
  const { ref: cardRefOneDesc, inView: cardRefDescInViewOne } = useInView({
    threshold: .6
  })
  const { ref: cardRefTwoDesc, inView: cardRefDescInViewTwo } = useInView({
    threshold: .6
  })
  const { ref: cardRefThreeDesc, inView: cardRefDescInViewThree } = useInView({
    threshold: .6
  })
  const animateProductDescInView = useAnimation()
  const animateProductItemOneImgInView = useAnimation()
  const animateProductItemTwoImgInView = useAnimation()
  const animateProductItemThreeImgInView = useAnimation()
  const animeteProductItemDescOneInView = useAnimation()
  const animeteProductItemDescTwoInView = useAnimation()
  const animeteProductItemDescThreeInView = useAnimation()
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
    if (cardRefInViewOne) {
      animateProductItemOneImgInView.start({
        scale: 1,
        transition: {
          duration: .2
        }
      })
    } else {
      animateProductItemOneImgInView.start({
        scale: 0,
        transition: {
          duration: .2
        }
      })
    }
  }, [cardRefInViewOne])
  useEffect(() => {
    if (cardRefInViewTwo) {
      animateProductItemTwoImgInView.start({
        scale: 1,
        transition: {
          duration: .2
        }
      })
    } else {
      animateProductItemTwoImgInView.start({
        scale: 0,
        transition: {
          duration: .2
        }
      })
    }
  }, [cardRefInViewTwo])
  useEffect(() => {
    if (cardRefInViewThree) {
      animateProductItemThreeImgInView.start({
        scale: 1,
        transition: {
          duration: .2
        }
      })
    } else {
      animateProductItemThreeImgInView.start({
        scale: 0,
        transition: {
          duration: .2
        }
      })
    }
  }, [cardRefInViewThree])
  useEffect(() => {
    if (cardRefDescInViewOne) {
      animeteProductItemDescOneInView.start({
        scale: 1,
        transition: {
          duration: .2
        }
      })
    } else {
      animeteProductItemDescOneInView.start({
        scale: 0,
        transition: {
          duration: .2
        }
      })
    }
  }, [cardRefDescInViewOne])
  useEffect(() => {
    if (cardRefDescInViewOne) {
      animeteProductItemDescOneInView.start({
        scale: 1,
        transition: {
          duration: .2
        }
      })
    } else {
      animeteProductItemDescOneInView.start({
        scale: 0,
        transition: {
          duration: .2
        }
      })
    }
  }, [cardRefDescInViewOne])
  useEffect(() => {
    if (cardRefDescInViewTwo) {
      animeteProductItemDescTwoInView.start({
        scale: 1,
        transition: {
          duration: .2
        }
      })
    } else {
      animeteProductItemDescTwoInView.start({
        scale: 0,
        transition: {
          duration: .2
        }
      })
    }
  }, [cardRefDescInViewTwo])
  useEffect(() => {
    if (cardRefDescInViewThree) {
      animeteProductItemDescThreeInView.start({
        scale: 1,
        transition: {
          duration: .2
        }
      })
    } else {
      animeteProductItemDescThreeInView.start({
        scale: 0,
        transition: {
          duration: .2
        }
      })
    }
  }, [cardRefDescInViewThree])
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
        <div className="products" >
          <motion.div className="product-item" ref={cardRefOne}>
            <motion.div className="product-img-container" animate={animateProductItemOneImgInView}><img src={Burger1} alt="burger-house" /></motion.div>
            <div className="product-item-desc" ref={cardRefOneDesc}>
              <motion.h3 className="text-b text-bebas" animate={animeteProductItemDescOneInView}>LOREM IPSUM DOLOR</motion.h3>
              <motion.p className="text-b" animate={animeteProductItemDescOneInView}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo.</motion.p>
              <motion.button className="btn btn-orange-red btn-cta-order" animate={animeteProductItemDescOneInView}>ORDER NOW</motion.button>
            </div>
          </motion.div>
          <div className="product-item" ref={cardRefTwo}>
            <motion.div className="product-img-container" animate={animateProductItemTwoImgInView}><img src={Burger2} alt="burger-house" /></motion.div>
            <div className="product-item-desc" ref={cardRefTwoDesc}>
              <motion.h3 className="text-b text-bebas" animate={animeteProductItemDescTwoInView}>LOREM IPSUM DOLOR</motion.h3>
              <motion.p className="text-b" animate={animeteProductItemDescTwoInView}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo.</motion.p>
              <motion.button className="btn btn-orange-red btn-cta-order" animate={animeteProductItemDescTwoInView}>ORDER NOW</motion.button>
            </div>
          </div>
          <div className="product-item" ref={cardRefThree}>
            <motion.div className="product-img-container" animate={animateProductItemThreeImgInView}><img src={Burger1} alt="burger-house" /></motion.div>
            <div className="product-item-desc" ref={cardRefThreeDesc}>
              <motion.h3 className="text-b text-bebas" animate={animeteProductItemDescThreeInView}>LOREM IPSUM DOLOR</motion.h3>
              <motion.p className="text-b" animate={animeteProductItemDescThreeInView}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo.</motion.p>
              <motion.button className="btn btn-orange-red btn-cta-order" animate={animeteProductItemDescThreeInView}>ORDER NOW</motion.button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default BurgerHouseProduct