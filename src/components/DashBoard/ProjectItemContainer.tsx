import React from "react";
import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";

const Container = styled(Box)`
  border: 1px solid yellow;
  /* height: 100px; */
  padding: 10px;
`;

const Title = styled(Typography)`
  font-size: 20px;
`;

const Priority = styled(Typography)`
  font-size: 16px;
  color: grey;
`;

const ProjectExtra = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

const ProjectMaster = styled(Typography)`
  font-size: 20px;
`;

const ProjectItemContainer = () => {
  return (
    <Container>
      <Title>Project Name</Title>
      <Priority>Priority Urgent</Priority>
      <ProjectExtra>
        <ProjectMaster>Ahmad</ProjectMaster>
        <Button variant="contained">Add Project</Button>
      </ProjectExtra>
    </Container>
  );
};

export default ProjectItemContainer;
