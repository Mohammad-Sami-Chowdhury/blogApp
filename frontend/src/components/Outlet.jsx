import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Container from "./Container";

const DashboardLayout = () => (
  <>
    <Navbar />
    <Container>
      <div className="flex pt-10">
        <Sidebar />
        <div className="flex-1 pl-[80px]">
          <Outlet />
        </div>
      </div>
    </Container>
  </>
);

export default DashboardLayout;
