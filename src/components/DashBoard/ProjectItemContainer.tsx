import React from "react";
import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";

const Container = styled(Box)`
  border: 1px solid red;
  /* height: 100px; */
  padding: 5px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
`;

const UrgentToken = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  color: white;
  padding: 1px;
  border-bottom-left-radius: 10px;
  font-size: 10px;
`;

const Title = styled(Typography)`
  font-size: 20px;
`;

const Description = styled(Typography)`
  font-size: 16px;
  color: grey;
`;

const Role = styled(Typography)`
  background-color: #414040;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
`;

const ProjecDetailsContainer = styled(Box)`
  display: flex;
`;

const ProjectDetails = styled(Box)`
  flex: 1;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled(Box)`
  margin: 10px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
`;

const TitleDesContainer = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  box-sizing: border-box;
  width: fit-content;
  height: 80%;
`;

const RoleContainer = styled(Box)`
  padding: 20px 10px;
  /* flex: 1; */
`;

const ProjectExtra = styled(Box)`
  padding: 0 10px;
  padding-bottom: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ProjectItemContainer = ({ project }: any) => {
  return (
    <Container>
      <ProjecDetailsContainer>
        <ProjectDetails>
          <ImageContainer>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/84/Image-Cavapoo_puppy.JPG"
              alt="ProjectImage"
              width="90px"
              height="90px"
            ></img>
          </ImageContainer>
          <TitleDesContainer>
            <Title>Project Name</Title>
            <Description>
              Description dkjsakjdsalkjd sadlkjs ajdklsajlfdkjaldksaj
            </Description>
          </TitleDesContainer>
        </ProjectDetails>
        <RoleContainer>
          <Role>Admin</Role>
        </RoleContainer>
      </ProjecDetailsContainer>
      <UrgentToken>Urgent</UrgentToken>
      <ProjectExtra>
        <Button variant="contained" color="error">
          View Project
        </Button>
      </ProjectExtra>
    </Container>
  );
};

export default ProjectItemContainer;
