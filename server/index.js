const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const { generateToken, refreshToken } = require("./auth")
const PORT = 8080

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get("/api/customers/:id", (req, res) => {
  const { id } = req.params
  const customers = require("./customers.json")
  const response = customers.find(obj => obj.first_name === id)
  res.status(200).json(response)
})

app.get("/api/customers", (req, res) => {
  const { offset, limit, keyword, sort } = req.query
  const reg = new RegExp(keyword, "gi")
  const customers = require("./customers.json")
  const startIndex = +offset * limit
  let data = customers
    .filter(({ first_name }) => first_name.match(reg))
    .splice(startIndex, +limit)
  const total = customers.length
  const responseData = {
    limit: +limit,
    offset: +offset,
    total: +total,
    data
  }
  res.status(200).json(responseData)
})

app.get("/api/users", (req, res) => {
  const data = require("./customers.json")
  const responseData = {
    limit: 10,
    offset: 0,
    total: 40,
    data
  }
  res.status(200).json(responseData)
})

app.post("/api/login", urlencodedParser, (req, res) => {
  const { grant_type, username, password } = req.body
  const rToken = req.body.refresh_token
  const isRefreshToken = grant_type === "refresh_token"
  const { access_token, refresh_token } = isRefreshToken
    ? refreshToken(rToken)
    : generateToken(username)
  res.send({
    access_token,
    refresh_token,
    role: "admin",
    status: "ACTIVE",
    imgUrl: "/images/img_avatar.png",
    authorities: [
      "USR",
      "USR",
      "USC",
      "USE",
      "USD",
      "USB",
      "USA",
      "SER",
      "SEC",
      "SEE",
      "SEX",
      "SAX",
      "MCR",
      "MCC",
      "MCE",
      "MCP",
      "MCA",
      "COR",
      "COC",
      "COE",
      "COD",
      "COA",
      "RER",
      "REX",
      "CRX",
      "CRE",
      "CRA",
      "CUR",
      "CUG",
      "CUO",
      "CUO",
      "COR"
    ]
  })
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
