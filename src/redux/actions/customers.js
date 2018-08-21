import { createAction } from "redux-actions"
import {
  GET_CUSTOMERS,
  UPDATE_CUSTOMERS,
  CLEAR_CUSTOMERS,
  SET_CURRENT_CUSTOMER,
  GET_CURRENT_CUSTOMER
} from "./names"

const getCustomers = createAction(GET_CUSTOMERS)
const getCurrentCustomer = createAction(GET_CURRENT_CUSTOMER)
const updateCustomers = createAction(UPDATE_CUSTOMERS)
const clearCustomers = createAction(CLEAR_CUSTOMERS)
const setCurrentCustomer = createAction(SET_CURRENT_CUSTOMER)

export default {
  getCustomers,
  setCurrentCustomer,
  clearCustomers,
  updateCustomers,
  getCurrentCustomer
}
