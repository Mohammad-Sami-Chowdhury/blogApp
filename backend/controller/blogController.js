const blogSchema = require("../models/blogSchema");
const categorySchema = require("../models/categorySchema");
const uploadResult = require("../middleware/cloudinary");
const createBlogController = async (req, res) => {
  try {
    // Access form data from req.body and req.file
    const { description, title, subTitle, category } = req.body;

    const fileName = req.file.path;
    const imgUrl = await uploadResult(fileName);

    // Validate required fields
    if (!description || !title || !subTitle || !category) {
      return res.status(400).json({
        message: "Missing required fields",
        status: "Error",
      });
    }

    // Create the product
    const blog = new blogSchema({
      description,
      title,
      subTitle,
      category,
      blogImg: imgUrl.secure_url || null,
    });

    const savedBlog = await blog.save();

    // Update category and subcategory
    await categorySchema.findByIdAndUpdate(category, {
      $push: { blog: savedBlog._id },
    });

    res.status(201).json({
      message: "BLog created!",
      status: "Success",
      data: savedBlog,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      status: "Error",
      error: error.message,
    });
  }
};

async function getAllBlogController(req, res) {
  try {
    const allBlogs = await blogSchema.find({}).populate("category");
    res.status(200).json({
      message: "All blogs fetched successfully",
      status: "Success",
      data: allBlogs,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      message: "Internal server error",
      status: "Error",
    });
  }
}

async function getSingleBlogController(req, res) {
  const { id } = req.params;
  const getSingleBlog = await blogSchema.findOne({ _id: id });
  res.status(200).json({
    message: "Blog fetched successfully",
    status: "Success",
    data: getSingleBlog,
  });
}

async function updateBlogController(req, res) {
  const { id } = req.params;
  const { description, title, subTitle, blogImg } = req.body;
  const updatedBlog = await blogSchema.findByIdAndUpdate(
    id,
    { description, title, subTitle, blogImg },
    { new: true }
  );
  res.status(200).json({
    message: "Blog updated successfully",
    status: "Success",
    data: updatedBlog,
  });
}

async function deleteBlogController(req, res) {
  const { id } = req.params;

  try {
    const blog = await blogSchema.findById(id);
    if (!product) {
      return res.status(404).json({
        message: "blog not found",
        status: "Error",
      });
    }
    const categoryId = blog.category;
    await blogSchema.findByIdAndDelete(id);
    await categorySchema.findByIdAndUpdate(categoryId, {
      $pull: { blog: id },
      new: true,
    });

    res.status(200).json({
      message: "Blog deleted and references removed successfully",
      status: "Success",
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({
      message: "Failed to delete product",
      status: "Error",
      error: error.message,
    });
  }
}

async function getBlogsByCategoryController(req, res) {
  const { id } = req.params;
  const categoryBlog = await blogSchema.findOne({ category: id });
  res.status(200).json({
    message: "Products fetched successfully",
    status: "Success",
    data: categoryBlog,
  });
}

module.exports = {
  createBlogController,
  getAllBlogController,
  getBlogsByCategoryController,
  getSingleBlogController,
  updateBlogController,
  deleteBlogController,
};
