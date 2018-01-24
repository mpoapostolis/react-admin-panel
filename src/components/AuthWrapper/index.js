import React from 'react';
import {Redirect} from 'react-router-dom';
import * as styles from './css';
import Header from '../Header';
import Menu from '../Menu';
import {WithPermissionWrapper} from '../PermissionWrapper/WithPermission';
import {connect} from 'react-redux';
import Path from '../../components/Path';

/***************************************************************
 * if valid_access_token  can view route else redirect to login
 ***************************************************************/
export function AuthWrapper(props) {
  const {
    auth: {access_token},
    permissions,
  } = props;
  const Component = props.component;
  const pathname = !access_token ? '/login' : '/';
  const {container, header, sidebar, main} = styles;
  return access_token ? (
    <WithPermissionWrapper permissions={permissions}>
      <div className={container}>
        <div className={sidebar}>
          <Menu {...props} />
        </div>
        <header className={header}>
          <Header {...props} />
        </header>
        <main className={main}>
          <Path {...props} />
          <Component {...props} />
        </main>
      </div>
    </WithPermissionWrapper>
  ) : (
    <Redirect to={pathname} />
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    ui: state.ui,
  };
}

export default connect(mapStateToProps)(AuthWrapper);
