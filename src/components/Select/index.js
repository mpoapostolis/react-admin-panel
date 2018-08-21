import React from "react"
import { select } from "./css"

function Select(props) {
  const { onChange, defaultValue = undefined, children } = props
  return (
    <select onChange={onChange} defaultValue={defaultValue} className={select}>
      {children.map(child => child)}
    </select>
  )
}

export default Select
