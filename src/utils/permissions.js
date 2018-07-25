import groupBy from "ramda/src/groupBy"

const perms = [
  {
    name: "Dashboard",
    permissions: "USR",
    description:
      "Το Lorem Ipsum είναι απλά ένα κείμενο χωρίς νόημα για τους επαγγελματίες ",
    viewOnMenu: true,
    path: ["/"],
    group: "Dashboard"
  },
  {
    name: "Profile",
    permissions: "PRV",
    description:
      "Το Lorem Ipsum είναι απλά ένα κείμενο χωρίς νόημα για τους επαγγελματίες ",
    viewOnMenu: true,
    path: ["/profile"],
    group: "Profile"
  },

  {
    name: "User Read",
    permissions: "USR",
    description:
      "Το Lorem Ipsum είναι απλά ένα κείμενο χωρίς νόημα για τους επαγγελματίες ",
    viewOnMenu: true,
    path: ["users", "new-user"],
    group: "Users",
    section: "Peoples"
  },

  {
    name: "Reports Read",
    permissions: "RER",
    description:
      "Το Lorem Ipsum είναι απλά ένα κείμενο χωρίς νόημα για τους επαγγελματίες ",
    viewOnMenu: true,
    path: ["reports"],
    group: "Reports",
    section: "Analytics"
  },
  {
    name: "Reports Export",
    permissions: "REX",
    description:
      "Το Lorem Ipsum είναι απλά ένα κείμενο χωρίς νόημα για τους επαγγελματίες ",
    viewOnMenu: false,
    group: "Reports"
  },

  {
    name: "Customers Read",
    permissions: "CUR",
    description:
      "Το Lorem Ipsum είναι απλά ένα κείμενο χωρίς νόημα για τους επαγγελματίες ",
    viewOnMenu: true,
    path: ["customers"],
    group: "Customers",
    section: "People"
  }
]

const filteredPerms = perms.filter(({ group }) => group)

const groupedPerms = groupBy(({ group }) => group, filteredPerms)
const menuItems = groupBy(
  ({ section }) => section,
  perms.filter(({ viewOnMenu }) => viewOnMenu)
)

export { groupedPerms, menuItems }
