const bodyParser = require("body-parser")
const jsonParser = bodyParser.json()
const express = require("express")
const app = express()
const { generateToken, refreshToken } = require("./auth")
const PORT = 8080

console.log(generateToken)

const urlencodedParser = bodyParser.urlencoded({ extended: false })

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
    imgUrl: "/images/img_avatar.png",
    role: "admin",
    status: "ACTIVE",
    authorities: ["USR", "PRV", "USR", "RER", "REX", "CUR"]
  })
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))