import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import Logo from "./Logo";
import NavLinkItem from "./NavLinkItem";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../services/auth.context";

const Container = styled(Box)`
  width: 100vw;
  /* height: 100vh; */
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
  position: fixed;
`;
const SideBarHolder = styled(Box)`
  height: 100%;
  width: 256px;
`;
const OutletContainer = styled(Box)`
  /* width: 100%; */
  flex: 1;
  border: 1px solid red;
`;

const SideMenu = ({ children }: any) => {
  const authUser = useContext(AuthContext);

  const items = ["DashBoard", "Users", "Admins", "Settings", "Profile"].map(
    (e) => <NavLinkItem name={e} key={e}></NavLinkItem>
  );

  const LogoutHandler = () => {
    authUser?.logoutUser();
  };

  return (
    <Container>
      <SideBarHolder></SideBarHolder>
      <SideBarMenu>
        <Logo></Logo>
        <LinkContainer>{items}</LinkContainer>
        <Button onClick={LogoutHandler} variant="contained">
          Logout
        </Button>
      </SideBarMenu>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </Container>
  );
};

export default SideMenu;
