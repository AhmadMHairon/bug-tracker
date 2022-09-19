import React from "react";
import { Box, Backdrop, Modal, Fade } from "@mui/material";
import styled from "@emotion/styled";
import AddStepForm from "./AddStepForm";

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

interface StepModalProps {
  open: boolean;
  handleClose: () => void;
  submitHandler: (data: any) => Promise<void>;
}

const AddStepModal = ({ open, handleClose, submitHandler }: StepModalProps) => {
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
            <h2 id="transition-modal-title">Create Scenario</h2>
          </Header>
          <AddStepForm submitHandler={submitHandler}></AddStepForm>
        </ModalContainer>
      </Fade>
    </Modal>
  );
};

export default AddStepModal;
