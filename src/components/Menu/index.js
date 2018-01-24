import React, {Component} from 'react';
import * as styles from './css';
import {menuItems} from '../../utils';
import {WithPermissionWrapper} from '../PermissionWrapper/WithPermission';
import keys from 'ramda/src/keys';
import Collapse from '../Collapse';

class Menu extends Component {
  isActive = pathArr => {
    const urlPath = window.location.pathname;
    const isHome = urlPath === '/';
    if (pathArr.includes('/')) return isHome ? 'active' : '';
    else return pathArr.find(e => urlPath.match(e)) ? 'active' : '';
  };

  renMenuItems = (section, outKey) => {
    const {authorities} = this.props.auth;
    const {push} = this.props.history;
    const {menuItemClass, sectionClass} = styles;
    const itemArr = menuItems[section].filter(e =>
      authorities.includes(e.permissions)
    );

    return section === 'undefined' ? (
      <div key={outKey} className={sectionClass}>
        {itemArr.map((item, inKey) => (
          <WithPermissionWrapper key={inKey} permissions={[item.permissions]}>
            <div
              onClick={() => push(`/${item.path[0]}`.replace(/\/\//, '/'))}
              className={`${menuItemClass} ${this.isActive(item.path)}`}>
              {item.group}
            </div>
          </WithPermissionWrapper>
        ))}
      </div>
    ) : (
      <Collapse key={outKey} heightOfRow={30} label={section}>
        {itemArr.map((item, inKey) => (
          <WithPermissionWrapper key={inKey} permissions={[item.permissions]}>
            <div
              key={inKey}
              onClick={() => push(`/${item.path[0]}`.replace(/\/\//, '/'))}
              className={`${menuItemClass} ${this.isActive(item.path)}`}>
              {item.group}
            </div>
          </WithPermissionWrapper>
        ))}
      </Collapse>
    );
  };

  render() {
    const sections = keys(menuItems);
    const {container, logo} = styles;
    return (
      <div className={container}>
        <img
          className={logo}
          onClick={this.goHome}
          src="/images/logo.png"
          alt="logo"
        />
        {sections.map((section, key) => this.renMenuItems(section, key))}
      </div>
    );
  }
}

export default Menu;
