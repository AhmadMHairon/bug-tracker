import React, { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box, Button, Divider } from "@mui/material";
import ProjectList from "../components/DashBoard/ProjectList";
import ProjectsDetailsContainer from "../components/DashBoard/ProjectsDetailsContainer";
import ProjectModal from "../components/projectModal/ProjectModal";
import {
  createNewProject,
  fetchUserProjects,
} from "../services/Projects/Projects.service";
import { AuthContext } from "../services/Auth/Auth.context";

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

interface ProjectProps {
  image: any;
  name: string;
  description: string;
  id: string;
}

const DashBoardPage = () => {
  const [open, setOpen] = React.useState(false);
  const [projects, setProjects] = useState<ProjectProps | null>(null);
  const authUser = useContext(AuthContext);

  useEffect(() => {
    const fetcher = async () => {
      try {
        const data = await fetchUserProjects(authUser?.authUser?.access_token);
        setProjects(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetcher();
  }, [authUser?.authUser?.access_token]);

  const submitHandler = async (data: any) => {
    try {
      const res = await createNewProject(
        {
          name: data.name,
          image: data.image[0],
          description: data.description,
        },
        authUser?.authUser?.access_token
      );

      setProjects((prev: any) => prev.concat(res));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <CreateButtonContianer>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Add Project
        </Button>
      </CreateButtonContianer>
      <Divider />
      <ProjectShowContainer>
        <ProjectsDetailsContainer></ProjectsDetailsContainer>
        {projects && <ProjectList projects={projects}></ProjectList>}
      </ProjectShowContainer>
      <ProjectModal
        open={open}
        handleClose={() => setOpen(false)}
        submitHandler={submitHandler}
      ></ProjectModal>
    </Container>
  );
};

export default DashBoardPage;
