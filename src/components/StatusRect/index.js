import React from "react"
import { container } from "./css"

function StatusRect(props) {
  const status = props.children
  const statusClass = status.toLocaleLowerCase()
  return <div className={`${container} ${statusClass}`}>{status}</div>
}

export default StatusRect
