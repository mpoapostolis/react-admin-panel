import React, {Component} from 'react';
import * as styles from './css';
import actions from '../../redux/actions';
import TextField from '../../components/TextField';
import Button from 'material-ui/Button';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const btnStyle = {
  backgroundColor: '#008bcc',
  padding: '10px',
  fontWeight: '600',
};

class Login extends Component {
  componentWillUnmount() {
    this.props.clearFormData();
  }

  handleSubmit = () => {
    this.props.login();
  };

  render() {
    const {
      container,
      boxContainer,
      logo,
      item,
      input,
      formClass,
      labelClass,
      errorStyle,
    } = styles;
    const {setFormData} = this.props;
    const {error} = this.props.ui;

    const schema = [
      {field: 'username', label: 'Username'},
      {
        field: 'password',
        label: 'Password',
        type: 'password',
      },
    ];
    return (
      <div className={container}>
        <div className={boxContainer}>
          <img className={logo} src="/images/logo.png" alt="logo" />
          <form className={formClass} noValidate autoComplete="off">
            {schema.map((obj, key) => (
              <div key={key} className={item}>
                <TextField
                  type={obj.type}
                  pressEnter={obj.pressEnter}
                  setFormData={setFormData}
                  field={obj.field}
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
    );
  }
}

function mapStateToProps(state) {
  return {
    ui: state.ui,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      clearFormData: actions.clearFormData,
      setFormData: actions.setFormData,
      login: actions.login,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
