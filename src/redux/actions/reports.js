import { createAction } from "redux-actions"
import { GET_DAILY_REPORTS, GET_WEEKLY_REPORTS, UPDATE_REPORTS } from "./names"

const getDailyReports = createAction(GET_DAILY_REPORTS)
const getWeeklyReports = createAction(GET_WEEKLY_REPORTS)
const updateReports = createAction(UPDATE_REPORTS)

export default { getDailyReports, getWeeklyReports, updateReports }
