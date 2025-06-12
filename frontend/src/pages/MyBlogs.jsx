import React, { useEffect, useState } from "react";
import axios from "axios";

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/blog/getallblog");
        setBlogs(res.data.data || []);
      } catch (err) {
        setBlogs([]);
      }
    }
    fetchBlogs();
  }, []);

  // Publish handler
  const handlePublish = async (id) => {
    try {
      const res = await axios.patch(`http://localhost:5000/api/v1/blog/publish/${id}`);
      setBlogs((prev) =>
        prev.map((blog) =>
          blog._id === id ? { ...blog, status: "published" } : blog
        )
      );
    } catch (err) {
      alert("Failed to publish blog!");
    }
  };

  return (
    <div className="font-outfit">
      <p>All blogs</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4 text-base text-gray-800 font-medium">
        <p>#</p>
        <p>Blog title</p>
        <p>Date</p>
        <p>Status</p>
        <p>Actions</p>
      </div>
      {blogs.map((blog, idx) => (
        <div
          key={blog._id}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4 text-base text-gray-800"
        >
          <p>{idx + 1}</p>
          <p>{blog.title}</p>
          <p>{blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : "N/A"}</p>
          <p className={blog.status === "published" ? "text-green-500" : "text-yellow-500"}>
            {blog.status.charAt(0).toUpperCase() + blog.status.slice(1)}
          </p>
          <p className="flex gap-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            {blog.status === "draft" && (
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => handlePublish(blog._id)}
              >
                Publish
              </button>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyBlogs;
