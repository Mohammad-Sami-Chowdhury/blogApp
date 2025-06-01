import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import OtpVerify from "./pages/OtpVerify";

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
    path: "otp-verification",
    element: <OtpVerify />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
