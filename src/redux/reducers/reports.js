import mergeDeepLeft from 'ramda/src/mergeDeepLeft';
import {UPDATE_REPORTS} from '../actions/names';

const initReports = {
  data: [],
};

export const reports = (state = initReports, {type, payload}) => {
  switch (type) {
    case UPDATE_REPORTS:
      return mergeDeepLeft(payload, state);
    default:
      return state;
  }
};
