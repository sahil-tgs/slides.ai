import { Project, User } from "@prisma/client";
import React from "react";

type Props = {
  recentProjects: Project[];
  user: User;
};

const AppSidebar = ({ recentProjects, user }: Props) => {
  return <div>AppSidebar</div>;
};

export default AppSidebar;
