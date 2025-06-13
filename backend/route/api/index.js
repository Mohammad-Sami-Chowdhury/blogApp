const express = require("express");
const route = express.Router();
const authRoute = require("./authentication");
const categoryRoute = require("./category");
const blogRoute = require("./blog");
const commentRoute = require("./comment");


route.use("/authentication", authRoute);
route.use("/category", categoryRoute);
route.use("/blog", blogRoute);
route.use("/comment", commentRoute);

// route.use("/users", userRoute);
module.exports = route;
