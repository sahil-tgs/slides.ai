"use client";

import React from "react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ Use usePathname instead
import { LucideHome, LucideLayoutTemplate, LucideSettings, LucideTrash } from "lucide-react";

const NavMain = ({
                   items,
                 }: {
  items: {
    title: string; // ✅ Changed from "item" to "title"
    url: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) => {
  const pathname = usePathname(); // ✅ Get current route

  return (
      <SidebarGroup className="p-0">
        <SidebarMenu>
          {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className={`${pathname.includes(item.url) && "bg-muted"}`}
                >
                  <Link href={item.url} className={`text-lg ${pathname.includes(item.url) ? "font-bold" : ""}`}>
                    <item.icon className="text-lg" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
  );
};

export default NavMain;
