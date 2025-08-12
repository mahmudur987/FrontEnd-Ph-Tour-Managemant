import type { ISidebar } from "@/types/sidebar.type";

export const generateRoute = (data: ISidebar) => {
  return data.navMain.flatMap((item) =>
    item.items.map((subItem) => {
      return {
        path: subItem.url,
        Component: subItem.component,
      };
    })
  );
};
