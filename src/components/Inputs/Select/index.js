import React from "react"
import { container, select, labelKlass } from "./css"

/**
 * @prop {string} label
 * @prop {string[]} options
 * @prop {function} handleSelect
 * @prop {string} currentValue
 * @return {string} value
 */
function Select({ label, handleSelect, options, currentValue }) {
  const handleChange = ({ currentTarget: { value } }) => handleSelect(value)
  const activeClass = currentValue.length ? "notEmpty" : ""
  return (
    <div className={container}>
      <label className={`${labelKlass} ${activeClass}`}>{label}</label>
      <select value={currentValue} onChange={handleChange} className={select}>
        <option />
        {options.map((opt, key) => (
          <option value={opt} key={key}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
