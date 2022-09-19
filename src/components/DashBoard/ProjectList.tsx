import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import ProjectItemContainer from "./ProjectItemContainer";

const Container = styled(Box)`
  border: 1px solid green;
  padding: 10px;
  height: fit-content;
`;

interface ProjectProps {
  image: any;
  name: string;
  description: string;
  id: string;
}

const ProjectList = ({ projects }: any) => {
  const ProjectList = projects.map((project: ProjectProps) => {
    return <ProjectItemContainer project={project} key={project.id} />;
  });

  return <Container>{ProjectList}</Container>;
};

export default ProjectList;
