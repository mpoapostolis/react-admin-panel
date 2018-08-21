import { UPDATE_ACCOUNT } from "../actions/names"
const initAccount = {
  access_token: "",
  refresh_token: "",
  expires_in: 0,
  role: "cc",
  status: "ACTIVE",
  authorities: ["UV"]
}

export const auth = (state = initAccount, { type, payload }) => {
  switch (type) {
    case UPDATE_ACCOUNT:
      return payload

    default:
      return state
  }
}
