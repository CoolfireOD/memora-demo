import React, { FC } from "react";
import { IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface NavItemProps {
  navIcon: JSX.Element;
  navText: string;
  navLink: string;
  expanded?: boolean;
}

export const NavItem: FC<NavItemProps> = ({
  navIcon,
  navText,
  navLink,
  expanded = true,
}) => {
  const navigate = useNavigate();

  return (
    <IconButton
      onClick={() => {
        navigate(navLink);
      }}
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 1,
        gap: 2,
        alignItems: "center",
      }}
    >
      {navIcon}
      <Typography
        variant="h6"
        sx={{
          display: expanded ? "block" : "none",
        }}
      >
        {navText}
      </Typography>
    </IconButton>
  );
};
