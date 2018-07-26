import React from "react"
import { ripple } from "./css"

function Button(props) {
  const { children } = props
  return <button className={ripple}>{children}</button>
}

export default Button
