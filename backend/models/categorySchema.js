const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
//   products: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Product",
//     },
//   ],
});

module.exports = mongoose.model("Category", categorySchema);
