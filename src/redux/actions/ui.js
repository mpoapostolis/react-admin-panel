import {createAction} from 'redux-actions';
import * as names from './names';

const setLoadingTrue = createAction(names.SET_LOADING_TRUE);
const setLoadingFalse = createAction(names.SET_LOADING_FALSE);
const setErrorTrue = createAction(names.SET_ERROR_TRUE);
const setErrorFalse = createAction(names.SET_ERROR_FALSE);
const setFormData = createAction(names.SET_FORM_DATA);
const clearFormData = createAction(names.CLEAR_FORM_DATA);

export default {
  setLoadingTrue,
  setLoadingFalse,
  setErrorTrue,
  setErrorFalse,
  setFormData,
  clearFormData,
};
