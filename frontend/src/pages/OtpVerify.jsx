import React, { useState } from "react";
import Container from "../components/Container";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const email = localStorage.getItem("pendingEmail");

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Adjust the endpoint as needed for your backend
      const res = await axios.post(
        "https://blogapp-5u1x.onrender.com/api/v1/authentication/otpverification",
        { otp, email }
      );
      toast.success(res.data.message || "OTP verified successfully!");
    } catch (err) {
      toast.error(err.response?.data?.error || "OTP verification failed");
    }
  };

  return (
    <Container>
      <Toaster />
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="w-[400px] mx-auto rounded-xl shadow-xl shadow-[#4f44e57c] h-auto p-[30px] border border-[#4f44e541] bg-white"
        >
          <h2 className="text-center text-[32px] font-outfit font-bold text-[#5044E5] mb-6">
            OTP <span className="text-black">Verification</span>
          </h2>
          <p className="text-base text-center text-gray-400 font-outfit mb-8">
            Enter the OTP sent to your email.
          </p>
          <div className="mb-6">
            <input
              type="text"
              name="otp"
              value={otp}
              onChange={handleChange}
              maxLength={6}
              className="block w-full py-2.5 px-4 text-lg text-gray-900 bg-transparent border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#5044E5] text-center tracking-widest"
              placeholder="Enter OTP"
              required
            />
          </div>
          <button
            type="submit"
            className="py-[10px] px-[20px] bg-[#4f44e5] rounded-lg text-white font-outfit font-medium w-full hover:bg-[#8244e5] transition-all duration-300"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </Container>
  );
};

export default OtpVerify;
