import React, { useContext } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { emailValidator } from "./validators/validator";
import { AuthContext } from "../../services/auth.context";

const Container = styled(Box)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  box-sizing: border-box;
`;
const TextFieldContainer = styled(Box)`
  width: 100%;
`;

const ErrorPara = styled(Typography)`
  text-align: start;
`;

const LoginForm = () => {
  const auth = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const loginHandler = async (data: any) => {
    console.log(data);
    await auth?.loginUser(data);
  };

  return (
    <Container component="form" onSubmit={handleSubmit(loginHandler)}>
      <TextFieldContainer>
        <TextField
          error={errors["email"] ? true : false}
          id="outlined-required"
          label="Email"
          size="small"
          fullWidth
          // type="email"
          {...register("email", {
            required: true,
            validate: emailValidator || "please use a valid email",
          })}
        />
        {errors["email"] && (
          <ErrorPara className="text-start">please use a valid email</ErrorPara>
        )}
      </TextFieldContainer>
      <TextFieldContainer>
        <TextField
          error={errors["password"] ? true : false}
          id="outlined-required"
          label="Password"
          size="small"
          fullWidth
          type="password"
          {...register("password", {
            required: "password is required",
            // minLength: 8,
          })}
        />
        {errors["password"]?.message && (
          <ErrorPara className="text-start">password required</ErrorPara>
        )}
      </TextFieldContainer>
      <Link to={"/register"}>Register A New Account</Link>
      <Button variant="contained" type="submit">
        Login
      </Button>
    </Container>
  );
};

export default LoginForm;
