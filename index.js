const express = require("express");
const bodypasser = require("body-parser");
const router = require("./routes/bankRoutes");
const accountRouter = require("./routes/accountsRoutes");
const userRouter = require("./routes/userRoutes");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Adams:adams123456@cluster0.kc2gr.mongodb.net/bank?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const server = express();

//The Database

// BankDB = [];

server.listen(5000, () => {
  console.log("server is running");
});
server.use(bodypasser.json());
server.use(router);
server.use(accountRouter);
server.use(userRouter);

// server.post("/bank", handleCreateBank);
// server.get("/bank", handleGetBank);
