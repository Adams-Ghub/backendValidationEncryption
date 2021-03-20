const AccountModel = require("../model/AccountModel.js");
const { validationResult } = require("express-validator");

const handleCreateAccount = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty) {
    return res.json({ error: error.array() });
  }
  try {
    const { accountName, accountType, accountNumber, bankId } = req.body;
    const newAccount = await new AccountModel({
      accountName,
      accountType,
      accountNumber,
      bankId,
    }).save();
    res
      .status(201)
      .json({ message: "Account created successfully", data: newAccount });
  } catch (error) {
    res.json({ message: "something went wrong", error: error });
  }
};
const handleGetAccounts = async (req, res) => {
  try {
    const allAccounts = await AccountModel.find({}).populate("bankId");
    res.status(201).json({ data: allAccounts });
  } catch (error) {
    res.status(500).json({ message: "something went wrong", error: error });
  }
};
// const handleDeleteAccount = async (req, res) => {
//   try {
//     const { name } = req.body;

//     res.json({ message: "" });
//   } catch (error) {}
// };

module.exports = {
  handleCreateAccount,
  handleGetAccounts,
};
