import { createBrowserRouter } from "react-router";

import About from "@/pages/About";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import Login from "@/pages/Login";
import App from "@/App";
const router = createBrowserRouter([
  {
    element: App,
    path: "/",
    children: [
      {
        Component: About,
        path: "about",
      },
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
]);

export default router;
