import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import styled from "@emotion/styled";
import { AuthContext } from "../services/Auth/Auth.context";
import AddActionModal from "../components/scenarios/AddActionModal";
import ActionsListContainer from "../components/Actions/ActionsListContainer";
import { serviceFetchActionDetails } from "../services/Actions/Action.service";
import { serviceCreateStep } from "../services/Step/Step.service";
import StepsListContianer from "../components/steps/StepsListContianer";
import AddStepModal from "../components/Actions/AddStepModal";

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

const ActionDetailsPage = () => {
  const navigate = useNavigate();
  const [actionDetails, setActionDetails] = useState<any>({});
  const { project_id, scenario_id, action_id } = useParams<{
    project_id: string;
    scenario_id: string;
    action_id: string;
  }>();
  const authUser = useContext(AuthContext);
  const [showAddStep, setShowAddStep] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetcher = async () => {
      setIsLoading(true);
      try {
        if (project_id && scenario_id && action_id) {
          const item = await serviceFetchActionDetails(
            authUser?.authUser?.access_token,
            action_id
          );
          console.log(item);
          setActionDetails(item);
        } else {
          navigate("/portal");
        }
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    fetcher();
  }, [
    authUser?.authUser?.access_token,
    scenario_id,
    project_id,
    navigate,
    action_id,
  ]);

  const addStepsSubmitHandler = async (data: any) => {
    try {
      if (action_id) {
        const res = await serviceCreateStep(
          data,
          action_id,
          authUser?.authUser?.access_token
        );
        setActionDetails((prev: any) => ({
          ...prev,
          steps: [...prev.steps, res[0]],
        }));
      }
    } catch (e) {
      console.log(e);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
            <HeaderName>{actionDetails?.name}</HeaderName>
            <HeaderDescription>{actionDetails?.description}</HeaderDescription>
          </HeaderNameAndDescription>
        </HeaderDetails>
        <ButtonsContianer>
          <Button onClick={() => setShowAddStep(true)} variant="contained">
            Add Actions
          </Button>
        </ButtonsContianer>
      </HeaderContainer>
      <Divider></Divider>
      {actionDetails.steps && actionDetails.steps.length > 1 && (
        <StepsListContianer steps={actionDetails.steps}></StepsListContianer>
      )}
      <AddStepModal
        open={showAddStep}
        handleClose={() => setShowAddStep(false)}
        submitHandler={addStepsSubmitHandler}
      ></AddStepModal>
    </Container>
  );
};

export default ActionDetailsPage;
