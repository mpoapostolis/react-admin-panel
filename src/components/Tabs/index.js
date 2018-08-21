import React, { Component } from "react"
import * as styles from "./css"

class Tabs extends Component {
  constructor() {
    super()
    const state = {
      active: "General Info"
    }
    this.state = state
  }

  activateTab = ({ currentTarget }) => {
    const { setActive } = this.props
    const textContent = currentTarget.textContent
    const active = textContent
    this.setState({ active })
    setActive(active)
  }

  isActive = tab => {
    const { active } = this.state
    return tab === active ? "active" : ""
  }

  render() {
    const { tabsArr = [], extraClass } = this.props
    const { tabs, btn, tabsCont } = styles
    console.log(this.state.active)
    return (
      <div className={tabsCont}>
        <div className={`${tabs} ${extraClass}`}>
          {tabsArr.map((name, key) => (
            <button
              key={key}
              onClick={this.activateTab}
              className={`${btn} ${this.isActive(name) ? "active" : ""}`}>
              {name}
            </button>
          ))}
        </div>
      </div>
    )
  }
}

export default Tabs
