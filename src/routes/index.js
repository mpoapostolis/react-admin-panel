import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import Login from './Login';
import AuthWrapper from '../components/AuthWrapper';
import Error404 from '../components/Error404';
import { menuItems } from '../utils';

const mapPathToComponents = (path) => {
  switch (path) {
    case '/':
      return Dashboard;

    default:
      return Error404;
  }
};

const routes = [];

for (const key in menuItems) {
  if (menuItems.hasOwnProperty(key)) {
    const element = menuItems[key];
    routes.push(...element);
  }
}

const Routes = (props) => {
  const { access_token } = props.auth;

  return (
    <Router>
      <Switch>
        <Route
          path="/login"
          render={(routeProps) =>
            access_token ? <Redirect to={{ pathname: '/' }} /> : <Login />}
        />

        {routes.map((obj, key) => (
          <Route
            key={key}
            exact
            path={`/${obj.path[0]}`}
            render={(routeProps) => {
              return (
                <AuthWrapper
                  {...routeProps}
                  permissions={[obj.permissions]}
                  component={mapPathToComponents(obj.path[0])}
                />
              );
            }}
          />
        ))}
      </Switch>
    </Router>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Routes);
