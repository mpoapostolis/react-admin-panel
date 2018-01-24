import assoc from 'ramda/src/assoc';
import mergeDeepRight from 'ramda/src/mergeDeepRight';

import {
  SET_FORM_DATA,
  SET_ERROR_TRUE,
  SET_ERROR_FALSE,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  CLEAR_FORM_DATA,
} from '../actions/names';

const initUi = {
  error: false,
  loading: false,
  formData: {},
};

export const ui = (state = initUi, {type, payload}) => {
  switch (type) {
    case SET_LOADING_TRUE:
      return assoc('loading', true, state);
    case SET_LOADING_FALSE:
      return assoc('loading', false, state);

    case SET_ERROR_FALSE:
      return assoc('error', false, state);
    case SET_ERROR_TRUE:
      return assoc('error', payload, state);

    case SET_FORM_DATA:
      return mergeDeepRight(state, {formData: payload});
    case CLEAR_FORM_DATA:
      return assoc('formData', {}, state);
    default:
      return state;
  }
};
