import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import actions from "../../redux/actions"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Table from "../../components/Table"
import StatusOval from "../../components/StatusOval"
import ActionButton from "../../components/ActionButton"
import Layout from "./layout"
import { select } from "./css"

class Customers extends Component {
  constructor(props) {
    super(props)
    this.tableConf = [
      {
        name: "Customer",
        type: "renderer",
        renderer: obj => {
          return (
            <div>
              {obj.id}
              <br />
              {obj.first_name} {obj.last_name}
            </div>
          )
        }
      },
      {
        name: "Status",
        type: "renderer",
        renderer: obj => <StatusOval>{obj.status}</StatusOval>
      },
      {
        name: "Active Segments",
        type: "renderer",
        renderer: obj => (
          <div>
            {obj.first_name}, {obj.last_name}, {obj.ip_address}
          </div>
        )
      },

      {
        name: "Active Campains",
        type: "renderer",
        renderer: obj => <div>"asdakljsdas",</div>
      },
      {
        name: "Actions",
        type: "renderer",
        renderer: obj => (
          <ActionButton
            onChange={e => this.handleChange(obj)(e)}
            value="Actions">
            <option value="">Actions</option>
            <option value="details">informations</option>
          </ActionButton>
        )
      }
    ]
  }

  handleChange = obj => ({ currentTarget }) => {
    const {
      history: { push },
      setCurrentCustomer
    } = this.props
    const { value } = currentTarget
    switch (value) {
      case "details":
        setCurrentCustomer(obj)
        push(`/customers/${obj.first_name}`)
        break
      default:
        void 0
        break
    }
  }

  componentDidMount() {
    this.props.getCustomers()
    const path = window.location.pathname.split("/")
    const id = path.length > 2 ? path.pop() : null
    if (id) this.props.getCurrentCustomer(id)
  }

  render() {
    const {
      customers: { data, total },
      filters,
      updateFilters
    } = this.props

    return (
      <Switch>
        <Route
          path="/customers/:id"
          render={routerProps => <Layout {...routerProps} {...this.props} />}
        />
        <Route
          exact
          path="/customers"
          render={_ => (
            <Table
              updateFilters={updateFilters}
              data={data}
              availableFiltersLabel="status"
              availableFilters={["ACTIVE", "OPT_OUT"]}
              total={total}
              filters={filters}
              tableConf={this.tableConf}
            />
          )}
        />
      </Switch>
    )
  }
}

function mapStateToProps(state) {
  return {
    customers: state.customers,
    currentCustomer: state.customers.currentCustomer,
    filters: state.filters
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateFilters: actions.updateFilters,
      getCustomers: actions.getCustomers,
      getCurrentCustomer: actions.getCurrentCustomer,
      setCurrentCustomer: actions.setCurrentCustomer,
      clearCustomers: actions.clearCustomers
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers)
