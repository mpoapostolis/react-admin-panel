import { UPDATE_ACCOUNT } from "../actions/names"
import assoc from "ramda/src/assoc"
const initAccount = {
  access_token: "",
  refresh_token: "",
  expires_in: 0,
  role: "cc",
  imgUrl: "/images/img_avatar.png",
  status: "ACTIVE",
  authorities: ["USR", "PRV", "USR", "RER", "REX", "CUR"]
}

export const auth = (state = initAccount, { type, payload }) => {
  switch (type) {
    case UPDATE_ACCOUNT:
      return payload

    case "ALL":
      return assoc(
        "authorities",
        ["USR", "PRV", "USR", "RER", "REX", "CUR"],
        state
      )

    default:
      return state
  }
}