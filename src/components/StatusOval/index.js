import React from "react"
import { container, oval } from "./css"


function StatusOval(props) {
  const status = props.children
  return (
    <div className={container}>
      <div className={`${oval} ${status}`} />
      <div>{status}</div>
    </div>
  )
}

export default StatusOval
