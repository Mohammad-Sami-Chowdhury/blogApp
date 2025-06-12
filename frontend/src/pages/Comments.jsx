import React, { useEffect, useState } from "react";
import axios from "axios";

const Comments = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const res = await axios.get("http://localhost:5000/api/v1/blog/getallblog");
      setBlogs(res.data.data || []);
    }
    fetchBlogs();
  }, []);

  return (
    <div className="font-outfit">
      <p>Comments</p>
      <div className="flex justify-between items-center mt-4 text-base font-semibold text-[#4b4b4b]">
        <p>Blog title & Comment</p>
        <p>Date</p>
        <p>Action</p>
      </div>
      <div className="mt-4">
        {blogs.map((blog) =>
          (blog.comments || []).map((c, idx) => (
            <div key={blog._id + idx} className="flex items-center gap-4 mb-6 justify-between">
              <div className="items-center gap-4">
                <p className="text-base text-gray-500">Blog: {blog.title}</p>
                <div>
                  <p className="text-lg font-semibold text-[#3b3b3b]">Name: {c.name}</p>
                  <p className="text-base text-[#4b4b4b]">Comment: {c.comment}</p>
                </div>
              </div>
              <p>{c.createdAt ? new Date(c.createdAt).toLocaleDateString() : ""}</p>
              <button className="text-red-500 hover:underline">Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
