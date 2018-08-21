import mergeDeepLeft from "ramda/src/mergeDeepLeft"
import { UPDATE_REPORTS } from "../actions/names"

const initReports = {
  data: [],
  limit: 0,
  offset: 0,
  total: 0
}

export const reports = (state = initReports, { type, payload }) => {
  switch (type) {
    case UPDATE_REPORTS:
      return mergeDeepLeft(state, payload)
    default:
      return state
  }
}
