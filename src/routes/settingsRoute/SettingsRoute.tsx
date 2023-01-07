import { Box, Paper, Switch, Typography } from "@mui/material";
import React, { FC } from "react";
import { useColorMode } from "../../components/ColorModeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import { useForm } from "react-hook-form";

type Inputs = {
  notifications: boolean;
};

export const SettingsRoute: FC = () => {
  const { mode, toggleColorMode } = useColorMode();
  const { register, watch } = useForm<Inputs>();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        rowGap: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontStyle: "bold",
          fontWeight: 700,
          letterSpacing: 1,
          textIndent: "1rem",
        }}
      >
        Settings
      </Typography>
      <Paper
        elevation={3}
        sx={{
          p: 6,
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
        }}
      >
        <Box sx={{ display: "flex", columnGap: 2, alignItems: "center" }}>
          <DarkModeIcon />
          <Typography variant="h5">Dark mode</Typography>
          <Switch defaultChecked={mode === "dark"} onChange={toggleColorMode} />
        </Box>
        <Box sx={{ display: "flex", columnGap: 2, alignItems: "center" }}>
          {watch("notifications") ? (
            <NotificationsIcon />
          ) : (
            <NotificationsOffIcon />
          )}
          <Typography variant="h5">Notifications</Typography>
          <Switch defaultChecked={true} {...register("notifications")} />
        </Box>
      </Paper>
    </Box>
  );
};
