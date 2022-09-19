import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import styled from "@emotion/styled";
import { AuthContext } from "../services/Auth/Auth.context";
import { serviceFetchScenarioDetails } from "../services/Senerios/Senerios.service";
import { serviceCreateAction } from "../services/Actions/Action.service";
import AddActionModal from "../components/scenarios/AddActionModal";
import ActionsListContainer from "../components/Actions/ActionsListContainer";
import { serviceFetchStepDetails } from "../services/Step/Step.service";

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

const StepDetailsPage = () => {
  const navigate = useNavigate();
  const [stepDetails, setStepDetails] = useState<any>({});
  const { project_id, scenario_id, action_id, step_id } = useParams<{
    project_id: string;
    scenario_id: string;
    action_id: string;
    step_id: string;
  }>();
  const authUser = useContext(AuthContext);
  const [showAddTest, setShowAddTest] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetcher = async () => {
      setIsLoading(true);
      try {
        if (project_id && scenario_id && action_id && step_id) {
          const item = await serviceFetchStepDetails(
            step_id,
            authUser?.authUser?.access_token
          );
          console.log(item);
          setStepDetails(item);
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
    step_id,
  ]);

  const addActionSubmitHandler = async (data: any) => {
    try {
      if (project_id) {
        const res = await serviceCreateAction(
          data,
          project_id,
          authUser?.authUser?.access_token
        );
        setStepDetails((prev: any) => ({
          ...prev,
          tests: [...prev.tests, res[0]],
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
            <HeaderName>{stepDetails?.name}</HeaderName>
            <HeaderDescription>{stepDetails?.description}</HeaderDescription>
          </HeaderNameAndDescription>
        </HeaderDetails>
        <ButtonsContianer>
          <Button onClick={() => setShowAddTest(true)} variant="contained">
            Add Actions
          </Button>
        </ButtonsContianer>
      </HeaderContainer>
      <Divider></Divider>
      {/* {stepDetails.tests && (
        <TestsListContainer tests={stepDetails.steps}></TestsListContainer>
      )} */}

      <AddActionModal
        open={showAddTest}
        handleClose={() => setShowAddTest(false)}
        submitHandler={addActionSubmitHandler}
      ></AddActionModal>
    </Container>
  );
};

export default StepDetailsPage;
