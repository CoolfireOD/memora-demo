import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";
import { SettingsSection } from "./components/SettingsSection";
import { ThemeSettingsItem } from "./components/ThemeSettingsItem";

export const SettingsRoute: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          letterSpacing: 1,
          width: "100%",
          textAlign: "center",
        }}
      >
        Settings
      </Typography>
      <SettingsSection
        sectionIcon={<PaletteIcon fontSize="large" />}
        sectionTitle="Theme Settings"
        sectionText="Select from a variety settings to customize your
                        experience."
      >
        <ThemeSettingsItem />
      </SettingsSection>
    </Box>
  );
};
