import React from "react"
import {
  container,
  welcomeMessage,
  filterType,
  label,
  dateRange,
  button
} from "./css"

function Filters(props) {
  const { name, activeType, handleType } = props
  const KlassName = type => (activeType === type ? `${button} active` : button)
  return (
    <div className={container}>
      <div className={welcomeMessage}>
        <div className={label}>Dashboard</div>
        <span>Welcome back {name}</span>
      </div>
      <div className={filterType}>
        <button
          onClick={handleType}
          type="daily"
          className={KlassName("daily")}>
          Daily
        </button>
        <button
          onClick={handleType}
          type="weekly"
          className={KlassName("weekly")}>
          Weekly
        </button>
        <button
          onClick={handleType}
          type="monthly"
          className={KlassName("monthly")}>
          Monthly
        </button>
      </div>
      <div className={dateRange}>
        <div>I am Export</div>
      </div>
    </div>
  )
}

export default Filters
