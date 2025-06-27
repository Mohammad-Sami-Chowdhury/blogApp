import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import { WiStars } from "react-icons/wi";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      const res = await axios.get(
        "https://blogapp-5u1x.onrender.com/api/v1/category/getallcategory"
      );
      // "All" ke first e add koro
      const arr = Array.isArray(res.data.data) ? res.data.data : [];
      setCategories(["All", ...arr.map((cat) => cat.name)]);
    }
    fetchCategories();
  }, []);

  // Fetch blogs
  useEffect(() => {
    async function fetchBlogs() {
      const res = await axios.get(
        "http://localhost:5000/api/v1/blog/getallblog"
      );
      setBlogs(Array.isArray(res.data.data) ? res.data.data : []);
    }
    fetchBlogs();
  }, []);

  // Filter blogs by category
  const filteredBlogs =
    selected === "All"
      ? blogs
      : blogs.filter(
          (blog) =>
            blog.category &&
            blog.category.name &&
            blog.category.name.toLowerCase() === selected.toLowerCase()
        );

  return (
    <Container>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-[300px]">
        <div className="w-[273px] h-[42px] rounded-full border border-gray-300 bg-[#4f44e521] mx-auto mt-[30px] lg:mt-[114px]">
          <div className="flex items-center justify-center text-[#5044E5] gap-x-[10px] h-full">
            <p className="text-[16px] font-outfit text-center">
              New: AI feature integrated
            </p>
            <WiStars size={28} />
          </div>
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mt-8">
          Welcome to My Blog
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-center text-gray-600">
          Explore awesome blogs and share your thoughts!
        </p>
        <div className="mx-auto flex items-center relative lg:w-[680px] mt-[37px]">
          <input
            className="lg:w-[680px] lg:h-[70px] w-[250px] h-[50px] rounded-xl pl-[22px] outline-none border border-gray-400"
            type="text"
            placeholder="Search blogs"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="lg:w-[165px] text-white lg:h-[55px] w-[80px] h-[40px] bg-[#5044E5] rounded-xl absolute right-[10px] top-[7px]">
            Search
          </button>
        </div>
        {/* Category Buttons */}
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-[35px] mt-8 justify-center">
          {categories.map((cat) => (
            <div
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 md:px-[30px] md:py-[15px] rounded-full cursor-pointer ${
                selected === cat
                  ? "bg-[#5044E5]"
                  : "bg-[#5044E533] border border-[#5044E5]"
              }`}
            >
              <p
                className={`text-center font-medium text-sm md:text-base ${
                  selected === cat ? "text-white" : "text-[#5044E5]"
                }`}
              >
                {cat}
              </p>
            </div>
          ))}
        </div>

        {/* Blog List */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredBlogs.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No blogs found for this category.
            </p>
          ) : (
            filteredBlogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-lg shadow p-4 flex flex-col"
                onClick={() => navigate(`/blog/${blog._id}`)}
              >
                <img
                  src={blog.blogImg}
                  alt={blog.title}
                  className="w-full h-[190px] object-cover object-center rounded-t-lg"
                />
                <div className="h-[260px] rounded-b-lg shadow-2xl pl-[28px]">
                  <div className="inline-block mx-auto bg-[#5044E533] border border-[#5044E5] rounded-full mt-4">
                    <p className="text-[#5044E5] font-medium px-[10px] py-[5px]">
                      {blog.category?.name || "Category"}
                    </p>
                  </div>
                  <p className="text-[20px] font-medium w-[300px] text-[#404040] mt-[20px]">
                    {blog.title}
                  </p>
                  <p className="text-base w-[300px] text-gray-400 mt-[20px] line-clamp-2">
                    {blog.subTitle}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
        <h2 className="text-4xl text-[#373737] font-medium text-center mt-10 lg:mt-[180px]">
          Never Miss a Blog!
        </h2>
        <p className="text-[18px] text-[#9A9A9A] text-center mt-[18px]">
          Subscribe to get the latest blog, new tech, and exclusive news.
        </p>
        <div className="mx-auto flex items-center relative lg:w-[680px] mt-[37px]">
          <input
            className="lg:w-[680px] w-[250px] h-[50px] lg:h-[70px] rounded-l-xl pl-[22px] outline-none border border-gray-300 mx-auto"
            type="text"
            placeholder="Enter your email id"
          />
          <button className="lg:w-[165px] w-[110px] h-[50px] text-white lg:h-[70px] bg-[#5044E5] rounded-r-xl">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Home;
