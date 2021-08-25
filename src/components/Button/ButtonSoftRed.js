import { motion } from "framer-motion"
const ButtonSoftRed = ({ className, type, title, animate }) => {
  return (
    <motion.button className={className} type={type} animate={animate}>{title}</motion.button>
  )
}

export default ButtonSoftRed