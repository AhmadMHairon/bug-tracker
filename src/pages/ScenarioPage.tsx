
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import styled from "@emotion/styled";
import { AuthContext } from "../services/Auth/Auth.context";
import ScenariosListContainer from "../components/scenarios/ScenariosListContainer";
import AddScenarioModal from "../components/scenarios/AddScenarioModal";
import AssignMemberModal from "../components/AssignMembers/AssignMemberModal";
import { serviceCreateScenario, serviceFetchScenarioDetails } from "../services/Senerios/Senerios.service";



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

const ScenarioPage = () => {
  const navigate = useNavigate();
  const [scenarioDetails, setScenarioDetails] = useState<any>(null);
  const { project_id, scenario_id } = useParams<{ project_id: string, scenario_id: string }>();
  const authUser = useContext(AuthContext);
  const [showAddAction, setShowAddAction] = useState(false);

  useEffect(() => {
    const fetcher = async () => {
        try {
            if (project_id && scenario_id){
                const item = await serviceFetchScenarioDetails(authUser?.authUser?.access_token, scenario_id)
                console.log(item)
                setScenarioDetails(item)
            }
        }catch(e){
            console.log(e)
        }
    }
    fetcher()
  },[])

  const addActionSubmitHandler = async (data: any) => {
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
    <div>ScenarioPage</div>
  )
}

export default ScenarioPage