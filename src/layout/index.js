import React, { Component } from "react"
import { layout, header, main, sidebar } from "./css"
import Router from "../routes"
import actions from "../redux/actions"
import Header from "../components/Header"
import Menu from "../components/Menu"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Path from "../components/Path"
import Button from "../components/Button"

class Layout extends Component {
  state = {
    active: true
  }

  setMenuActive = () => {
    this.setState({ active: !this.state.active })
  }

  render() {
    const isActive = this.state.active ? "active" : ""
    const { auth, history } = this.props
    return (
      <div className={`${layout}  ${isActive}`}>
        <div className={header}>
          <Header toggleMenu={this.setMenuActive} />
        </div>
        <aside className={`${sidebar} ${isActive}`}>
          <Menu {...auth} {...history} />
        </aside>

        <main className={main}>
          <Path {...this.props} />
          <Button>yo</Button>
          <Router {...history} />
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { logout: actions.logout, getRefreshToken: actions.getRefreshToken },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
