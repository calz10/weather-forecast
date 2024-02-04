"use client";

import { Topbar } from "@/components";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useCallback } from "react";
import { slices } from "@/lib";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  const handleLogout = useCallback(
    () => dispatch(slices.user.actions.logoutThunk()),
    [dispatch]
  );
  return (
    <div className="h-screen w-full flex flex-col items-stretch relative">
      <Topbar onLogout={handleLogout} />
      <div className="relative flex-1 flex overflow-hidden">
        <div className="flex-1 relative overflow-x-hidden h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
