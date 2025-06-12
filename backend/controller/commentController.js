const Blog = require("../models/blogSchema");

exports.addComment = async (req, res) => {
  try {
    const { name, comment } = req.body;
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $push: { comments: { name, comment } } },
      { new: true }
    );
    res.json({ message: "Comment added", data: blog.comments[blog.comments.length - 1] });
  } catch (err) {
    res.status(500).json({ message: "Failed to add comment" });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { blogId, commentId } = req.params;
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      { $pull: { comments: { _id: commentId } } },
      { new: true }
    );
    res.json({ message: "Comment deleted", data: blog });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete comment" });
  }
};
