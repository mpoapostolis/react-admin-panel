import React, { Component } from "react"
import ReactDOM from "react-dom"
import { container } from "./css"

export default class PopOver extends Component {
  componentDidMount() {
    const parrent = ReactDOM.findDOMNode(this).parentElement
    parrent.style.position = "sticky"
    this.setState({ parrent })
  }

  componentWillUnmount() {
    const { parrent } = this.state
    parrent.style.position = "block"
  }

  render() {
    const { active } = this.props
    const isActive = active ? "active" : ""
    console.log(active)
    return (
      <div className={`${container} ${isActive}`}>
        {this.props.children.map(elem => elem)}
      </div>
    )
  }
}
