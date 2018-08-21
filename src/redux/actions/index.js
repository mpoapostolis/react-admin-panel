import auth from "./auth"
import ui from "./ui"
import api from "./api"
import reports from "./reports"
import filters from "./filters"
import customers from "./customers"
import users from "./users"

export default {
  ...auth,
  ...ui,
  ...api,
  ...reports,
  ...filters,
  ...customers,
  ...users
}
