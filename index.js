const express = require("express");
const mongoose = require("mongoose");
const { userRoutes } = require("./routes/userRoutes");
const bodyParser = require("body-parser");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use("/api/auth", userRoutes);

// app.post("/", (req, res) => {
//   res.send("Hello This is post request");
// });

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`Server is running on port http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));
