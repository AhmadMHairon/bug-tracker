import React from "react";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import styled from "@emotion/styled";
import ScenarioItemContainer from "./ScenarioItemContainer";

const Container = styled(Box)`
  width: 100%;
  border: 1px solid green;
`;

const ScenariosListContainer = ({ scenarios }: any) => {
  console.log("scenarios", scenarios);
  const list = scenarios.map((e: any) => (
    <ScenarioItemContainer scenario={e} key={e.id}></ScenarioItemContainer>
  ));
  return <Container>{list}</Container>;
};

export default ScenariosListContainer;
