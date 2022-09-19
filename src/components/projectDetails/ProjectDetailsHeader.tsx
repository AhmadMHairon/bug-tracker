
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import styled from "@emotion/styled";
import ScenariosListContainer from "../scenarios/ScenariosListContainer";
import AssignMemberModal from "../AssignMembers/AssignMemberModal";
import AddScenarioModal from "../scenarios/AddScenarioModal";
import { serviceCreateScenario } from "../../services/Senerios/Senerios.service";
import { AuthContext } from "../../services/Auth/Auth.context";
import { fetchProjectDetails } from "../../services/Projects/Projects.service";


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

const ProjectDetailsHeader = () => {
    const navigate = useNavigate();
    const [projectDetails, setProjectDetails] = useState<any>(null);
    const { project_id } = useParams<{ project_id: string }>();
    const authUser = useContext(AuthContext);
  
    const [showScenarioModal, setShowScenarioModal] = useState(false);
    const [showMemberModal, setShowMemberModal] = useState(false);
  
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
          console.log(e);
        }
      };
      fetchItem();
    }, [project_id, navigate, authUser?.authUser?.access_token]);
  
    const addScenarioSubmitHandler = async (data: any) => {
      try {
        console.log("Check this again");
        if (project_id) {
          const res = await serviceCreateScenario(
            data,
            project_id,
            authUser?.authUser?.access_token
          );
          console.log(res);
        }
      } catch (e) {
        console.log(e);
      }
    };

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
        <Button onClick={() => setShowMemberModal(true)} variant="contained">
          Add Members
        </Button>
        <Button
          onClick={() => setShowScenarioModal(true)}
          variant="contained"
        >
          Add Scenarios
        </Button>
      </ButtonsContianer>
    </HeaderContainer>
    <Divider></Divider>
    <AssignMemberModal
      open={showMemberModal}
      handleClose={() => setShowMemberModal(false)}
      submitHandler={() => console.log("meow")}
    ></AssignMemberModal>
    <AddScenarioModal
      open={showScenarioModal}
      handleClose={() => setShowScenarioModal(false)}
      submitHandler={addScenarioSubmitHandler}
    ></AddScenarioModal>
  </Container>
  )
}

export default ProjectDetailsHeader