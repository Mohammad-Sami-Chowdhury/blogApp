const express = require("express");
const { addComment, deleteComment } = require("../../controller/commentController");
const route = express.Router();

route.post("/createcomment/:id", addComment);
route.delete("/deletecomment/:blogId/:commentId", deleteComment);

module.exports = route;
