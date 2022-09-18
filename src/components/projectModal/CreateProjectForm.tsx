import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { ProjectsContext } from "../../services/Projects/Projects.context";

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

const CreateProjectForm = () => {
  const project = useContext(ProjectsContext);

  const submitHandler = (data: any) => {
    project?.CreateProject({
      name: data.name,
      image: data.image[0],
      description: data.description,
    });
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  return (
    <Contianer component="form" onSubmit={handleSubmit(submitHandler)}>
      <TextFieldContainer>
        <TextField
          error={errors["name"] ? true : false}
          id="outlined-required"
          label="Project Name"
          size="small"
          fullWidth
          // type="email"
          {...register("name", {
            required: true,
          })}
        />
        {errors["name"] && (
          <ErrorPara className="text-start">
            please give the project a name
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
            // minLength: 8,
          })}
        />
        {errors["password"]?.message && (
          <ErrorPara className="text-start">
            please provide the project with a description
          </ErrorPara>
        )}
      </TextFieldContainer>

      <input
        accept="image/*"
        style={{ display: "none" }}
        id="raised-button-file"
        multiple
        type="file"
        {...register("image", {})}
      />
      <label htmlFor="raised-button-file">
        <Button
          component="span"
          variant="contained"
          color={getValues("image") ? `secondary` : `primary`}
        >
          Upload A Picture
        </Button>
      </label>
      <SubmitContianer>
        <Button variant="contained" color="secondary" type="submit">
          Add Project
        </Button>
      </SubmitContianer>
    </Contianer>
  );
};

export default CreateProjectForm;
