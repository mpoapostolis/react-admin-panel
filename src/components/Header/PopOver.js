import React from "react"
import Menu from "@material-ui/core/Menu"
import { leftSide, avatar, rightSide, menuItem } from "./css"

function SimpleList(props) {
  const { role, name, logout, imgUrl } = props
  return (
    <div>
      <div className={menuItem}>
        <div className={leftSide}>
          <img alt=":)" className={avatar} src={imgUrl} />
        </div>
        <div className={rightSide}>
          <b>{role}</b>
          <div>{name}</div>
        </div>
      </div>
      <div onClick={logout} className={menuItem}>
        <div className={leftSide}>
          <img
            alt=":)"
            className={`${avatar} small`}
            src={"/images/logout.png"}
          />
        </div>
        <div className={rightSide}>Logout</div>
      </div>
    </div>
  )
}

function SimpleMenu(props) {
  const { handleClose, anchorEl } = props
  return (
    <Menu
      style={{ margin: 0 }}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}>
      <SimpleList {...props} />
    </Menu>
  )
}

export default SimpleMenu
