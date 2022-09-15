import React from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import styled from "@emotion/styled";

const Container = styled(Box)`
  display: flex;
  height: 100px;
  border: 1px solid cyan;
  box-sizing: border-box;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;
const NumberOfProject = styled(Box)`
  color: grey;
`;
const ShowItmes = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectsDetailsContainer = () => {
  const [age, setAge] = React.useState(10);

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <Container>
      <NumberOfProject>8 Projects out of 10</NumberOfProject>
      {/* <ShowItmes>
            <p>hey</p>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Age</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </ShowItmes> */}
    </Container>
  );
};

export default ProjectsDetailsContainer;
