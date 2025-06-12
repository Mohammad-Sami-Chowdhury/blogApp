const mongoose = require("mongoose");
const { Schema } = mongoose;
const blogSchema = new Schema({
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  description: { type: String, required: true },
  blogImg: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["published", "draft"],
    default: "draft",
  },
  comments: [
    {
      name: String,
      comment: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("Blog", blogSchema);
