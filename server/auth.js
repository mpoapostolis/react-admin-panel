const jwt = require("jsonwebtoken");
const SUPER_SECRET = "this_is_a_super_secret_key";

const generateToken = user_name => {
  const access_token = jwt.sign(
    {
      user_name
    },
    SUPER_SECRET,
    { expiresIn: "10s" }
  );

  const refresh_token = jwt.sign(
    {
      user_name
    },
    SUPER_SECRET,
    { expiresIn: "7d" }
  );
  return { access_token, refresh_token };
};

const validToken = token => {
  jwt.verify(token, SUPER_SECRET);
};

const refreshToken = token => {
  const { user_name } = jwt.decode(token);
  return generateToken(user_name);
};

module.exports = {
  generateToken,
  refreshToken
};
