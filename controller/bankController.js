const Bank = require("../model/BankModel");

const handleCreateBank = async (req, res) => {
  const { name, branch, location, phone, address } = req.body;
  const bank = await new Bank({
    name,
    branch,
    address,
    location,
    phone,
  }).save();
  console.log("bank", bank);
  return res.json({ message: "Bank saved successfully" }, bank);
};

const handleGetBank = async (req, res) => {
  try {
    const banks = await Bank.find({});
    if (!banks)
      return res
        .status(404)
        .json({ message: "Sorry!!! No banks found in database" });
    res.json(banks);
  } catch (error) {
    res.status(500).json({ message: "sorry something went wrong" });
  }
};
// const handleDeleteBank = async(req, res)=> {
//    try {

//    } catch (error) {

//    }
// }

module.exports = { handleGetBank, handleCreateBank };
