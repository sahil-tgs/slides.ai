"use client";

import React from "react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Clock } from "lucide-react"; // Example icon import, adjust as needed

const NavMain = ({
  items,
}: {
  items: {
    item: string;
    url: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) => {
  const params = useParams();
  const pathname = params?.slug || ""; // Adjust according to your routing setup

  return (
    <SidebarGroup className="p-0">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            asChild
            tooltip={"Test"}
            className={`${pathname.includes("TEST") ? "bg-background-80" : ""}`}
          >
            <Link
              href="/TEST"
              className={`text-lg ${
                pathname.includes("TEST") ? "font-bold" : ""
              }`}
            >
              <Clock className="text-lg" />
              <span>Test Sidebar Item</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;
