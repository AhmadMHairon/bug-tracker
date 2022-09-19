import React from "react";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import styled from "@emotion/styled";
import ScenarioItemContainer from "./ScenarioItemContainer";

const Container = styled(Box)`
  width: 100%;
  border: 1px solid green;
`;

const ScenariosListContainer = () => {
  return (
    <Container>
      <ScenarioItemContainer />
    </Container>
  );
};

export default ScenariosListContainer;
