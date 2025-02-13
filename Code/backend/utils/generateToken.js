const jwt = require("jsonwebtoken");
const { model } = require("mongoose");

const generateToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

module.exports = { generateToken };
