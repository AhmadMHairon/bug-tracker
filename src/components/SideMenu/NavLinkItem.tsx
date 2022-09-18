import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useLocation } from "react-router-dom";

// import {Link}

type PropsTypes = {
  name: string;
};

const MyLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const Container = styled(Box)`
  width: 240px;
  height: 40px;
  padding: 8px;
  color: #d1d5db;
  display: flex;
  align-items: center;
  border-radius: 0.375rem;
  transition: 100ms linear;
  margin: 4px 0;

  &:hover {
    background-color: #111827;
    color: white;
    background-color: #374151;
  }
  &.active {
    background-color: #111827;
    color: white;
  }
`;

const IconHolder = styled(Box)`
  margin-right: 12px;
`;

interface Person {
  dashboard: any;
  users: any;
  admins: any;
  settings: any;
  profile: any;
}

const NavLinkItem = ({ name }: PropsTypes) => {
  const location = useLocation();
  const searcher: Person = {
    dashboard: <HomeIcon />,
    users: <GroupIcon />,
    admins: <AdminPanelSettingsIcon />,
    settings: <SettingsIcon />,
    profile: <AccountBoxIcon />,
  };

  const str = name.toLowerCase() as string;

  return (
    <MyLink to={`${name.toLowerCase() === "dashboard" ? "" : name}`}>
      <Container
        className={
          location.pathname.toLowerCase().includes(name.toLocaleLowerCase()) ||
          (location.pathname === "/portal" &&
            name.toLowerCase() === "dashboard")
            ? "active"
            : ""
        }
      >
        <IconHolder>
          {searcher[str as keyof Person] ? (
            searcher[str as keyof Person]
          ) : (
            <HomeIcon></HomeIcon>
          )}
        </IconHolder>
        {name}
      </Container>
    </MyLink>
  );
};

export default NavLinkItem;
