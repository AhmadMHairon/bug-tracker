import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import ProjectItemContainer from "./ProjectItemContainer";

const Container = styled(Box)`
  border: 1px solid green;
  padding: 10px;
`;

const ProjectList = () => {
  return (
    <Container>
      <ProjectItemContainer></ProjectItemContainer>
    </Container>
  );
};

export default ProjectList;
