import React, { Component } from "react"
import { menuItems } from "../../utils"
import keys from "ramda/src/keys"
import { dl, dd, logo, imageCont, avatarInfo, avatar } from "./css"

class Menu extends Component {
  isActive = pathArr => {
    const urlPath = window.location.pathname
    const isHome = urlPath === "/"
    if (pathArr.includes("/")) return isHome ? "active" : ""
    else return pathArr.find(e => urlPath.match(e)) ? "active" : ""
  }

  handlePath = ({ currentTarget }) => {
    const { push } = this.props
    // normalize URL
    const path = currentTarget.getAttribute("path").replace(/\/\//g, "/")
    push(path)
  }

  renMenuItems = (section, outKey) => {
    const { authorities } = this.props
    const itemArr = menuItems[section].filter(e =>
      authorities.includes(e.permissions)
    )
    const renSection = itemArr.length
    return renSection ? (
      <dl key={outKey} className={dl}>
        <dt>{section.replace(/undefined/g, "")}</dt>
        {itemArr.map((obj, key) => (
          <dd
            key={key}
            path={`/${obj.path[0]}`}
            onClick={this.handlePath}
            className={`${dd} ${this.isActive(obj.path)}`}>
            {obj.name.replace(/read/gi, "")}
          </dd>
        ))}
      </dl>
    ) : (
      <div />
    )
  }

  render() {
    const sections = keys(menuItems)
    return (
      <div>
        <img
          className={logo}
          onClick={this.goHome}
          src="/images/logo.png"
          alt="logo"
        />
        <div className={imageCont}>
          <img className={avatar} src="/images/img_avatar.png" alt=":)" />
          <div className={avatarInfo}>
            Admin <i>▼</i>
          </div>
        </div>
        {sections.map((section, key) => this.renMenuItems(section, key))}
      </div>
    )
  }
}

export default Menu
