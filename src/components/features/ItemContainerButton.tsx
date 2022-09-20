import React from "react";
import BugReportIcon from "@mui/icons-material/BugReport";
import TestModal from "../tests/TestModal";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";

const MyButton = styled.button`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 2px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: 200ms ease-in-out;
  align-items: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const ButtonsContainer = styled(Box)`
  display: flex;
  align-items: center;
  & > * {
    margin: 0 5px;
  }
`;

const ItemContainerButton = ({ ModalID, ModalName }: any) => {
  const [openTestModal, setOpenTestModal] = React.useState(false);
  const [openCloseModal, setOpenCloseModal] = React.useState(false);
  const [openEditModal, setOpenEditModal] = React.useState(false);

  return (
    <>
      <ButtonsContainer>
        <MyButton onClick={() => setOpenTestModal(true)}>
          <BugReportIcon></BugReportIcon>
        </MyButton>
        <MyButton onClick={() => setOpenCloseModal(true)}>
          <CloseIcon></CloseIcon>
        </MyButton>
        <MyButton onClick={() => setOpenEditModal(true)}>
          <EditIcon></EditIcon>
        </MyButton>
      </ButtonsContainer>
      <TestModal
        ModalID={ModalID}
        ModalName={ModalName}
        open={openTestModal}
        handleClose={() => setOpenTestModal(false)}
      ></TestModal>
    </>
  );
};

export default ItemContainerButton;
