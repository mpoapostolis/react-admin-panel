import actions from '../actions';
import {put} from 'redux-saga/effects';
import {takeLatest} from 'redux-saga/effects';
import * as names from '../actions/names';

/******************************************************************************/
/** start fetch set errors to false and loading to true  **/
/******************************************************************************/
function* startFetching() {
  yield put(actions.setErrorFalse());
  yield put(actions.setLoadingTrue());
}

/******************************************************************************/
/** end fetch loading to false  **/
/******************************************************************************/
function* endFetching() {
  yield put(actions.setLoadingFalse());
}

function* networkWatcher(action) {
  yield takeLatest(names.API_FETCH_START, startFetching);
  yield takeLatest(names.API_FETCH_END, endFetching);
}

export default networkWatcher;
