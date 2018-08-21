import { delay } from "redux-saga"
import { put, take, takeLatest, call, select } from "redux-saga/effects"
import * as names from "../actions/names"
import actions from "../actions"
import { apiCall } from "./network"

const URL = "/api/login"
const getAuth = state => state.auth

/******************************************************************************/
/** extract infos from Token **/
/******************************************************************************/
function parseJwt(token) {
  var base64Url = token.split(".")[1]
  var base64 = base64Url.replace("-", "+").replace("_", "/")
  return JSON.parse(window.atob(base64))
}

/******************************************************************************/
/** Logout clear timers to get refrsh token**/
/******************************************************************************/
export function* logout(timers) {
  yield timers.forEach(timer => timer.cancel())
}

/******************************************************************************/
/** call Server for either login refresh the token **/
/******************************************************************************/
function* authCall(body, action) {
  const headers = {
    Authorization: "Basic YnJvd3Nlcjo=",
    "Content-Type": "application/x-www-form-urlencoded"
  }
  const response = yield apiCall(URL, "POST", headers, body)
  const accountInfos = yield response.json()
  const data = getAccountInfos(accountInfos)
  yield put(actions.updateAccount(data))
  yield put(actions.loginSuccess())
}

/******************************************************************************/
/** get needed infos from Token **/
/******************************************************************************/
const getAccountInfos = accountInfo => {
  const decodedToken = parseJwt(accountInfo.access_token)
  const decodedRToken = parseJwt(accountInfo.refresh_token)
  const tokenExp = decodedToken.exp * 1000
  const refrershTokenExp = decodedRToken.exp * 1000
  const role = accountInfo.role
  const tmpObj = {
    role,
    name: decodedToken.user_name,
    tokenExp,
    refrershTokenExp,
    authorities: accountInfo.authorities
  }
  const data = Object.assign(accountInfo, tmpObj)
  return data
}

/******************************************************************************/
/** set Timer for the call and get new token before our token expires **/
/******************************************************************************/
export function* setTimerForRefreshToken() {
  const auth = yield select(getAuth)
  const time = auth.tokenExp - Date.now()
  const body = `grant_type=refresh_token&refresh_token=${auth.refresh_token}`
  yield call(delay, time)
  yield call(authCall, body)
}

/******************************************************************************/
/** construct the object to call the server for login **/
/******************************************************************************/
export function* callToLogin({ payload: { username, password } }) {
  if (!username || !password) return void 0
  const body = `username=${username}&password=${password}`
  yield authCall(body)
}

function* authWatcher() {
  yield takeLatest(names.LOGIN, callToLogin)
  const timer1 = yield takeLatest(names.LOGIN_SUCCESS, setTimerForRefreshToken)
  const timer2 = yield takeLatest(
    names.GET_REFRESH_TOKEN,
    setTimerForRefreshToken
  )
  const timersForClear = [timer1, timer2]
  yield take(names.LOGOUT)
  yield logout(timersForClear)
}

export default authWatcher
