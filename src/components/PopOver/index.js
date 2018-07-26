import React, { Component } from "react"
import { container } from "./css"
import Transition from "react-transition-group/Transition"

/**
 * @param {HTMLElement[]} children
 * @param {boolean} active
 * @param {HTMLElemnt} node
 * @param {function} handleClose
 */
function AnimationWrapper(props) {
  const { active } = props
  return (
    <Transition in={active} timeout={400}>
      {state => {
        let klassName = ""
        switch (state) {
          case "entering":
            klassName = `${container}`
            break
          case "entered":
            klassName = `${container} active`
            break

          case "exiting":
            klassName = `${container}`
            break

          default:
            klassName = ""
            break
        }
        return state === "exited" ? null : (
          <PopOver klassName={klassName} {...props} />
        )
      }}
    </Transition>
  )
}

class PopOver extends Component {
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside)
    this.props.node.style.position = "sticky"
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside)
    this.props.node.style.position = "block"
  }

  handleClickOutside = ({ target }) => {
    const { handleClose, node } = this.props
    if (!node.contains(target)) handleClose()
  }

  render() {
    const { klassName, node, children } = this.props
    return <div className={klassName}>{children.map(elem => elem)}</div>
  }
}

export default AnimationWrapper
