import React, { Component } from "react"
import * as styles from "./css"
import PropTypes from "prop-types"

/**
 * @prop {func} handleChange
 * @prop {func} validator
 * @prop {string} errmsg
 * @prop {string} type
 * @prop {string} label
 * @prop {string} extraClass
 * @prop {string} labelClass
 * @returns {string} value
 */
class SimpleTextField extends Component {
  static propTypes = {
    handleChange: PropTypes.func,
    validator: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    errmsg: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    extraClass: PropTypes.string,
    labelClass: PropTypes.string
  }

  state = {
    errorClass: "",
    value: ""
  }

  componentDidMount() {
    const { type } = this.props
    if (type === "password") this.setState({ isHide: true })
    this.setState({ value: this.props.defaultValue || "" })
  }

  /**
   * @prop {InputElement} input
   */

  isValid = ({ currentTarget }) => {
    const { handleChange, validator } = this.props
    let isValid
    const value = currentTarget.value
    switch (validator) {
      case "email":
        const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        isValid = Boolean(value.match(pattern))
        break

      case "no-empty":
        isValid = value.length > 0
        break

      default:
        isValid = true
        break
    }
    if (!isValid) return this.setState({ errorClass: "error" })
    else {
      this.setState({ errorClass: "" })
      handleChange(value)
    }
  }

  /**
   * @prop {InputElement} input
   */
  handleChange = ({ currentTarget }) => {
    const { value } = currentTarget
    const { handleChange } = this.props
    this.setState(() => {
      handleChange(value)
      return { value }
    })
  }

  render() {
    const {
      errmsg,
      type,
      label,
      extraClass,
      labelClass,
      currentValue
    } = this.props

    const { inputCont, input, hideIcon } = styles
    const { errorClass, value } = this.state
    const labelExtraClass = value ? "notEmpty" : ""
    const { isHide } = this.state
    const svgSrc = isHide ? "open" : "closed"
    const inputType =
      type === "password" && isHide
        ? "password"
        : type === "password" && !isHide
          ? "text"
          : type
    return (
      <div className={inputCont}>
        <label
          className={`inputLabel ${labelExtraClass} ${errorClass} ${labelClass}`}>
          {errorClass ? errmsg : label}
        </label>
        <input
          value={currentValue}
          className={`${input} ${errorClass} ${extraClass}`}
          onChange={this.handleChange}
          type={inputType}
          onBlur={this.isValid}
        />
        {type === "password" ? (
          <img
            alt=":)"
            className={hideIcon}
            onClick={() => this.setState({ isHide: !this.state.isHide })}
            src={`/images/eye-${svgSrc}.svg`}
          />
        ) : null}
      </div>
    )
  }
}

export default SimpleTextField
