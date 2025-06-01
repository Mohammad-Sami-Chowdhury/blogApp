const mongoose = require("mongoose");
const { Schema } = mongoose;
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  subTitle: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  blogImg: {
    type: String,
    default: "placeholder.jpg",
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
