import React, { useState } from "react";
import Container from "../components/Container";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const Registration = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/authentication/registration",
        form
      );
      toast.success(res.data.message || "Registration successful!");
      localStorage.setItem("pendingEmail", form.email);
    } catch (err) {
      toast.error(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <Container>
      <Toaster />
      <div className="flex items-center justify-center min-h-screen">
        <form
          className="w-[500px] mx-auto rounded-xl shadow-xl shadow-[#4f44e57c] h-auto p-[20px] border border-[#4f44e541] bg-white"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-[36px] font-outfit font-bold text-[#5044E5]">
            Sign <span className="text-black">up</span>
          </h2>
          <p className="text-base text-center text-gray-400 font-outfit mb-[60px]">
            Enter your credentials to get your admin panel.
          </p>
          <div className="flex mx-auto gap-x-[50px] ">
            <div className="relative z-0 mb-[40px]">
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="block py-2.5 px-0 w-[200px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-300 peer"
                placeholder=" "
                required
              />
              <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                First Name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="block py-2.5 px-0 w-[200px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-300 peer"
                placeholder=" "
                required
              />
              <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Last Name
              </label>
            </div>
          </div>
          <div className="relative z-0 mb-[50px]">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-300 peer"
              placeholder=" "
              required
            />
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email
            </label>
          </div>
          <div className="relative z-0">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-300 peer"
              placeholder=" "
              required
            />
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Password
            </label>
          </div>
          <button
            type="submit"
            className="py-[10px] px-[20px] bg-[#4f44e5] rounded-lg text-white font-outfit font-medium mt-[30px] w-full hover:bg-[#8244e5] transition-all duration-300"
          >
            Sign up
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Registration;
