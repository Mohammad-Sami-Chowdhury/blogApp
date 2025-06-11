import Logo from "../assets/logo.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";
import Container from "./Container";

const Navbar = () => {
  return (
    <>
      <Container>
        <div className="mt-[25px] flex justify-between pb-[20px]">
          <img src={Logo} alt="Logo" />
          <button className="px-[50px] py-[15px] flex items-center gap-x-[5px] cursor-pointer hover:bg-[#7c44e5] duration-300 rounded-full bg-[#5044E5] text-white font-outfit text-[18px] font-medium">
            logout
            <FaArrowRightLong />
          </button>
        </div>
      </Container>
      <div className="w-full h-[1px] bg-[#e0e0e0]"></div>
    </>
  );
};

export default Navbar;
