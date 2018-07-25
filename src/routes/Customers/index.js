import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"

class Customers extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route
            path="/customers/:id"
            render={routerProps => <h1>Test:id</h1>}
          />
          <Route
            exact
            path="/customers"
            render={routerProps => <h1>Test</h1>}
          />
        </Switch>
      </main>
    )
  }
}

export default Customers
