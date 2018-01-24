import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import {loadState, saveState} from './localStorage';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();

const ver = 1;
const curr_ver = `my_app${ver}`;
const prev_ver = `my_app${ver - 1}`;
localStorage.removeItem(prev_ver);
const persistedData = loadState(curr_ver);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const ench =
  process.env.NODE_ENV === 'development'
    ? composeEnhancers(applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);
const store = createStore(reducers, persistedData, ench);

store.subscribe(() => {
  saveState(store.getState(), curr_ver);
});

sagaMiddleware.run(rootSaga);

export default store;
