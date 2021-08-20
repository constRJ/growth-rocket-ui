import React from "react"
const FormControl = ({ type, placeholder }) => {
  return (
    <React.Fragment>
      <div className="form-group">
        <input type={type} className="form-control" placeholder={placeholder} />
      </div>
    </React.Fragment>
  )
}

export default FormControl