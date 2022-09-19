import React from "react";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import styled from "@emotion/styled";
import StepItemContainer from "./StepItemContainer";

const Container = styled(Box)`
  width: 100%;
  border: 1px solid green;
`;

const StepsListContianer = ({ steps }: any) => {
  const list = steps.map((e: any) => (
    <StepItemContainer step={e} key={e.id}></StepItemContainer>
  ));
  return <Container>{list}</Container>;
};

export default StepsListContianer;
