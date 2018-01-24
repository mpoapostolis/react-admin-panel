import {createAction} from 'redux-actions';
import * as names from './names';

const getDailyReports = createAction(names.GET_DAILY_REPORTS);
const getWeeklyReports = createAction(names.GET_WEEKLY_REPORTS);
const updateReports = createAction(names.UPDATE_REPORTS);

export default {getDailyReports, getWeeklyReports, updateReports};
