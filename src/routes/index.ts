import { createBrowserRouter } from "react-router";

import About from "@/pages/About";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import Login from "@/pages/Login";
import App from "@/App";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Profile from "@/pages/User/Profile";

import Analytics from "@/pages/Admin/Analytics";

import { adminRouteWithSidebar } from "./admin.route";
import { generateRoute } from "@/utils/generateRoutes";
import { userRouteWithSidebar } from "./userRoute";
const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        index: true,
        Component: About,
      },
      {
        index: true,
        Component: About,
        path: "about",
      },
    ],
  },
  {
    Component: DashboardLayout,
    path: "/admin",
    children: [
      {
        Component: Analytics,
        path: "/admin",
      },
      ...generateRoute(adminRouteWithSidebar),
    ],
  },
  {
    Component: DashboardLayout,
    path: "/user",
    children: [
      {
        Component: Profile,
        path: "/user",
      },
      ...generateRoute(userRouteWithSidebar),
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
