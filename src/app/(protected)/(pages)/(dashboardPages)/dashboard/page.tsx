import { getAllProjects } from "@/actions/project";
import React from "react";
import NotFound from "@/components/global/not-found";
import ProjectCard from "@/components/global/project-card";

const DashboardPage = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const allProjects = await getAllProjects();
  return (
    <div className="w-full flex flex-col gap-6 relative md:p-0 p-4">
      <div className="flex flex-col-reverse items-start w-full gap-6 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-semibold dark:text-primary backdrop-blur-lg">
            Projects
          </h1>
          <p className="text-base font-normal dark:text-secondary">
            All of your work in one place
          </p>
        </div>
      </div>
      {/* {projects} */}
      <ProjectCard/>
      {allProjects.data && allProjects.data.length > 0 ? <Projects projects={allProject.data}/> : <NotFound/>}
    </div>
  );
};

export default DashboardPage;
