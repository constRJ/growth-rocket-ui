import { motion } from "framer-motion"
import React from "react"
const FormControl = ({ type, placeholder, animate }) => {
  return (
    <React.Fragment>
      <motion.div className="form-group" animate={animate}>
        <input type={type} className="form-control" placeholder={placeholder} />
      </motion.div>
    </React.Fragment>
  )
}

export default FormControl