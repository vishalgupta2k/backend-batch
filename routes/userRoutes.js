const { signUp } = require("../controllers/users");
const express = require("express");

const userRoutes = express.Router();

// userRoutes.get("/user", user);
userRoutes.post("/signup", signUp);

module.exports = { userRoutes };
