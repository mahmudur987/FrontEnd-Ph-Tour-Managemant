import { useGetProfileQuery } from "@/redux/features/auth/auth.api";
import type { Role } from "@/types/auth.type";
import { type ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRoles?: Role[]) => {
  return function AuthWrapper() {
    const { data, isLoading } = useGetProfileQuery(null);
    if (!requiredRoles) {
      return <Component />;
    }
    if (!isLoading && !data?.data?.email) {
      return <Navigate to="/login" />;
    }

    if (
      !isLoading &&
      requiredRoles &&
      !requiredRoles.includes(data?.data?.role as Role)
    ) {
      return <Navigate to="/unauthorized" />;
    }

    return <Component />;
  };
};
