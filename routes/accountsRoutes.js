const express = require("express");
const { body } = require("express-validator");
const {
  handleCreateAccount,
  handleGetAccounts,
} = require("../controller/accountController");
const router = express.Router();

router.post(
  "/account",
  [
    body("accountName").notEmpty().withMessage("account name is required"),
    body("accountNumber")
      .notEmpty()
      .withMessage("account number is required")
      .isNumeric()
      .withMessage("account numbers must be numeric")
      .isLength({ min: 12, max: 12 })
      .withMessage("account number must be 12 characters"),
    body("accountType")
      .notEmpty()
      .withMessage("you must choose an account type")
      .isString()
      .withMessage("account type must be string"),
  ],
  handleCreateAccount
);
router.get("/account", handleGetAccounts);
// router.delete("/account", handleDeleteAccount)

module.exports = router;
