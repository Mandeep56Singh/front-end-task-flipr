import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/contact";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "blog",
    element: <Blog></Blog>,
  },
  {
    path: "contact-us",
    element:<Contact></Contact>
  },
  {
    path: "about-us",
    element: <About></About>
  }
]);