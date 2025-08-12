import Bookings from "@/pages/User/Bookings";
import Profile from "@/pages/User/Profile";
import type { ISidebar } from "@/types/sidebar.type";

export const userRouteWithSidebar: ISidebar = {
  navMain: [
    {
      title: "Dashboard",
      items: [
        {
          title: "profile",
          url: "/user/profile",
          component: Profile,
        },
        {
          title: "bookings",
          url: "/user/bookings",
          component: Bookings,
        },
      ],
    },
  ],
};
