import React, { FC } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useNotifications } from "../../../components/NotificationsProvider";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const CardInfoHeader: FC = () => {
  const navigate = useNavigate();
  const { push } = useNotifications();

  function handleClick() {
    push({
      message: "URL is copied to clipboard!",
      type: "success",
      horizontal: "right",
      delay: 3000,
    });
    navigator.clipboard.writeText(window.location.href);
  }

  return (
    <Box sx={{ display: "flex", columnGap: 2 }}>
      <IconButton onClick={() => navigate("/")}>
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
        Card page
      </Typography>
      <IconButton onClick={handleClick}>
        <InsertLinkIcon sx={{ rotate: "-45deg" }} />
      </IconButton>
    </Box>
  );
};
