import actions from "../actions"
import { put } from "redux-saga/effects"
import { takeLatest } from "redux-saga/effects"
import * as names from "../actions/names"

const ERROR_STATUSES = [400, 401, 403, 404, 500]

/******************************************************************************/
/** start fetch set errors to false and loading to true  **/
/******************************************************************************/
function* startFetching() {
  yield put(actions.setErrorFalse())
  yield put(actions.setLoadingTrue())
}

/******************************************************************************/
/** end fetch loading to false  **/
/******************************************************************************/
function* endFetching() {
  yield put(actions.setLoadingFalse())
}

function* networkWatcher() {
  yield takeLatest(names.API_FETCH_START, startFetching)
  yield takeLatest(names.API_FETCH_END, endFetching)
}

/**
 * @param {string} END_POINT 
 * @param {string} METHOD 
 * @param {object} HEADERS 
 * @param {string} BODY 
 */
export function* apiCall(END_POINT, METHOD, HEADERS, BODY) {
  try {
    yield put(actions.fetchStart())
    const data = yield fetch(END_POINT, {
      method: METHOD,
      headers: HEADERS,
      body: BODY
    })
    yield put(actions.fetchEnd())
    if ("error" in data || ERROR_STATUSES.includes(data.status))
      throw new { ...data }()
    return data
  } catch (error) {
    console.log(error)
    yield put(actions.setErrorTrue(error))
  }
}
export default networkWatcher
