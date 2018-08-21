import { createAction } from "redux-actions"
import { GET_USERS, UPDATE_USERS, CLEAR_USERS } from "./names"

const getUsers = createAction(GET_USERS)
const updateUsers = createAction(UPDATE_USERS)
const clearUsers = createAction(CLEAR_USERS)

export default { getUsers, clearUsers, updateUsers }
