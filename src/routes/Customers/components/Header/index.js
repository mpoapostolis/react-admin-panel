import React from "react"
import PropTypes from "prop-types"
import { container, name, actionButton } from "./css"
import StatusRect from "../../../../components/StatusRect"
import ActionButton from "../../../../components/ActionButton"

function Header(props) {
  const {
    currentCustomer: { first_name }
  } = props
  return (
    <div className={container}>
      <div className={name}>
        Customer:&nbsp; {first_name}
        <StatusRect>Active</StatusRect>
      </div>
      <ActionButton
        onChange={({ currentTarget }) => console.log(currentTarget.value)}
        extraClass={actionButton}
        value="Actions">
        <option value="">Actions</option>
        <option value="delete">Delete</option>
      </ActionButton>
    </div>
  )
}

Header.propTypes = {}

export default Header
