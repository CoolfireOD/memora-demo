import React, { FC } from "react";
import { Paper, Divider } from "@mui/material";
import { ProfileAvatar } from "../../../../../components/ProfileAvatar";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavItem } from "./NavItem";

export const DesktopNav: FC = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        pt: 4,
        width: "100%",
        height: "100%",
        maxWidth: "75px",
        alignItems: "center",
      }}
      elevation={3}
    >
      <NavItem
        navIcon={<HomeIcon />}
        navText="Home"
        navLink="/"
        expanded={false}
      />
      <NavItem
        navIcon={<SettingsIcon />}
        navText="Settings"
        navLink="/settings"
        expanded={false}
      />
      <Divider sx={{ width: "100%" }} />
      <NavItem
        navIcon={<ProfileAvatar />}
        navText="Profile"
        navLink="/profile"
        expanded={false}
      />
    </Paper>
  );
};
