import { select, takeLatest, put } from "redux-saga/effects"
import * as names from "../actions/names"
import actions from "../actions"
import { apiCall } from "./network"

const URL = "/api/users"
const getAuth = state => state.auth

function* getUsers() {
  const { access_token } = yield select(getAuth)
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Bearer ${access_token}`
  }
  const res = yield apiCall(URL, "GET", headers)
  const data = yield res.json()
  yield put(actions.updateUsers(data))
}

function* userWatcher() {
  yield takeLatest(names.GET_USERS, getUsers)
}

export default userWatcher
