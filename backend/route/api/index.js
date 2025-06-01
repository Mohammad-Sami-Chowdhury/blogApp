const express = require("express");
const route = express.Router();
const authRoute = require("./authentication");
const categoryRoute = require("./category");
const blogRoute = require("./blog");


route.use("/authentication", authRoute);
route.use("/category", categoryRoute);
route.use("/blog", blogRoute);
// route.use("/users", userRoute);
module.exports = route;
