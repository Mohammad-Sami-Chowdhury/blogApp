import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import axios from "axios";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);
import "../App.css";
import toast, { Toaster } from "react-hot-toast";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://blogapp-5u1x.onrender.com/api/v1/blog/getsingleblog/${id}`
        );
        setBlog(res.data.data);
        setComments(res.data.data.comments || []);
      } catch (err) {
        toast.error("Blog not found!");
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;
    const res = await axios.post(
      `http://localhost:5000/api/v1/comment/createcomment/${id}`,
      { name: commentName, comment: commentText }
    );
    setComments([...comments, res.data.data]);
    setCommentName("");
    setCommentText("");
    toast.success("Comment added successfully!");
  };

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (!blog) return null;

  return (
    <>
      <Toaster />
      <Container>
        <Navbar />
        <div className="mt-40 font-outfit">
          <p className="text-[18px] text-center font-medium text-[#5044E5]">
            Published on{" "}
            {blog.createdAt
              ? dayjs(blog.createdAt).format("MMMM Do YYYY")
              : "Date not available"}
          </p>
          <h1 className="text-[58px] font-semibold text-[#3b3b3b] text-center w-[900px] mx-auto">
            {blog.title}
          </h1>
          <h2 className="font-poppins text-[#4b4b4b] text-[18px] text-center">
            {blog.subTitle}
          </h2>
          <div className="flex justify-center mt-4">
            <div className="inline-block bg-[#4f44e52a] border border-[#5044E5] rounded-full py-[14px] px-[26px]">
              <p className="text-[#5044E5] text-center text-base font-medium">
                {blog.author || "Unknown Author"}
              </p>
            </div>
          </div>
          <div className="mt-[60px] flex justify-center">
            <img
              className="w-[1230px] h-[690px] rounded-xl object-cover"
              src={blog.blogImg}
              alt={blog.title}
            />
          </div>
          <div
            className="ql-editor text-[18px] w-[984px] mx-auto text-[#4b4b4b] mt-6 leading-[32px]"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
          <div>
            <h5 className="text-2xl font-semibold text-[#3b3b3b] mt-[46px] w-[984px] mx-auto leading-[45px]">
              Comments ({comments.length})
            </h5>
            <div className="w-[984px] mx-auto mt-6">
              {comments.map((c, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 mb-6 justify-between"
                >
                  <div className="flex items-center gap-4">
                    <IoPersonCircleOutline className="text-[40px] text-[#818182]" />
                    <div>
                      <p className="text-lg font-semibold text-[#3b3b3b]">
                        {c.name}
                      </p>
                      <p className="text-base text-[#4b4b4b]">{c.comment}</p>
                    </div>
                  </div>
                  <p>
                    {c.createdAt
                      ? new Date(c.createdAt).toLocaleDateString()
                      : ""}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#3b3b3b] mt-[46px] w-[984px] mx-auto leading-[45px]">
                Add your Comment
              </p>
              <form
                className="mt-4 flex flex-col items-center"
                onSubmit={handleCommentSubmit}
              >
                <input
                  className="w-full max-w-[600px] h-[50px] p-4 border border-[#dcdcdc] rounded-lg focus:outline-none focus:border-[#5044E5]"
                  type="text"
                  placeholder="Your Name"
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                />
                <textarea
                  className="w-full max-w-[600px] h-[300px] p-4 border border-[#dcdcdc] rounded-lg focus:outline-none focus:border-[#5044E5] mt-4"
                  placeholder="Write your comment here..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                ></textarea>
                <button
                  type="submit"
                  className="mt-4 px-6 py-2 bg-[#5044E5] text-white rounded-lg hover:bg-[#3b3b3b] transition-colors"
                >
                  Submit Comment
                </button>
              </form>
            </div>
            <div className="mt-10 w-[984px] mx-auto mb-[250px]">
              <p className="font-bold text-base">Share in this social media</p>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=your_blog_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaFacebook className="text-[24px]" />
                </a>
                <a
                  href="https://twitter.com/intent/tweet?url=your_blog_url&text=Check out this blog!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaXTwitter className="text-[24px]" />
                </a>
                <a
                  href="https://www.linkedin.com/sharing/share-offsite/?url=your_blog_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <FaLinkedinIn className="text-[24px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default BlogDetails;
