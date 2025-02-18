import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "../layout/auth";
import App from "../layout/app";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Home from "../pages/home";

export default function Route() {
  // setup your React application here.
  const router = createBrowserRouter([
    // unauthorized users
    {
      path: "/auth",
      element: <Auth />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },
    // authorized users
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
