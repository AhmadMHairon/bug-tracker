import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import ProjectItemContainer from "./ProjectItemContainer";
import { ProjectsContext } from "../../services/Projects/Projects.context";

const Container = styled(Box)`
  border: 1px solid green;
  padding: 10px;
  height: fit-content;
`;

const ProjectList = () => {
  const Projects = useContext(ProjectsContext);
  console.log(Projects?.projectList);

  const ProjectList = Projects?.projectList?.map((project) => {
    return (
      <>
        <ProjectItemContainer project={project} key={project.id} />;
        <img
          src={`https://3404-2001-16a2-ce63-9900-14b9-fe82-ff2b-eafa.eu.ngrok.io/storage/projects/image/potato`}
        ></img>
        <div>{project.name}</div>
      </>
    );
  });

  return (
    <Container>
      <ProjectItemContainer></ProjectItemContainer>
      {ProjectList}
    </Container>
  );
};

export default ProjectList;
