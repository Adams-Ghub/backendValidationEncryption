const mongoose = require("mongoose");

const { Schema } = mongoose;

const bankSchema = new Schema({
  name: "string",
  branch: "string",
  address: "string",
  location: "string",
  phone: "string",
  accounts: { type: Schema.Types.ObjectId, ref: "Account" },
});

const BankModel = mongoose.model("Bank", bankSchema);

module.exports = BankModel;
