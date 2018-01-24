import mergeDeepLeft from 'ramda/src/mergeDeepLeft';
import {UPDATE_FILTERS, CLEAR_FILTERS} from '../actions/names';

const initFilters = {
  offset: 0,
  limit: 10,
  sort: 'DESC',
  type: "weekly",
  showCols: [],
};

export const filters = (state = initFilters, {type, payload}) => {
  switch (type) {
    case UPDATE_FILTERS:
      return mergeDeepLeft(payload, state);
    case CLEAR_FILTERS:
      return initFilters;
    default:
      return state;
  }
};
