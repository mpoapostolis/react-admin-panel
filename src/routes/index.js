import React from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import Users from "./Users"
import Reports from "./Reports"
import Dashboard from "./Dashboard"
import Customers from "./Customers"
import Error404 from "../components/Error404"
import { menuItems } from "../utils"

const mapPathToComponents = path => {
  switch (path) {
    case "/":
      return Dashboard

    case "users":
      return Users

    case "reports":
      return Reports

    case "customers":
      return Customers

    default:
      return Error404
  }
}

const routes = []

for (const key in menuItems) {
  if (menuItems.hasOwnProperty(key)) {
    const element = menuItems[key]
    routes.push(...element)
  }
}

function Routes() {
  return routes.map((obj, key) => {
    const Component = mapPathToComponents(obj.path[0])
    return (
      <Route
        key={key}
        path={`/${obj.path[0]}`}
        render={routeProps => (
          <Component {...routeProps} permissions={[obj.permissions]} />
        )}
      />
    )
  })
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Routes)
