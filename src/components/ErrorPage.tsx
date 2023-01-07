import { Box, Typography, Link } from "@mui/material";
import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as unknown;
  console.error(error);

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        height: "100%",
        bgcolor: "white",
        top: 0,
        left: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">There&apos;s been a glitch...</Typography>
      <Typography
        variant="h4"
        sx={{
          maxWidth: "800px",
        }}
      >
        We&apos;re not quite sure what went wrong. You can go back or try some
        of this helpful links:{" "}
      </Typography>
      <Typography
        variant="h4"
        sx={{ display: "flex", columnGap: 4, cursor: "pointer" }}
      >
        {" "}
        <Link
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Link>{" "}
        <Link
          onClick={() => {
            navigate("/profile");
          }}
        >
          Profile
        </Link>{" "}
        <Link
          onClick={() => {
            navigate("/notifications");
          }}
        >
          News
        </Link>
      </Typography>
    </Box>
  );
}
