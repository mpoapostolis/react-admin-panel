import {delay} from 'redux-saga';
import {put, take, takeLatest, call, select} from 'redux-saga/effects';
import * as names from '../actions/names';
import actions from '../actions';

const URL = '/api/login';
const getAuth = state => state.auth;
const getFormData = state => state.ui.formData;

/******************************************************************************/
/** extract infos from Token **/
/******************************************************************************/
function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

/******************************************************************************/
/** Logout clear timers to get refrsh token**/
/******************************************************************************/
export function* logout(timers) {
  yield timers.forEach(timer => timer.cancel());
}

/******************************************************************************/
/** call Server for either login refresh the token **/
/******************************************************************************/
function* apiCall(body, action) {
  const headers = {
    Authorization: 'Basic YnJvd3Nlcjo=',
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  try {
    yield put(actions.fetchStart());
    const accountInfos = yield fetch(URL, {
      method: 'POST',
      headers,
      body,
    }).then(res => res.json());
    yield put(actions.fetchEnd());
    console.log(accountInfos)
    if ('error' in accountInfos) throw new {...accountInfos}();
    const data = getAccountInfos(accountInfos);
    yield put(actions.updateAccount(data));
    yield put({type: 'ALL'}); // REMOVE ME!!!!!
    yield put(actions.loginSuccess());
  } catch (error) {
    yield put(actions.setErrorTrue(error));
  }
}

/******************************************************************************/
/** get needed infos from Token **/
/******************************************************************************/
const getAccountInfos = accountInfo => {
  const decodedToken = parseJwt(accountInfo.access_token);
  const decodedRToken = parseJwt(accountInfo.refresh_token);
  const tokenExp = decodedToken.exp * 1000;
  const refrershTokenExp = decodedRToken.exp * 1000;
  const tmpObj = {
    role:"Admin",
    name: decodedToken.user_name,
    tokenExp,
    refrershTokenExp,
    authorities: accountInfo.authorities,
  };
  const data = Object.assign(accountInfo, tmpObj);
  return data;
};

/******************************************************************************/
/** set Timer for the call and get new token before our token expires **/
/******************************************************************************/
export function* setTimerForRefreshToken() {
  const auth = yield select(getAuth);
  const time = auth.tokenExp - Date.now();
  const body = `grant_type=refresh_token&refresh_token=${auth.refresh_token}`;
  yield call(delay, time);
  yield call(apiCall, body);
}

/******************************************************************************/
/** construct the object to call the server for login **/
/******************************************************************************/
export function* callToLogin() {
  const {username, password} = yield select(getFormData);
  if (!username || !password) return;
  const body = `username=${username}&password=${password}`;
  yield apiCall(body);
}

function* authWatcher(action) {
  yield takeLatest(names.LOGIN, callToLogin);
  const timer1 = yield takeLatest(names.LOGIN_SUCCESS, setTimerForRefreshToken);
  const timer2 = yield takeLatest(
    names.GET_REFRESH_TOKEN,
    setTimerForRefreshToken
  );
  const timersForClear = [timer1, timer2];
  yield take(names.LOGOUT);
  yield logout(timersForClear);
}

export default authWatcher;
