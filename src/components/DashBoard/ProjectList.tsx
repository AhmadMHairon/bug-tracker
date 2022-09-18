import React, { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import ProjectItemContainer from "./ProjectItemContainer";
import { ProjectsContext } from "../../services/Projects/Projects.context";
import { fetchUserProjects } from "../../services/Projects/Projects.service";

const Container = styled(Box)`
  border: 1px solid green;
  padding: 10px;
  height: fit-content;
`;

const ProjectList = () => {
  const Projects = useContext(ProjectsContext);

  useEffect(() => {
    const fetcher = async () => {
      const data = await fetchUserProjects();
      Projects?.setProjects(data);
    };
  }, []);

  const ProjectList = Projects?.projectList?.map((project) => {
    return <ProjectItemContainer project={project} key={project.id} />;
  });

  return <Container>{ProjectList}</Container>;
};

export default ProjectList;
