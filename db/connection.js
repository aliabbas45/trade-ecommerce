const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://ialiabbas86:netsol45@tradecommerce-cluster.e2yexno.mongodb.net/?retryWrites=true&w=majority";

const connection = mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Successfully Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = connection;
