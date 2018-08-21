import React from "react"
import { select } from "./css"

function ActionButton(props) {
  const { onChange, children, value, extraClass } = props
  return (
    <select
      onChange={onChange}
      value={value}
      className={`${select} ${extraClass}`}>
      {children.map(child => child)}
    </select>
  )
}

export default ActionButton
