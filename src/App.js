import React from "react"
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { container } from "./css"
import actions from "./redux/actions"
import Login from "./routes/Login"
import Layout from "./layout"

function App(props) {
  const {
    auth: { access_token }
  } = props

  return (
    <div className={container}>
      <BrowserRouter>
        <Switch>
          <Route
            path="/login"
            render={routeProps =>
              access_token ? (
                <Redirect to={{ pathname: "/" }} />
              ) : (
                <Login {...routeProps} />
              )
            }
          />
          <Route
            path="/"
            render={routeProps =>
              !access_token ? (
                <Redirect to={{ pathname: "/login" }} />
              ) : (
                <Layout {...routeProps} />
              )
            }
          />
        </Switch>
      </BrowserRouter>
    </div>
  )
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
