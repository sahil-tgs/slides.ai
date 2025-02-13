// src/app/(protected)/(pages)/layout.tsx
import React from "react";
import { onAuthenticateUser } from "@/actions/user";
import AppSidebar from "@/components/global/add-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const layout = async ({ children }: Props) => {
  // const recent Projects = await getRecentProjects();
  const checkUser = await onAuthenticateUser();

  if (!checkUser.user) {
    redirect("/sign-in");
  }

  return (
    <SidebarProvider>
      <AppSidebar></AppSidebar>
    </SidebarProvider>
  );
};

export default layout;
