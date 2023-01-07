import React, { FC } from "react";
import { Box, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router";

export const AdditionalIcons: FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        columnGap: 1,
        "@media screen and (max-width: 600px)": {
          display: "none",
        },
      }}
    >
      <IconButton sx={{ width: "56px" }}>
        <NotificationsIcon />
      </IconButton>
      <IconButton
        sx={{ width: "56px" }}
        onClick={() => {
          navigate("/settings");
        }}
      >
        <SettingsIcon />
      </IconButton>
    </Box>
  );
};
