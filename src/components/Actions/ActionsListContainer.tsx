import React from "react";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import styled from "@emotion/styled";
import ActionItemContainer from "./ActionItemContainer";

const Container = styled(Box)`
  width: 100%;
  border: 1px solid green;
`;

const ActionsListContainer = ({ actions }: any) => {
  const list = actions.map((e: any) => (
    <ActionItemContainer action={e} key={e.id}></ActionItemContainer>
  ));
  return <Container>{list}</Container>;
};

export default ActionsListContainer;
