const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  blogs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Blogs",
    },
  ],
});

module.exports = mongoose.model("Category", categorySchema);
