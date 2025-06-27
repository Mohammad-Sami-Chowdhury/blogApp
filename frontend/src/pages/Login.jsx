import React, { useState } from "react";
import axios from "axios";
import Container from "../components/Container";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://blogapp-5u1x.onrender.com/api/v1/authentication/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      toast.error(
        err.response?.data?.error ||
          err.response?.data?.message ||
          "Login failed"
      );
    }
  };

  return (
    <Container>
      <Toaster />
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleLogin}
          className="w-[500px] mx-auto rounded-xl shadow-xl shadow-[#4f44e57c] h-[500px] p-[20px] border border-[#4f44e541]"
        >
          <h2 className="text-center text-[36px] font-outfit font-bold text-[#5044E5]">
            Admin <span className="text-black">Login</span>
          </h2>
          <p className="text-base text-center text-gray-400 font-outfit mb-[60px]">
            Enter your credentials to access your admin panel.
          </p>
          <div className="relative z-0 mb-[50px]">
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-300 peer"
              required
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-300 peer"
              required
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            className="py-[10px] px-[20px] bg-[#4f44e5] rounded-lg text-white font-outfit font-medium mt-[30px] justify-center w-full hover:bg-[#8244e5] transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
