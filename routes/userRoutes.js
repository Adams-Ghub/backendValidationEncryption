const express = require("express");
const { handleCreateUser } = require("../controller/userController");
const router = express.Router();
const { body } = require("express-validator");
const UserModel = require("../model/UserModel");

router.post(
  "/signup",
  [
    body("username")
      .notEmpty()
      .withMessage("username must be provided")
      .isLength({ min: 2 })
      .withMessage("username should be at least 2 chars"),
    body("email")
      .isEmail()
      .withMessage("email is not valid")
      .notEmpty()
      .withMessage("email is required")
      .custom((value, { req }) => {
        return UserModel.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("Email is already in use");
          }
        });
      }),
    body("password")
      .isLength({ min: 6 })
      .withMessage("password must be at least 6 chars")
      .notEmpty()
      .withMessage("password is required"),
  ],
  handleCreateUser
);

module.exports = router;
