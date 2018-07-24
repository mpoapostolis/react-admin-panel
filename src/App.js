import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import actions from "./redux/actions"
import "./App.css"
import Login from "./routes/Login"
import Layout from "./layout"

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/login"
              render={routeProps => <Login {...routeProps} />}
            />
            <Route path="/" render={routeProps => <Layout {...routeProps} />} />
          </Switch>
        </BrowserRouter>
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
)(App)
