const jwt = require("jsonwebtoken");
const { User } = require("../modals/mongoose-model");
require("dotenv").config();

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");
  console.log({ token });

  // Check if token exists
  if (!token) {
    return res.status(401).json({ msg: "No token, access denied" });
  }

  // Verify token
  try {
    jwt.verify(token, process.env.JWT_TOKEN, async (error, decoded) => {
      //console.log({error, decoded})
      if (error) {
        return res.status(401).json({ msg: "Invalid Token" });
      } else {
        //console.log("decoded.user =", decoded.user);
        const user = await User.findOne({ _id: decoded.user.id });
        req.user = user;
        next();
      }
    });
  } catch (err) {
    res.status(500).json({ errors:"Server Error" });
  }
};
