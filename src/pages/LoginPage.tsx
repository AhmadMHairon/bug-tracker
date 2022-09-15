import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import ImageArea from "../components/auth/ImageArea";
import LoginForm from "../components/auth/LoginForm";

const Container = styled(Box)`
  display: flex;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a2038;
`;
const FormContainer = styled(Box)`
  height: 400px;
  width: 800px;
  background-color: #fcfcfc;
  border-radius: 16px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  display: flex;
  margin: 1rem;
  align-items: center;
`;
const Dash = styled(Box)`
  height: 70%;
  width: 1px;
  background-color: black;
`;

const LoginPage = () => {
  return (
    <Container>
      <FormContainer>
        <ImageArea></ImageArea>
        <Dash></Dash>
        <LoginForm></LoginForm>
      </FormContainer>
    </Container>
  );
};

export default LoginPage;
