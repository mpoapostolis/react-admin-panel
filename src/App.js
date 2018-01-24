import React, {Component} from 'react';
import Router from './routes';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from './redux/actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    const {
      auth: {tokenExp, refrershTokenExp},
      logout,
      getRefreshToken,
    } = this.props;
    const now = Date.now();
    if (refrershTokenExp < now) logout();
    if (tokenExp < now) getRefreshToken();
    else if (tokenExp > now) setTimeout(getRefreshToken, tokenExp - now);
  }

  render() {
    return (
      <main className="App">
        <Router {...this.props} />
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {logout: actions.logout, getRefreshToken: actions.getRefreshToken},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
