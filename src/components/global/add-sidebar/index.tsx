"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Project, User } from "@prisma/client";
import React from "react";
import NavMain from "@/components/global/add-sidebar/NavMain"; // ✅ Corrected import
import { data } from "@/lib/constants";
import RecentOpen from "@/components/global/add-sidebar/recent-open";
import NavFooter from "@/components/global/add-sidebar/nav-footer"; // ✅ Import data properly

const AppSidebar = ({
                      recentProjects,
                      user,
                      ...props
                    }: {
  recentProjects: Project[];
} & { user: User } & React.ComponentProps<typeof Sidebar>) => {
  return (
      <Sidebar collapsible="icon" className="max-w-[212px] bg-surface-200" {...props}>
          <SidebarHeader className="pt-6 px-2 pb-0">
              <SidebarMenuButton
                  size={"lg"}
                  className="data-[state=open]:text-sidebar-foreground"
              >
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-foreground">
                      <Avatar className="h-10 w-10 rounded-full">
                          <AvatarImage src={"/vercel.svg"} alt="slides-logo" />
                          <AvatarFallback className="rounded-lg">VI</AvatarFallback>
                      </Avatar>
                  </div>
                  <span className="truncate text-text-primary text-3xl font-semibold">
        Slides.ai
      </span>
              </SidebarMenuButton>
          </SidebarHeader>

          <SidebarContent className="px-2 mt-10 gap-y-6">
              <NavMain items={data.navMain} />
              <RecentOpen recentProjects={recentProjects}/>
          </SidebarContent>

          <SidebarFooter>
              <NavFooter prismaUser={user}/>
          </SidebarFooter>
      </Sidebar>
  );
};

export default AppSidebar;
