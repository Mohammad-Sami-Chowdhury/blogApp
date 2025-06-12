import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import OtpVerify from "./pages/OtpVerify";
import BlogDetails from "./pages/BlogDetails";
import Dashboard from "./pages/Dashboard";
import AddBlogs from "./pages/AddBlogs";
import MyBlogs from "./pages/MyBlogs.jsx"
import Comments from "./pages/Comments";
import DashboardLayout from "./components/Outlet";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/otp-verification",
    element: <OtpVerify />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetails />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "add-blog",
        element: (
          <ProtectedRoute>
            <AddBlogs />
          </ProtectedRoute>
        ),
      },
      {
        path: "my-blogs",
        element: (
          <ProtectedRoute>
            <MyBlogs />
          </ProtectedRoute>
        ),
      },
      {
        path: "comments",
        element: (
          <ProtectedRoute>
            <Comments />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
