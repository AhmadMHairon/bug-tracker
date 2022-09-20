import React from "react";
import { Box, Backdrop, Modal, Fade, Divider } from "@mui/material";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";
import TestForm from "./TestForm";
import CloseIcon from "@mui/icons-material/Close";

const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  background-color: #fff;
  box-shadow: 24px;
  padding: 16px;
  border-radius: 8px;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid blue;
  margin-bottom: 10px;
`;

const MyButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
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

interface StepModalProps {
  open: boolean;
  handleClose: () => void;
  ModalName: string;
  ModalID: any;
}

const TestModal = ({
  open,
  handleClose,
  ModalName,
  ModalID,
}: StepModalProps) => {
  const [showForm, setShowForm] = React.useState(false);
  console.log("ModalID", ModalID);
  console.log("ModalName", ModalName);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <ModalContainer>
          <Header>
            <h2 id="transition-modal-title">tests</h2>
            <MyButton onClick={() => setShowForm((state) => !state)}>
              {!showForm && <AddIcon></AddIcon>}
              {showForm && <CloseIcon></CloseIcon>}
            </MyButton>
          </Header>
          {showForm && (
            <>
              <TestForm ModalName={ModalName} ModalID={ModalID}></TestForm>
              <Divider></Divider>
            </>
          )}
        </ModalContainer>
      </Fade>
    </Modal>
  );
};

export default TestModal;
