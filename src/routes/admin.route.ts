import AddDivision from "@/pages/Admin/AddDivision";
import AddTour from "@/pages/Admin/AddTour";
import AddTourType from "@/pages/Admin/AddTourType";
import Analytics from "@/pages/Admin/Analytics";
import type { ISidebar } from "@/types/sidebar.type";

export const adminRouteWithSidebar: ISidebar = {
  navMain: [
    {
      title: "Dashboard",
      items: [
        {
          title: "Analytics",
          url: "/admin/analytics",
          component: Analytics,
        },
      ],
    },
    {
      title: "Tour",
      items: [
        {
          title: "Add Tour",
          url: "/admin/add-tour",
          component: AddTour,
        },
        {
          title: "Tour Type",
          url: "/admin/add-tour-type",
          component: AddTourType,
        },
        {
          title: "Division",
          url: "/admin/add-division",
          component: AddDivision,
        },
      ],
    },
  ],
};
