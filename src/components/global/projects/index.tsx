import React from 'react';
import {Project} from "@prisma/client";
import {motion} from "framer-motion";
import {containerVariants} from "@/lib/constants";
import ProjectCard from "@/components/global/project-card";

type Props = {
    projects: Project[];
}

const Projects = ({projects}: Props) => {
    return (
      <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variant={containerVariants}
          initial="hidden"
          animate="visible"
      >
          {projects.map((project, id) => (<ProjectCard
              key={id}
              projectId={project?.id}
              title={project?.title}
              createdAt={project?.createAt.toString()}
              isDeleted={project?.isDeleted}
              slideData={project?.slides}
              src={project.thumbnail || 'https://images.unsplash.com/photo-1739533018538-a2aee30317ad?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          />))}
      </motion.div>
    );
};

export default Projects;