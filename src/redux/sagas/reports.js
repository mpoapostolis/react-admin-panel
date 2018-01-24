import format from 'date-fns/format';
import startOfWeek from 'date-fns/start_of_week';
import actions from '../actions';
import {put, select} from 'redux-saga/effects';
import {takeLatest} from 'redux-saga/effects';
import {makeQueries} from './utils';
import * as names from '../actions/names';

const date = startOfWeek (Date.now (), {weekStartsOn: 1});

const formatedDate = format (date, 'DDMMYYYY');

const WEEKLY_URL = `/api/report/weeklyReport?date=${formatedDate}`;
const DAILY_URL = 'api/report/dailyReports';

const getToken = state => state.auth;
const getFilters = state => state.filters;

/******************************************************************************/
/** start fetch weekly reports  **/
/******************************************************************************/

function* getWeeklyReports () {
  yield put (actions.fetchStart ());
  try {
    const {access_token} = yield select (getToken);
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${access_token}`,
    };
    const data = yield fetch (WEEKLY_URL, {
      method: 'GET',
      headers,
    })
      .then (e => e.json ())
      .then (data => data);
    yield put (actions.updateReports (data));
    yield put (actions.fetchEnd ());
  } catch (error) {
    yield put (actions.setErrorTrue ());
  }
}

function* getDailyReports () {
  yield put (actions.fetchStart ());
  try {
    const {access_token} = yield select (getToken);
    const tableFitlers = yield select (getFilters);
    const filters = ['limit', 'offset', 'sort'];
    const queries = makeQueries (tableFitlers, filters);
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${access_token}`,
    };
    const data = yield fetch (`${DAILY_URL}${queries}`, {
      method: 'GET',
      headers,
    })
      .then (e => e.json ())
      .then (data => data);
    yield put (actions.updateReports (data));
    yield put (actions.fetchEnd ());
  } catch (error) {
    yield put (actions.setErrorTrue ());
  }
}

function* reportsWatcher (action) {
  yield takeLatest (names.GET_WEEKLY_REPORTS, getWeeklyReports);
  yield takeLatest (names.GET_DAILY_REPORTS, getDailyReports);
  yield takeLatest (names.UPDATE_FILTERS, getDailyReports);
}

export default reportsWatcher;
