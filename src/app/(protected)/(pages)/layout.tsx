// src/app/(protected)/(pages)/layout.tsx
import React from "react";
import { onAuthenticateUser } from "@/actions/user";
import AppSidebar from "@/components/global/add-sidebar";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import {getRecentProjects} from "@/actions/project";
import UpperInfoBar from "@/components/global/upper-info-bar";

type Props = {
  children: React.ReactNode;
};

const layout = async ({ children }: Props) => {
  const recentProjects = await getRecentProjects();
  const checkUser = await onAuthenticateUser();

  if (!checkUser.user) {
    redirect("/sign-in");
  }

  return (
    <SidebarProvider>
      <AppSidebar user={checkUser.user} recentProjects={recentProjects.data || []} />
      <SidebarInset>
        <UpperInfoBar user={checkUser.user}>
          {children}
        </UpperInfoBar>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default layout;
