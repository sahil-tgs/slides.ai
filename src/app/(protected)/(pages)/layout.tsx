import React from "react";
import { onAuthenticteUser } from "module";

type Props = {
  children: React.ReactNode;
};

const layout = async ({ children }: Props) => {
  // const recent Projects = await getRecentProjects();
  const checkuser = await onAuthenticteUser();

  if (!checkUser.user) {
    redirect("/sign-in");
  }

  return(
    <SidebarProvider>
        <AppSidebar>
            
        </AppSidebar> 
    </SidebarProvider>
  ) 
};

export default layout;
