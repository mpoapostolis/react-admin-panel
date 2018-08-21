export const TYPE_OPTS = [...Array(20)].map((_, key) => `rule ${key}`)
export const VALIDITY_OPTS = [
  ...Array.from(Array(11), (_, i) => i),
  15,
  20,
  25,
  30,
  60,
  90,
  180,
  365
]

export const GROUPS = ["group1", "group2", "group3"]
