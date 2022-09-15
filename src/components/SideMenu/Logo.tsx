import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const Container = styled(Box)`
  width: 100%;
  background-color: #111827;
  box-sizing: border-box;
  height: 64px;
  padding: 0 16px;
  display: flex;
  align-items: center;
`;

const Logo = () => {
  return (
    <Container>
      <img
        src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
        alt="Logo"
        height={32}
      ></img>
    </Container>
  );
};

export default Logo;
