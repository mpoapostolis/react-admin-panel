import { createAction } from "redux-actions"
import {
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  SET_ERROR_TRUE,
  SET_ERROR_FALSE,
  SET_FORM_DATA,
  CLEAR_FORM_DATA
} from "./names"

const setLoadingTrue = createAction(SET_LOADING_TRUE)
const setLoadingFalse = createAction(SET_LOADING_FALSE)
const setErrorTrue = createAction(SET_ERROR_TRUE)
const setErrorFalse = createAction(SET_ERROR_FALSE)
const setFormData = createAction(SET_FORM_DATA)
const clearFormData = createAction(CLEAR_FORM_DATA)

export default {
  setLoadingTrue,
  setLoadingFalse,
  setErrorTrue,
  setErrorFalse,
  setFormData,
  clearFormData
}
