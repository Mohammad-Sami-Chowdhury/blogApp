import Logo from "../assets/logo.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="mt-[25px] flex justify-between">
      <img src={Logo} alt="Logo" />
      <Link
        to="/login"
        className="px-[50px] py-[15px] flex items-center gap-x-[5px] cursor-pointer hover:bg-[#7c44e5] duration-300 rounded-full bg-[#5044E5] text-white font-outfit text-[18px] font-medium"
      >
        login
        <FaArrowRightLong />
      </Link>
    </div>
  );
};

export default Navbar;
