import React, { useState, useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import axios from "axios";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";

const AddBlogs = () => {
  const { id } = useParams();
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [blogTitle, setBlogTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [blogCategory, setBlogCategory] = useState("");
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState([]);
  const [publishNow, setPublishNow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const editorRef = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    if (editorRef.current && !editorRef.current.firstChild) {
      quillInstance.current = new Quill(editorRef.current, {
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        },
        placeholder: "Write your blog content here...",
        theme: "snow",
      });
    }
  }, []);

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/v1/category/getallcategory"
        );
        setCategories(res.data.data || []);
      } catch (err) {
        console.error(err);
        setCategories([]);
      }
    }
    fetchCategories();
  }, []);

  const handleThumbnailUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(URL.createObjectURL(file));
      setThumbnailFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    // Get content from Quill editor
    const description = quillInstance.current
      ? quillInstance.current.root.innerHTML
      : "";

    // Validate required fields
    if (!blogTitle.trim() || !blogCategory || !description.trim()) {
      setMessage("Please fill in all required fields");
      return;
    }

    // Create form data
    const formData = new FormData();
    formData.append("title", blogTitle);
    formData.append("subTitle", subTitle);
    formData.append("description", description);
    formData.append("category", blogCategory);
    formData.append("status", publishNow ? "published" : "draft");

    if (thumbnailFile) {
      formData.append("blogImg", thumbnailFile);
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/blog/createblog",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage("Blog added successfully!");

      // Reset form
      setBlogTitle("");
      setSubTitle("");
      setBlogCategory("");
      setThumbnail(null);
      setThumbnailFile(null);
      setPublishNow(false);

      if (quillInstance.current) {
        quillInstance.current.root.innerHTML = "";
      }

      // Clear message after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      setMessage(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Failed to add blog"
      );
    }
  };

  const handleAIGenerate = async () => {
    if (!title.trim()) return;
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/ai/generate-description",
        {
          title,
        }
      );
      setDescription(res.data.description);
    } catch {
      alert("AI description generate hoy nai!");
    }
  };

  return (
    <div className="max-w-4xl font-outfit mx-auto p-6 bg-white rounded-lg shadow-md text-[#515151]">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Create New Blog Post
      </h1>

      <form onSubmit={handleSubmit}>
        {/* Thumbnail Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Upload thumbnail
          </label>
          <div className="flex items-center gap-4">
            <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg w-32 h-32 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
              <input
                type="file"
                className="hidden"
                onChange={handleThumbnailUpload}
                accept="image/*"
              />
              <span className="text-4xl text-gray-400">+</span>
              <span className="text-xs text-gray-500">Upload</span>
            </label>
            {thumbnail ? (
              <div className="relative">
                <img
                  src={thumbnail}
                  alt="Thumbnail preview"
                  className="w-32 h-32 object-cover rounded-lg border"
                />
                <button
                  type="button"
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                  onClick={() => {
                    setThumbnail(null);
                    setThumbnailFile(null);
                  }}
                >
                  ×
                </button>
              </div>
            ) : (
              <div className="w-32 h-32 flex items-center justify-center text-gray-400 text-sm">
                No image selected
              </div>
            )}
          </div>
        </div>

        {/* Blog Title */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Blog title <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              placeholder="Enter blog title"
              className="w-full p-3 border border-[#CCCCCC] rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={handleAIGenerate}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Write with AI
            </button>
          </div>
        </div>

        {/* Sub Title */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Sub title</label>
          <input
            type="text"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            placeholder="Enter sub title (optional)"
            className="w-full p-3 border border-[#CCCCCC] rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Blog Description */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Blog content <span className="text-red-500">*</span>
          </label>
          <div ref={editorRef} className="border border-[#CCCCCC] rounded-lg" />
        </div>

        {/* Blog Category */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Blog category <span className="text-red-500">*</span>
          </label>
          <select
            value={blogCategory}
            onChange={(e) => setBlogCategory(e.target.value)}
            className="w-full p-3 border rounded-lg outline-none"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-6 flex items-center gap-2">
          <p>Publish now</p>
          <input
            type="checkbox"
            checked={publishNow}
            onChange={(e) => setPublishNow(e.target.checked)}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-between items-center mt-8">
          <div className="text-sm text-gray-600">
            Fields marked with <span className="text-red-500">*</span> are
            required
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors shadow-md hover:shadow-lg"
          >
            Publish Blog
          </button>
        </div>

        {message && (
          <div
            className={`mt-4 p-3 rounded-lg text-center ${
              message.includes("successfully")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default AddBlogs;
