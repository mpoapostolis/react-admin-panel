const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const express = require("express");
const app = express();
const { generateToken, refreshToken } = require("./auth");
const PORT = 8080;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post("/api/login", urlencodedParser, (req, res) => {
  const { grant_type, username, password } = req.body;
  const rToken = req.body.refresh_token;
  const isRefreshToken = grant_type === "refresh_token";
  const { access_token, refresh_token } = isRefreshToken
    ? refreshToken(rToken)
    : generateToken(username);
  res.send({
    access_token,
    refresh_token,
    role: "cc",
    status: "ACTIVE",
    authorities: ["UV"]
  });
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
