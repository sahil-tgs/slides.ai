// src/app/(protected)/layout.tsx
export const dynamic = "force-dynamic";
import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode
};

// Component name should be capitalized
const Layout = async ({ children }: Props) => {
  const auth = await onAuthenticateUser();

  if (!auth.user) {
    redirect("/sign-in");
  }

  return (
      <div className="w-full min-h-screen">
        {children}
      </div>
  );
};

export default Layout;