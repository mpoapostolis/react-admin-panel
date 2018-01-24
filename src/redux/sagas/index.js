import {all} from 'redux-saga/effects';
import auth from './auth';
import network from './network';
import reports from './reports';

const watchers = [auth, network, reports];

const WATCHERS = watchers.map(watcher => watcher());

export default function* rootSaga() {
  yield all(WATCHERS);
}
