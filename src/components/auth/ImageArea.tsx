import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled(Box)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const ImageContainer = styled(Box)`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageArea = () => {
  return (
    <Container>
      <ImageContainer>
        <img src="auth.svg" alt="auth"></img>
      </ImageContainer>
    </Container>
  );
};

export default ImageArea;
