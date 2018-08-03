import React, { Component } from "react"
import * as styles from "./css"
import actions from "../../redux/actions"
import SimpleTextField from "../../components/Inputs/SimpleTextField"
import Button from "@material-ui/core/Button"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

const btnStyle = {
  backgroundColor: "#008bcc",
  padding: "10px",
  fontWeight: "600"
}

class Login extends Component {
  state = { username: "", password: "" }

  handleChange = obj => this.setState(obj)

  handleSubmit = () => {
    this.props.login(this.state)
  }

  handleEnter = ({ key }) => (key === "Enter" ? this.handleSubmit() : void 0)

  render() {
    const {
      container,
      boxContainer,
      logo,
      item,
      input,
      formClass,
      labelClass,
      errorStyle
    } = styles
    const { error } = this.props.ui

    const schema = [
      { key: "username", label: "Username" },
      {
        key: "password",
        label: "Password",
        type: "password"
      }
    ]
    return (
      <div className={container}>
        <div className={boxContainer}>
          <img className={logo} src="/images/logo.png" alt="logo" />
          <form className={formClass} noValidate autoComplete="off">
            {schema.map((obj, key) => (
              <div key={key} className={item}>
                <SimpleTextField
                  type={obj.type}
                  handleChange={value =>
                    this.handleChange({ [obj.key]: value })
                  }
                  label={obj.label}
                  labelClass={labelClass}
                  extraClass={input}
                />
              </div>
            ))}
            <Button
              onClick={this.handleSubmit}
              color="primary"
              style={btnStyle}
              variant="raised"
              component="span">
              Login
            </Button>
          </form>
          {error && (
            <p className={errorStyle}>
              Please check your credentials and try again.
            </p>
          )}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ui: state.ui
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      login: actions.login
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
