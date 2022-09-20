import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { serviceCreateTest } from "../../services/Tests/Test.service";

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

const TestForm = ({ ModalName, ModalID }: any) => {
  const SubmitTest = (data: any) => {
    console.log({ ...data, ModalID, ModalName });
    serviceCreateTest({ ...data, ModalID, ModalName });
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <Contianer component="form" onSubmit={handleSubmit(SubmitTest)}>
      <TextFieldContainer>
        <TextField
          error={errors["name"] ? true : false}
          id="outlined-required"
          label="Test Name"
          size="small"
          fullWidth
          {...register("name", {
            required: true,
          })}
        />
        {errors["name"] && (
          <ErrorPara className="text-start">
            please give the step a name
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
            please provide the step with a description
          </ErrorPara>
        )}
      </TextFieldContainer>
      <InputLabel id="demo-simple-select-label">Status</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="type"
        defaultValue={"passed"}
        {...register("type", {
          required: true,
        })}
      >
        <MenuItem value={"passed"}>Passed</MenuItem>
        <MenuItem value={"failed"}>Failed</MenuItem>
      </Select>

      <SubmitContianer>
        <Button variant="contained" color="secondary" type="submit">
          Add Scenario
        </Button>
      </SubmitContianer>
    </Contianer>
  );
};

export default TestForm;
