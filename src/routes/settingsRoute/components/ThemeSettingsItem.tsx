import React, { FC } from "react";
import { Box, Switch, Typography } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useColorMode } from "../../../components/ColorModeProvider";
import { SettingsItem } from "./SettingsItem";

export const ThemeSettingsItem: FC = () => {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <>
      <SettingsItem>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <DarkModeIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">Dark mode</Typography>
          <Switch
            checked={mode === "dark"}
            onChange={toggleColorMode}
            color="primary"
          />
        </Box>
      </SettingsItem>
    </>
  );
};
