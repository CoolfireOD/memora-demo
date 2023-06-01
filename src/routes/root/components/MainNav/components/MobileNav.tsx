import React, { FC, useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { ProfileAvatar } from "../../../../../components/ProfileAvatar";
import { NavItem } from "./NavItem";

export const MobileNav: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{
          height: "75px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Memora
      </Typography>
      <Divider />
      <List>
        <ListItem key={1} disablePadding sx={{ pl: 1 }}>
          <NavItem navIcon={<HomeIcon />} navText="Home" navLink="/" />
        </ListItem>
        <ListItem key={2} disablePadding sx={{ pl: 1 }}>
          <NavItem
            navIcon={<SettingsIcon />}
            navText="Settings"
            navLink="/settings"
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Paper
      sx={{
        width: "100%",
        display: "flex",
        height: "inherit",
        px: 2,
        gap: 2,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <IconButton color="inherit" onClick={handleDrawerToggle}>
        <MenuIcon />
      </IconButton>
      <NavItem
        navIcon={<ProfileAvatar />}
        navText="Profile"
        navLink="/profile"
        expanded={false}
      />
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          zIndex: 10001,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "240px",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Paper>
  );
};
