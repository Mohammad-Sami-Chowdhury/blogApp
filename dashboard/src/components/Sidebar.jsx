import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { MdAddchart } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";
import { FaRegCommentDots } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const linkClass =
  "flex w-[314px] h-[60px] items-center gap-x-2 cursor-pointer hover:text-[#4f44e5] transition-colors duration-300";
const activeClass =
  "text-[#4f44e5] font-bold bg-[#F2F3FF] border-r-4 border-[#4f44e5]";

const Sidebar = () => {
  return (
    <div className="flex flex-col text-[#515151] gap-y-10 border-r-1 border-[#e0e0e0]">
      <NavLink
        to=""
        end
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }
      >
        <TiHomeOutline size={24} />
        <p className="text-outline text-[18px]">Dashboard</p>
      </NavLink>
      <NavLink
        to="add-blog"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }
      >
        <MdAddchart size={24} />
        <p className="text-outline text-[18px]">Add Blog</p>
      </NavLink>
      <NavLink
        to="my-blogs"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }
      >
        <TbChecklist size={24} />
        <p className="text-outline text-[18px]">Blog Lists</p>
      </NavLink>
      <NavLink
        to="comments"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }
      >
        <FaRegCommentDots size={24} />
        <p className="text-outline text-[18px]">Comments</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
