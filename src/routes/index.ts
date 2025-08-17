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
import { role } from "@/constant";
import { withAuth } from "@/utils/withRole";
import type { Role } from "@/types/auth.type";
import Unauthorized from "@/pages/unauthorized";
import Tours from "@/pages/Tours";
import TourDetails from "@/pages/TourDetails";
import Bookings from "@/pages/Bookings";
import Homepage from "@/pages/Homepage";
import SuccessPayment from "@/pages/Payment/SuccessPayment";
import FailedPayment from "@/pages/Payment/FailedPayment";
import CancelledPayment from "@/pages/Payment/CancelledPayment";

const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "about",
        Component: About,
      },
      {
        Component: Tours,
        path: "tours",
      },
      {
        Component: TourDetails,
        path: "tours/:id",
      },
      {
        Component: Bookings,
        path: "booking/:id",
      },
    ],
  },

  {
    path: "/payment",
    children: [
      {
        index: true,
        Component: SuccessPayment,
        path: "/payment/success",
      },
      {
        Component: FailedPayment,
        path: "/payment/failed",
      },
      {
        Component: CancelledPayment,
        path: "/payment/cancel",
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, [
      role.Admin as Role,
      role.SuperAdmin as Role,
    ]),
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
    Component: withAuth(DashboardLayout, [role.User as Role]),
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
  {
    Component: Unauthorized,
    path: "/unauthorized",
  },
]);

export default router;
