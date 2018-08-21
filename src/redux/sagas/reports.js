import actions from "../actions"
import { put, select } from "redux-saga/effects"
import { takeLatest } from "redux-saga/effects"
import * as names from "../actions/names"

const WEEKLY_URL = `/api/report/weeklyReport`
const DAILY_URL = "api/report/dailyReports"
const getToken = state => state.auth
const getFilters = state => state.filters

/******************************************************************************/
/** start fetch weekly reports  **/
/******************************************************************************/
function* getWeeklyReports() {
}

function* getDailyReports() {
}

function* reportsWatcher(action) {
  yield takeLatest(names.GET_WEEKLY_REPORTS, getWeeklyReports)
  yield takeLatest(names.GET_DAILY_REPORTS, getDailyReports)
  yield takeLatest(names.UPDATE_FILTERS, getDailyReports)
}

export default reportsWatcher
