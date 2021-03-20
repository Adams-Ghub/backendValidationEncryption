const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  username: "string",
  email: { type: "String", require: true },
  password: { type: "string", require: true },
  accounts: { type: Schema.Types.ObjectId, ref: "Account" },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
