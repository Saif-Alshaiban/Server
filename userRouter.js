const express = require("express");
const userRouter = express.Router();
const { loginFunction } = require("./controllers/login.controller");
const { registerFunction } = require("./controllers/register.controller");
const { getUserFunction } = require("./controllers/getUser.controller");
const logoutFunction = require("./controllers/logout.controller");


// routes and their functions i guess
userRouter.post("/login", loginFunction);
userRouter.post("/logout", logoutFunction);

userRouter.post("/register", registerFunction);
userRouter.post("/getUser", getUserFunction);

module.exports = userRouter;
