import React, { Component } from "react"

import {
  footFilterItems,
  footFiltersCont,
  offsetCont,
  offsetArrow,
  tableFilter,
  bottomFilters,
  containers,
  topFilters,
  displayClass,
  table,
  input,
  row,
  col,
  sortDisplayCont
} from "./css"

import Popover from "@material-ui/core//Popover"
import Checkbox from "@material-ui/core//Checkbox"
import Select from "../Select"

const selectFromRows = [1, 2, 3, 4, 5, 10, 15, 20, 25, 50, 100]
const sortBy = [
  { name: "Date: Oldest to newest", value: "ASC" },
  { name: "Date: Newest to oldest", value: "DESC" }
]

/**
 * @param {string} type
 * @param {function} renderer
 * @param {string} keyName
 * @param {Object} obj
 */
function Render({ type, renderer, keyName, obj }) {
  switch (type) {
    case "renderer":
      return renderer(obj)
    default:
      return keyName ? obj[keyName] : null
  }
}

/**
 * @prop {number} total
 * @prop {Object[]} tableConf
 * @prop {Object[]} data
 */
class Table extends Component {
  constructor(props) {
    super(props)
    const { tableConf = [] } = props
    const state = {
      popOver: null,
      showCol: new Array(tableConf.length).fill(true),
      tableConf
    }
    this.state = state
  }

  /************************ Toggle PopOver for various elems ***********************************/
  toogglePopOver = evt => {
    const { popOver } = this.state
    popOver
      ? this.setState({ popOver: null })
      : this.setState({ popOver: evt.target })
  }

  updateFilter = obj => {
    const { updateFilters } = this.props
    this.setState({ popOver: null })
    updateFilters(obj)
  }

  /************************************** Filter table col *************************************/
  toggleCol = evt => {
    const index = parseInt(evt.target.id.slice(-1), 10)
    const { showCol } = this.state
    showCol.splice(index, 1, !showCol[index])
    this.setState({ showCol })
  }

  changeOffset = ({ currentTarget }) => {
    const {
      updateFilters,
      total,
      filters: { offset, limit }
    } = this.props
    const direction = +currentTarget.getAttribute("offset")
    const maxPages = limit > total ? 1 : Math.ceil(total / limit)
    const currentPage = offset
    const newOffset = currentPage + direction
    const isValid = newOffset > -1 && newOffset < maxPages
    if (isValid) updateFilters({ offset: newOffset })
  }

  /*********************************Determines what popover will show**********************************/
  popOverContent = () => {
    const { type } = this.state.popOver.dataset
    const { showCol } = this.state
    switch (type) {
      case "displayCol":
        const { tableConf } = this.props
        const names = tableConf.map(({ name }) => name)
        return names.map((name, i) => (
          <div className={displayClass} key={i}>
            <Checkbox
              onChange={this.toggleCol}
              id={`${window.location.pathname}-check-box-${i}`}
              defaultChecked={showCol[i]}
            />
            {name}
          </div>
        ))
      default:
        break
    }
  }

  handleChangeLimit = ({ currentTarget }) => {
    const { updateFilters } = this.props
    const num = currentTarget.value
    updateFilters({ limit: num, offset: 0 })
  }

  handleChangeOrder = ({ currentTarget }) => {
    const { updateFilters } = this.props
    const value = currentTarget.value
    updateFilters({ sort: value })
  }

  handleSearch = ({ currentTarget }) => {
    const { updateFilters } = this.props
    updateFilters({ keyword: currentTarget.value })
  }

  setAvailableFilters = ({ currentTarget }) => {
    const { updateFilters, availableFiltersLabel } = this.props
    updateFilters({ [availableFiltersLabel]: currentTarget.value })
  }

  render() {
    const {
      data = [],
      total,
      filters,
      availableFilters = [],
      availableFiltersLabel = "Status"
    } = this.props
    const { popOver, showCol } = this.state
    const { limit } = filters
    const currentPage = +filters.offset
    const maxPages = limit > total ? 1 : Math.ceil(total / limit)
    const tableConf = this.props.tableConf.filter((_, i) => showCol[i])
    const sortMsg =
      filters.sort === "DESC"
        ? "Date: Newest to oldest"
        : filters.sort === "ASC"
          ? "Date: Oldest to newest"
          : ""
    return (
      <div className={containers}>
        <div className={topFilters}>
          <div className={`${tableFilter} no-margin`}>
            {availableFiltersLabel}
            :&nbsp;
            <Select onChange={this.setAvailableFilters} defaultValue={sortMsg}>
              <option value="" />
              {availableFilters.map((value, key) => (
                <option value={value} key={key}>
                  {value}
                </option>
              ))}
            </Select>
          </div>
          <input
            className={input}
            onChange={this.handleSearch}
            placeholder="🔎 Search..."
          />
        </div>

        <div className={bottomFilters}>
          <div>{total} entries</div>
          <div className={sortDisplayCont}>
            <div className={tableFilter}>
              Sort By
              <Select onChange={this.handleChangeOrder} defaultValue={sortMsg}>
                <option value="" />
                {sortBy.map(({ name, value }, key) => (
                  <option value={value} key={key}>
                    {name}
                  </option>
                ))}
              </Select>
            </div>
            <div
              onClick={this.toogglePopOver}
              data-type="displayCol"
              className={tableFilter}>
              Display ▾
            </div>
          </div>
        </div>

        <table className={table}>
          <thead className={row}>
            <tr>
              {tableConf.map(({ name }, key) => (
                <th className={col} key={key}>
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((obj, rowKey) => (
              <tr key={rowKey} className={row}>
                {tableConf.map((conf, colKey) => (
                  <td key={colKey} className={col}>
                    <Render {...conf} obj={obj} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className={footFiltersCont}>
          <div className={footFilterItems}>
            <div className={tableFilter}>
              Row per page
              <Select onChange={this.handleChangeLimit} defaultValue={+limit}>
                {selectFromRows.map((value, key) => (
                  <option key={key}> {value}</option>
                ))}
              </Select>
            </div>
            <div className={offsetCont}>
              <div
                offset={-1}
                onClick={this.changeOffset}
                className={`${offsetArrow} ${
                  currentPage === 0 ? "disable" : ""
                }`}>
                ❮
              </div>
              <div>
                Page <b>{currentPage + 1}</b> of <b>{maxPages}</b>
              </div>
              <div
                offset={1}
                onClick={this.changeOffset}
                className={`${offsetArrow} ${
                  currentPage + 1 === maxPages ? "disable" : ""
                }`}>
                ❯
              </div>
            </div>
          </div>
        </div>
        <Popover
          open={Boolean(popOver)}
          anchorEl={popOver}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          onClose={this.toogglePopOver}>
          {popOver && this.popOverContent()}
        </Popover>
      </div>
    )
  }
}

export default Table
