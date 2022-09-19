import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";



const Contianer = styled(Box)`
  height: 100%;
  width: 100%;
`;

const TextFieldContainer = styled(Box)`
  width: 100%;
  margin: 15px 0;
`;

const ErrorPara = styled(Typography)`
  text-align: start;
`;

const SubmitContianer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const AddScenarioForm = ({submitHandler}: any) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return   <Contianer component="form" onSubmit={handleSubmit(submitHandler)}>
  <TextFieldContainer>
    <TextField
      error={errors["name"] ? true : false}
      id="outlined-required"
      label="Scenario Name"
      size="small"
      fullWidth
      {...register("name", {
        required: true,
      })}
    />
    {errors["name"] && (
      <ErrorPara className="text-start">
        please give the scenario a name
      </ErrorPara>
    )}
  </TextFieldContainer>
  <TextFieldContainer>
    <TextField
      error={errors["description"] ? true : false}
      id="outlined-required"
      label="Short Description"
      size="small"
      fullWidth
      type="text"
      {...register("description", {
        required: true,
      })}
    />
    {errors["password"]?.message && (
      <ErrorPara className="text-start">
        please provide the scenario with a description
      </ErrorPara>
    )}
  </TextFieldContainer>
  <SubmitContianer>
    <Button variant="contained" color="secondary" type="submit">
      Add Scenario
    </Button>
  </SubmitContianer>
</Contianer>
};

export default AddScenarioForm;
