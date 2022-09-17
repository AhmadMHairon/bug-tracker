import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled(Box)`
  display: flex;
  height: 100px;
  border: 1px solid cyan;
  box-sizing: border-box;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;
const NumberOfProject = styled(Box)`
  color: grey;
`;

const ProjectsDetailsContainer = () => {
  return (
    <Container>
      <NumberOfProject>8 Projects out of 10</NumberOfProject>
    </Container>
  );
};

export default ProjectsDetailsContainer;
