import React, {Component} from 'react';
import * as styles from './css';
import {connect} from 'react-redux';
import actions from '../../redux/actions';
import {bindActionCreators} from 'redux';
import Popover from 'material-ui/Popover';

class Header extends Component {
  state = {
    open: false,
    anchorOriginVertical: 'bottom',
    anchorOriginHorizontal: 'left',
    transformOriginVertical: 'top',
    transformOriginHorizontal: 'left',
    anchorReference: 'anchorEl',
  };

  handleClick = () =>
    this.setState({
      open: true,
    });

  handleClose = () =>
    this.setState({
      open: false,
    });

  setRef = node => {
    this.anchorEl = node;
  };

  goHome = () => this.props.history.push('/');

  handleLogout = () => this.props.logout();

  render() {
    const {container, infos, avatar, menuItem, leftSide, rightSide} = styles;
    const {
      open,
      anchorOriginVertical,
      anchorOriginHorizontal,
      transformOriginVertical,
      transformOriginHorizontal,
      positionTop,
      positionLeft,
      anchorReference,
    } = this.state;

    const {role, name} = this.props.auth;
    return (
      <div className={container}>
        <div className={avatar}>{name[0].toUpperCase()}</div>
        <div className={infos}>
          <b ref={this.setRef} onClick={this.handleClick}>
            {name} ⌄
          </b>
          <div>{role}</div>
        </div>

        <Popover
          open={open}
          anchorEl={this.anchorEl}
          anchorReference={anchorReference}
          anchorPosition={{top: positionTop, left: positionLeft}}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: anchorOriginVertical,
            horizontal: anchorOriginHorizontal,
          }}
          transformOrigin={{
            vertical: transformOriginVertical,
            horizontal: transformOriginHorizontal,
          }}>
          <div onClick={this.goHome} className={menuItem}>
            <div className={leftSide}>
              <img
                alt=":)"
                className={`${avatar} small`}
                src={'/images/account.png'}
              />
            </div>
            <div className={rightSide}>
              <b>{role}</b>
              <div>{name}</div>
            </div>
          </div>
          <div className={menuItem} onClick={this.handleLogout}>
            <div className={leftSide}>
              <img
                alt=":)"
                className={`${avatar} small`}
                src={'/images/logout.png'}
              />
            </div>
            <div className={rightSide}>Logout</div>
          </div>
        </Popover>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
