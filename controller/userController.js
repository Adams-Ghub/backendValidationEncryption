const UserModel = require("../model/UserModel");
const { validationResult } = require("express-validator");
var bcryptjs = require("bcryptjs");

const handleCreateUser = async (req, res) => {
  const { username, email, password } = req.body;

  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.json({ error: error.array() });
  }
  var salt = bcryptjs.genSaltSync(10);
  var hashPass = bcryptjs.hashSync(password, salt);
  try {
    const user = await new UserModel({
      username,
      email,
      password: hashPass,
    }).save();
    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "sorry something went wrong" });
  }
};

module.exports = { handleCreateUser };
