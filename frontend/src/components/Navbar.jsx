import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
    toast.success("Logged out successfully!");
  };

  return (
    <>
      <Toaster />
      <nav className="flex items-center justify-between py-4 px-4 md:px-12 bg-white shadow-sm">
        <img src={Logo} alt="Logo" className="h-10" />
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className=" lg:px-6 lg:py-4 font-medium px-4 py-2 bg-[#5044E5] text-white rounded-full hover:bg-[#7c44e5] transition"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="px-6 py-2 bg-[#5044E5] text-white rounded-full hover:bg-[#7c44e5] transition"
          >
            Login
          </Link>
        )}
      </nav>
    </>
  );
};

export default Navbar;
