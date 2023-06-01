import React, { FC } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface SettingsItemProps {
  sectionIcon: JSX.Element;
  sectionTitle: string;
  sectionText?: string;
  children: JSX.Element;
}

export const SettingsSection: FC<SettingsItemProps> = ({
  sectionIcon,
  sectionTitle,
  sectionText = "",
  children,
}) => {
  return (
    <Accordion
      defaultExpanded
      disableGutters
      sx={{
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
        outline: "none",

        "&::before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        sx={{
          display: "flex",
          alignItems: "center",
          padding: 2,
          gap: 2,
        }}
        expandIcon={<ExpandMoreIcon fontSize="large" />}
      >
        <Box
          sx={{
            marginRight: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          {sectionIcon}
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
            }}
            variant="h5"
          >
            {sectionTitle}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              "@media screen and (max-width: 600px)": {
                display: "none",
              },
            }}
          >
            {sectionText}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};
