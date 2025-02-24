import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "../layout/auth";
import App from "../layout/app";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Recipe from "../pages/recipe";

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
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: ":recipeId",
          element: <Recipe />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
