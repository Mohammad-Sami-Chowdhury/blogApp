import React from "react";
import Container from "../components/Container";

const Login = () => {
  return (
    <Container>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[500px] mx-auto rounded-xl shadow-xl shadow-[#4f44e57c] h-[500px] p-[20px] border border-[#4f44e541]">
          <h2 className="text-center text-[36px] font-outfit font-bold text-[#5044E5]">
            Admin <span className="text-black">Login</span>
          </h2>
          <p className="text-base text-center text-gray-400 font-outfit mb-[60px]">
            Enter your credentials to access your admin panel.
          </p>
          <div class="relative z-0 mb-[50px]">
            <input
              type="text"
              id="floating_standard"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-300 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-300 peer"
              placeholder=" "
            />
            <label
              for="floating_standard"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-300 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Email
            </label>
          </div>
          <div class="relative z-0">
            <input
              type="text"
              id="floating_standard"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-300 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-300 peer"
              placeholder=" "
            />
            <label
              for="floating_standard"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-300 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Password
            </label>
          </div>
          <button className="py-[10px] px-[20px] bg-[#4f44e5] rounded-lg text-white font-outfit font-medium mt-[30px] justify-center w-full hover:bg-[#8244e5] transition-all duration-300">
            Login
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
