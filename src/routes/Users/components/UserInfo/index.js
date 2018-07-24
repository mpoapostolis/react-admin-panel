import { connect } from "react-redux"
import React, { Component } from "react"
import { bindActionCreators } from "redux"
import actions from "../../../../redux/actions"

function UsersTable(props) {
  return <h1>UserInfo</h1>
}

function mapStateToProps(state) {
  return {
    ui: state.ui,
    filters: state.filters,
    customers: state.customers
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateFilters: actions.updateFilters,
      clearFilters: actions.clearFilters
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersTable)
