import Logo from "../assets/logo.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "./Container";

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
  };

  return (
    <Container>
      <div className="mt-[25px] flex justify-between">
        <img src={Logo} alt="Logo" />
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="px-[50px] py-[15px] flex items-center gap-x-[5px] cursor-pointer hover:bg-[#e54444] duration-300 rounded-full bg-[#5044E5] text-white font-outfit text-[18px] font-medium"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="px-[50px] py-[15px] flex items-center gap-x-[5px] cursor-pointer hover:bg-[#7c44e5] duration-300 rounded-full bg-[#5044E5] text-white font-outfit text-[18px] font-medium"
          >
            Login
            <FaArrowRightLong />
          </Link>
        )}
      </div>
      <div className="w-full h-[1px] bg-[#e0e0e0] mt-4"></div>
    </Container>
  );
};

export default Navbar;
