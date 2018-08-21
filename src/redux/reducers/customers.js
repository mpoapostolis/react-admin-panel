import mergeDeepRight from "ramda/src/mergeDeepRight"
import assoc from "ramda/src/assoc"
import {
  UPDATE_CUSTOMERS,
  CLEAR_CUSTOMERS,
  SET_CURRENT_CUSTOMER
} from "../actions/names"

const initCustomers = {
  data: [],
  currentCustomer: {},
  limit: 10,
  offset: 0,
  total: 40
}

export const customers = (state = initCustomers, { type, payload }) => {
  switch (type) {
    case UPDATE_CUSTOMERS:
      return mergeDeepRight(state, payload)

    case SET_CURRENT_CUSTOMER:
      return assoc("currentCustomer", payload, state)

    case CLEAR_CUSTOMERS:
      return initCustomers

    default:
      return state
  }
}
