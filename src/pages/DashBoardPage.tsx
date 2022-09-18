import React from "react";
import styled from "@emotion/styled";
import { Box, Button, Divider } from "@mui/material";
import ProjectList from "../components/DashBoard/ProjectList";
import ProjectsDetailsContainer from "../components/DashBoard/ProjectsDetailsContainer";
import ProjectModal from "../components/projectModal/ProjectModal";

const Container = styled(Box)`
  width: 100%;
  padding: 10px;
`;

const CreateButtonContianer = styled(Box)`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ProjectShowContainer = styled(Box)`
  border: 1px solid green;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 6px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
`;

const DashBoardPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <CreateButtonContianer>
        <Button variant="contained" onClick={handleOpen}>
          Add Project
        </Button>
      </CreateButtonContianer>
      <Divider />
      <ProjectShowContainer>
        <ProjectsDetailsContainer></ProjectsDetailsContainer>
        <ProjectList></ProjectList>
      </ProjectShowContainer>
      <ProjectModal open={open} handleClose={handleClose}></ProjectModal>
    </Container>
  );
};

export default DashBoardPage;
