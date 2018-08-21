import React, { Component } from "react"
import Tabs from "../../../../components/Tabs"
import { container } from "./css"

const tabsArr = ["General Info", "Tab 2", "Tab 3", "Tab 4", "Tab 5", "Tab 6"]

class Main extends Component {
  state = {
    active: "General Info"
  }

  setActive = active => this.setState({ active })
  render() {
    const { active } = this.state
    console.log(active)
    return (
      <div className={container}>
        <Tabs setActive={this.setActive} tabsArr={tabsArr} />
      </div>
    )
  }
}
export default Main
