import React, { Component } from 'react';
import pluck from 'ramda/src/pluck';
import format from 'date-fns/format';
import Popover from 'material-ui/Popover';
import Checkbox from 'material-ui/Checkbox';
import SpinnerHOC from '../SpinnerHOC';
import * as styles from './css';

/*****************************************************************************************************************************************
 * @param {object[]} tableConf
 * @param {object[]} data
 * @param {function} updateFilters
 * @param {object}   filters
 ****************************************************************************************************************************************/

/* 
tableConf[0] { 
  name:string, 
  key:string, 
  type:string,
  renderer? = fn: any => <Elem>{any}</Elem> | <Elem {...any}/> 
}
*/

class Table extends Component {
  constructor(props) {
    super(props);
    const { tableConf } = props;
    const state = {
      showCol: new Array(tableConf.length).fill(true),
      tableConf,
    };
    this.state = state;
  }

  componentWillUnmount() {
    this.props.clearFilters();
  }

  /********************************* Determines what popOver will show  **********************************/
  popOverContent = () => {
    const { type } = this.state.popOver.dataset;
    const { menuItem, displayClass } = styles;
    const { showCol } = this.state;
    switch (type) {
      case 'displayCol':
        const { tableConf } = this.props;
        const names = pluck('name', tableConf);
        return names.map((name, i) => (
          <div className={displayClass} key={i}>
            <Checkbox
              onChange={this.toggleCol}
              id={`${window.location.pathname}-check-box-${i}`}
              defaultChecked={showCol[i]}
            />
            {name}
          </div>
        ));

      case 'order':
        return (
          <div>
            <div
              className={menuItem}
              onClick={() => this.updateFilter({ sort: 'DESC' })}>
              Date: Newest to oldest
            </div>
            <div
              className={menuItem}
              onClick={() => this.updateFilter({ sort: 'ASC' })}>
              Date: Oldest to newest
            </div>
          </div>
        );

      case 'limit':
        return (
          <div>
            {[5, 10, 15, 20, 25, 50, 100].map((num, key) => (
              <div
                key={key}
                className={menuItem}
                onClick={() => this.updateFilter({ limit: num, offset: 0 })}>
                {num}
              </div>
            ))}
          </div>
        );

      default:
        break;
    }
  };
  /********************************* render(x,y) Table Item ************************************/
  renderXYItem = (item, index = 0) => {
    const { exportClass } = styles;
    const { showCol } = this.state;
    const tableConf = this.props.tableConf.filter((e, i) => showCol[i]);
    const itemInfo = tableConf[index];
    const type = itemInfo.type;
    switch (type) {
      case 'text':
        return item;
      case 'date':
        // if Date = 1122334455 then is total row
        if (item === 1122334455) return 'Total';
        else return format(item, 'MMM Do YYYY');
      case 'renderer':
        return itemInfo.renderer(item);

      case 'file':
        return <img className={exportClass} src="/images/export.svg" alt="" />;
      default:
        return item;
    }
  };

  /************************ Toggle PopOver for various elems ***********************************/
  toogglePopOver = (evt) => {
    const { popOver } = this.state;
    popOver
      ? this.setState({ popOver: null })
      : this.setState({ popOver: evt.target });
  };

  /*********************** Close popOver and update Filters ************************************/
  updateFilter = (obj) => {
    const { updateFilters } = this.props;
    this.setState({ popOver: null });
    updateFilters(obj);
  };

  /************************************** Filter table col *************************************/
  toggleCol = (evt) => {
    const index = parseInt(evt.target.id.slice(-1), 10);
    const { showCol } = this.state;
    showCol.splice(index, 1, !showCol[index]);
    this.setState({ showCol });
  };

  changeOffset = (direction) => {
    const { updateFilters, total } = this.props;
    const { offset, limit } = this.props.filters;
    const maxPages = limit > total ? 1 : Math.ceil(total / limit);
    const currentPage = offset / limit;
    const newOffset = currentPage + direction;
    const isValid = newOffset > -1 && newOffset < maxPages;
    if (isValid) updateFilters({ offset: newOffset * limit });
  };

  render() {
    const { data, loading, total = 0 } = this.props;
    const { sort, limit, offset } = this.props.filters;
    const { popOver, showCol } = this.state;
    const tableConf = this.props.tableConf.filter((e, i) => showCol[i]);
    const names = pluck('name', tableConf);
    const keys = pluck('key', tableConf);
    const currentPage = offset / limit;
    const maxPages = limit > total ? 1 : Math.ceil(total / limit);
    const orderText =
      sort && sort.match(/ASC/g)
        ? `Date Oldest to Newest`
        : `Date Newest to Oldest`;
    const {
      container,
      rowClass,
      infos,
      columnClass,
      preHeader,
      tableFilter,
      footFilterItems,
      offsetArrow,
      upperFilters,
      offsetCont,
      footFiltersCont,
    } = styles;

    return (
      <div className={container}>
        {/********************* Filters ********************************************************/}
        <div className={preHeader}>
          <div className={infos}>
            <label>Total {total} Entries</label>
          </div>
          <div className={upperFilters}>
            <div
              className={tableFilter}
              data-type="order"
              onClick={this.toogglePopOver}>
              Sort by: {orderText} ▾
            </div>
            <div
              onClick={this.toogglePopOver}
              data-type="displayCol"
              className={tableFilter}>
              Display ▾
            </div>
          </div>
        </div>

        {/********************* Tabel Header ***************************************************/}
        <div className={`${rowClass} header`}>
          {names.map((objKey, columnKey) => (
            <div
              onClick={this.sortByField}
              data-keyname={keys[columnKey]}
              className={columnClass}
              key={columnKey}>
              {objKey}
            </div>
          ))}
        </div>

        {/********************* Table Body *****************************************************/}
        <SpinnerHOC loading={loading}>
          {data.map((obj, rowKey) => (
            <div key={rowKey} className={rowClass}>
              {keys.map((key, columnKey) => (
                <div className={columnClass} key={columnKey}>
                  {this.renderXYItem(obj[key], columnKey)}
                </div>
              ))}
            </div>
          ))}
        </SpinnerHOC>
        {/********************* Foot Filters **************************************************/}
        <div className={footFiltersCont}>
          <div className={footFilterItems}>
            <div
              className={tableFilter}
              onClick={this.toogglePopOver}
              data-type="limit">
              Row per page {limit} ▾
            </div>
            <div className={offsetCont}>
              <div
                onClick={() => this.changeOffset(-1)}
                className={`${offsetArrow} ${currentPage === 0
                  ? 'disable'
                  : ''}`}>
                ❮
              </div>
              <div>
                Page <b>{currentPage + 1}</b> of <b>{maxPages}</b>
              </div>
              <div
                onClick={() => this.changeOffset(1)}
                className={`${offsetArrow} ${currentPage + 1 === maxPages
                  ? 'disable'
                  : ''}`}>
                ❯
              </div>
            </div>
          </div>
        </div>

        {/********************* Pop over ******************************************************/}
        <Popover
          open={Boolean(popOver)}
          anchorEl={popOver}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          onClose={this.toogglePopOver}>
          {popOver && this.popOverContent()}
        </Popover>
      </div>
    );
  }
}

export default Table;
