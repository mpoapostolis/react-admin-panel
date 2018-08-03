import { createAction } from "redux-actions"
import { UPDATE_FILTERS, CLEAR_FILTERS } from "./names"

const updateFilters = createAction(UPDATE_FILTERS)
const clearFilters = createAction(CLEAR_FILTERS)

export default {
  updateFilters,
  clearFilters
}
