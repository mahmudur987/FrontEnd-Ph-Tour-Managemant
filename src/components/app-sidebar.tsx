import * as React from "react";
import { GalleryVerticalEnd } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { adminRouteWithSidebar } from "@/routes/admin.route";
import { userRouteWithSidebar } from "@/routes/userRoute";
import { useGetProfileQuery } from "@/redux/features/auth/auth.api";
import type { ISidebar } from "@/types/sidebar.type";
import { is } from "zod/v4/locales";
import { Link } from "react-router";
const getSidebarData = (role: string): ISidebar => {
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
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: UserInfo, isLoading, isError } = useGetProfileQuery({});
  const userRole = UserInfo?.data.role;
  console.log(userRole);

  const data = getSidebarData(userRole as string);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Documentation</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a className="font-medium">{item.title}</a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild>
                          <Link to={item.url}>{item.title}</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
