import React, {Component} from 'react';
import Button from 'material-ui/Button';
import * as styles from './css';

class Tabs extends Component {
  constructor() {
    super();
    const path = window.location.pathname.replace(/\//, '');
    const state = {
      active: path,
    };
    this.state = state;
  }

  activateTab = ({currentTarget}) => {
    const {setView, tabsArr, history: {push}} = this.props;
    const textContent = currentTarget.textContent;
    const find = tabsArr.find(({name}) => name === textContent);
    const active = find.activeOn;
    this.setState({active});
    setView(active);
    push(active);
  };

  isActive = tab => {
    const {active} = this.state;
    return tab === active ? 'active' : '';
  };

  render() {
    const {tabsArr = [], extraClass} = this.props;
    const {tabs, tabBtn, tabItem, tabsCont} = styles;

    return (
      <div className={tabsCont}>
        <div className={`${tabs} ${extraClass}`}>
          {tabsArr.map((obj, key) => (
            <div
              onClick={this.activateTab}
              className={`${tabItem} ${this.isActive(obj.activeOn)}`}>
              <Button className={tabBtn}>{obj.name}</Button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Tabs;
