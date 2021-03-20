const express = require("express");
const router = express.Router();

const {
  handleCreateBank,
  handleGetBank,
  handleDeleteBank,
} = require("../controller/bankController");

router.post("/bank", handleCreateBank);
router.get("/bank", handleGetBank);
// router.delete("/bank", handleDeleteBank);

module.exports = router;
