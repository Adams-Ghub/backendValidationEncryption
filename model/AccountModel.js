const mongoose = require("mongoose");

const { Schema } = mongoose;

const accountSchema = new Schema({
  accountName: { type: "string", required: true },
  accountType: { type: "string", required: true },
  accountNumber: { type: "number", required: true },
  bankId: { type: Schema.Types.ObjectId, ref: "Bank" },
});

const AccountModel = mongoose.model("Account", accountSchema);

module.exports = AccountModel;
