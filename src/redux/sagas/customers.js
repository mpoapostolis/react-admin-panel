import { select, takeLatest, put } from "redux-saga/effects"
import * as names from "../actions/names"
import actions from "../actions"
import { apiCall } from "./network"
import { makeQueries } from "./utils"

const URL = "/api/customers"
const getAuth = state => state.auth
const getFilters = state => state.filters

function* getCurrentCustomer({ payload }) {
  const { access_token } = yield select(getAuth)
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Bearer ${access_token}`
  }
  const url = `${URL}/${payload}`
  const res = yield apiCall(url, "GET", headers)
  const data = yield res.json()
  yield put(actions.setCurrentCustomer(data))
}

function* getCustomers() {
  const { access_token } = yield select(getAuth)
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Bearer ${access_token}`
  }
  const filters = yield select(getFilters)
  const queries = makeQueries(filters, ["offset", "limit", "keyword"])
  const url = URL + queries

  const res = yield apiCall(url, "GET", headers)
  const data = yield res.json()
  yield put(actions.updateCustomers(data))
}

function* getCustomersWithFilters() {
  const { access_token } = yield select(getAuth)
  const filters = yield select(getFilters)
  const queries = makeQueries(filters, ["offset", "limit", "keyword"])
  const url = URL + queries
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Bearer ${access_token}`
  }
  const res = yield apiCall(url, "GET", headers)
  const data = yield res.json()
  yield put(actions.updateCustomers(data))
}

function* customerWatcher() {
  yield takeLatest(names.GET_CUSTOMERS, getCustomers)
  yield takeLatest(names.GET_CURRENT_CUSTOMER, getCurrentCustomer)
  yield takeLatest(names.UPDATE_FILTERS, getCustomersWithFilters)
}

export default customerWatcher
