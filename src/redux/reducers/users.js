import mergeDeepRight from "ramda/src/mergeDeepRight"
import { UPDATE_USERS, CLEAR_USERS } from "../actions/names"

const initUsers = {
  data: [],
  currentCustomer: {},
  limit: 10,
  offset: 0,
  total: 40
}

export const users = (state = initUsers, { type, payload }) => {
  switch (type) {
    case UPDATE_USERS:
      return mergeDeepRight(state, payload)
    case CLEAR_USERS:
      return initUsers

    default:
      return state
  }
}
