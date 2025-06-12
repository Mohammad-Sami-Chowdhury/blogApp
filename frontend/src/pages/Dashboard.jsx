import React from "react";
import { TbChecklist } from "react-icons/tb";
import { FaComments } from "react-icons/fa6";
import { RiDraftLine } from "react-icons/ri";

const Dashboard = () => {
  return (
    <div className="text-outfit text-[#515151] ">
      <div className="flex w-[60%] justify-between items-center">
        <div className="flex items-center gap-x-4">
          <TbChecklist size={42} className="text-[#5F6FFF]" />
          <div>
            <p className="text-[24px] font-medium">14</p>
            <p>Blogs</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <FaComments size={42} className="text-[#5F6FFF]" />
          <div>
            <p className="text-[24px] font-medium">14</p>
            <p>Comments</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <RiDraftLine size={42} className="text-[#5F6FFF]" />
          <div>
            <p className="text-[24px] font-medium">14</p>
            <p>Drafts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
