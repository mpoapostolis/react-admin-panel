import React, {Component} from 'react';
import * as styles from './css';
import {getMsg} from '../../msgs';

class Collapse extends Component {
  state = {
    open: true,
  };

  componentWillReceiveProps(nextProps) {}

  collapse = () => this.setState({open: !this.state.open});

  render() {
    const {container, collapseItem, arrow, openClass} = styles;
    const {label, rootClass, labelClass, heightOfRow, arrowClass} = this.props;
    const {open} = this.state;
    const direction = open ? '▲' : '▼';
    const howMany = this.props.children.length;
    return howMany ? (
      <div
        className={`${container}  ${
          open ? openClass(howMany, heightOfRow) : ''
        } ${rootClass}`}>
        <div
          onClick={this.collapse}
          className={`${collapseItem} ${open && !rootClass ? '' : 'closed'}`}>
          <span className={labelClass}>{getMsg('en', label)}</span>
          {<span className={`${arrow} ${arrowClass}`}>{direction}</span>}
        </div>
        {this.props.children}
      </div>
    ) : (
      <div />
    );
  }
}

export default Collapse;
