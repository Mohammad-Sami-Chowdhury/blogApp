const express = require("express");
const multer = require("multer");
const { createBlogController, getAllBlogController, getSingleBlogController, getBlogsByCategoryController, updateBlogController, deleteBlogController } = require("../../controller/blogController");

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload"); // Ensure this directory exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        `.${file.originalname.split(".")[1]}`
    );
  },
});

const upload = multer({ storage: storage });

const route = express.Router();

// Apply multer middleware to the POST route
route.post("/createblog", upload.single("blogImg"), createBlogController);
route.get("/getallblog", getAllBlogController);
route.get("/getsingleblog/:id", getSingleBlogController)
route.get("/getcategoryblog/:id", getBlogsByCategoryController);
route.patch("/updateblog/:id", updateBlogController);
route.delete("/deleteblog/:id", deleteBlogController);

module.exports = route;
