import mergeDeepLeft from "ramda/src/mergeDeepLeft"
import { UPDATE_CUSTOMERS } from "../actions/names"

//  Mock
const initCustomers = {
  data: [],
  limit: 0,
  offset: 0,
  total: 0
}

export const customers = (state = initCustomers, { type, payload }) => {
  switch (type) {
    case UPDATE_CUSTOMERS:
      return mergeDeepLeft(payload, state)
    default:
      return state
  }
}
