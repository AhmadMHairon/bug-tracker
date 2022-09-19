import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProjectDetails } from "../services/ProjectDetails/ProjectDetails.service";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import styled from "@emotion/styled";
import { AuthContext } from "../services/Auth/Auth.context";
import ScenariosListContainer from "../components/scenarios/ScenariosListContainer";

const Container = styled(Box)`
  height: 100%;
  width: 100%;
`;

const HeaderContainer = styled(Box)`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
const HeaderDetails = styled(Box)`
  height: 100%;
  flex: 1;
  display: flex;
  border: 1px solid yellow;
`;
const ImageContainer = styled(Box)`
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
const HeaderNameAndDescription = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
`;

const HeaderName = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const HeaderDescription = styled(Typography)`
  font-size: 16px;
  color: grey;
`;

const ButtonsContianer = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 10px;
  & > * {
    margin: 5px;
  }
`;

const ProjectDetailPage = () => {
  const navigate = useNavigate();
  const [projectDetails, setProjectDetails] = useState<any>(null);
  const { project_id } = useParams<{ project_id: string }>();
  const authUser = useContext(AuthContext);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        if (project_id) {
          const item = await fetchProjectDetails(
            project_id,
            authUser?.authUser?.access_token
          );
          console.log(item);
          setProjectDetails(item);
        } else {
          navigate("/portal");
        }
      } catch (e) {
        console.log();
      }
    };
    fetchItem();
  }, [project_id, navigate, authUser?.authUser?.access_token]);

  return (
    <Container>
      <HeaderContainer>
        <HeaderDetails>
          <ImageContainer>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/84/Image-Cavapoo_puppy.JPG"
              alt="ProjectImage"
              height="100px"
            ></img>
          </ImageContainer>
          <HeaderNameAndDescription>
            <HeaderName>{projectDetails?.name}</HeaderName>
            <HeaderDescription>{projectDetails?.description}</HeaderDescription>
          </HeaderNameAndDescription>
        </HeaderDetails>
        <ButtonsContianer>
          <Button variant="contained">Add Members</Button>
          <Button variant="contained">Add Scenarios</Button>
        </ButtonsContianer>
      </HeaderContainer>
      <Divider></Divider>
      <ScenariosListContainer></ScenariosListContainer>
    </Container>
  );
};

export default ProjectDetailPage;
