import React, { useContext } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../services/auth.context";
import { emailValidator, passWordValidator } from "./validators/validator";

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

const RegisterForm = () => {
  const auth = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const RegisterHandler = async (data: any) => {
    console.log(data);
    await auth?.registerUser(data);
  };

  return (
    <Container component="form" onSubmit={handleSubmit(RegisterHandler)}>
      <TextFieldContainer>
        <TextField
          error={errors["name"] ? true : false}
          id="outlined-required"
          label="Name"
          size="small"
          fullWidth
          {...register("name", {
            required: true,
          })}
        />
        {errors["name"] && (
          <ErrorPara className="text-start">please use a valid email</ErrorPara>
        )}
      </TextFieldContainer>
      <TextFieldContainer>
        <TextField
          error={errors["email"] ? true : false}
          id="outlined-required"
          label="Email"
          size="small"
          fullWidth
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
            minLength: 8,
            validate:
              passWordValidator ||
              "a password above 8 characters which contain at least one numeric digit and a special character.",
          })}
        />
        {errors["password"]?.message && (
          <ErrorPara className="text-start">password required</ErrorPara>
        )}
      </TextFieldContainer>
      <Link to={"/login"}>Already Have An Account</Link>
      <Button variant="contained" type="submit">
        Register
      </Button>
    </Container>
  );
};

export default RegisterForm;
