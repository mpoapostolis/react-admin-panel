import {createAction} from 'redux-actions';
import * as names from './names';

const updateFilters = createAction(names.UPDATE_FILTERS);
const clearFilters = createAction(names.CLEAR_FILTERS);

export default {
  updateFilters,
  clearFilters,
};
