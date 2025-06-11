import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/Outlet";
import Dashboard from "./pages/Dashboard";
import AddBlogs from "./pages/AddBlogs";
import MyBlogs from "./pages/MyBlogs";
import Comments from "./pages/Comments";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-blog" element={<AddBlogs />} />
          <Route path="my-blogs" element={<MyBlogs />} />
          <Route path="comments" element={<Comments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
