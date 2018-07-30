import React, { Component } from "react"
import Filters from "./components/Filters"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import {
  container,
  headFilterCont,
} from "./css"

class DashBoard extends Component {
  state = { type: "daily" }

  handleType = ({ currentTarget }) => {
    const type = currentTarget.getAttribute("type")
    this.setState({ type })
  }

  render() {
    const { name } = this.props
    const { type } = this.state
    return (
      <div className={container}>
        <div className={headFilterCont}>
          <Filters name={name} activeType={type} handleType={this.handleType} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    name: state.auth.name
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard)
