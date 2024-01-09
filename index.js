const express = require("express");
const app = express();
const { registerationRoute, loginRoute } = require("./routes/index");

require("./db/connection");
require("dotenv").config();

// Middleware to parse JSON requests
app.use(express.json());

// Use the registrationRoutes middleware
app.use("/api", registerationRoute); // You can specify a base path like "/api"
app.use("/api", loginRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running at PORT: ${PORT}`);
});
