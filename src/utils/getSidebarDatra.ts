import { adminRouteWithSidebar } from "@/routes/admin.route";
import { userRouteWithSidebar } from "@/routes/userRoute";
import type { Role } from "@/types/auth.type";
import type { ISidebar } from "@/types/sidebar.type";

export const getSidebarData = (role: Role): ISidebar => {
  switch (role) {
    case "Admin":
      return adminRouteWithSidebar;
    case "User":
      return userRouteWithSidebar;
    case "Super Admin":
      return {
        navMain: [
          ...adminRouteWithSidebar.navMain,
          ...userRouteWithSidebar.navMain,
        ],
      };
    default:
      return adminRouteWithSidebar;
  }
};
