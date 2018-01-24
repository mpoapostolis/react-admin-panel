import {createAction} from 'redux-actions';
import {API_REQUEST, API_FETCH_START, API_FETCH_END} from './names';

const apiCall = createAction(API_REQUEST);
const fetchStart = createAction(API_FETCH_START);
const fetchEnd = createAction(API_FETCH_END);

export default {apiCall, fetchStart, fetchEnd};
