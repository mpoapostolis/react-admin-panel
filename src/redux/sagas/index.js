import { all } from "redux-saga/effects"
import auth from "./auth"
import network from "./network"
import reports from "./reports"
import customers from "./customers"
import users from "./users"

const watchers = [auth, network, reports, customers, users]

const WATCHERS = watchers.map(watcher => watcher())

export default function* rootSaga() {
  yield all(WATCHERS)
}
