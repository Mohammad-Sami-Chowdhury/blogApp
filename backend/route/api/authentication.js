const express = require("express");
const registrationController = require("../../controller/registrationController");
const otpController = require("../../controller/otpController");
const {
  loginController,
  logout,
  dashboard,
} = require("../../controller/loginController");
const resetOtpController = require("../../controller/resetOtpController");
const authMiddleware = require("../../middleware/authMiddleware");
const route = express.Router();

route.post("/registration", registrationController);
route.post("/otpverification", otpController);
route.post("/login", loginController);
route.post("/logout", logout);
route.post("/otp-reset", resetOtpController);
route.get("/dashboard", authMiddleware, dashboard);

module.exports = route;
