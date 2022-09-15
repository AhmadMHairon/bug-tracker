import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Logo from "./Logo";
import NavLinkItem from "./NavLinkItem";
import { Outlet } from "react-router-dom";

const Container = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
const LinkContainer = styled(Box)`
  width: 100%;
  padding: 16px 8px;
`;

const SideBarMenu = styled(Box)`
  height: 100vh;
  width: 256px;
  background-color: #1f2937;
`;
const OutletContainer = styled(Box)`
  /* width: 100%; */
  flex: 1;
  border: 1px solid red;
`;

const SideMenu = ({ children }: any) => {
  const items = ["DashBoard", "Users", "Admins", "Settings", "Profile"].map(
    (e) => <NavLinkItem name={e} key={e}></NavLinkItem>
  );
  return (
    <Container>
      <SideBarMenu>
        <Logo></Logo>
        <LinkContainer>{items}</LinkContainer>
      </SideBarMenu>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </Container>
  );
};

export default SideMenu;
