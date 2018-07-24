import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import UserInfo from "./components/UserInfo"

class Users extends Component {
  render() {
    return (
      <Switch>
        <Route
          path={`/users:id`}
          render={routerProps => <UserInfo {...routerProps} />}
        />
        <Route path={`/users`} render={routerProps => <h1>Users</h1>} />
      </Switch>
    )
  }
}

export default Users
