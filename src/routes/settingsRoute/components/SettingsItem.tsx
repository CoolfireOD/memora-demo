import React, { FC } from "react";
import { Paper } from "@mui/material";

interface SettingsItemProps {
  children: JSX.Element;
}

export const SettingsItem: FC<SettingsItemProps> = ({ children }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        px: 4,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: 8,
      }}
    >
      {children}
    </Paper>
  );
};
