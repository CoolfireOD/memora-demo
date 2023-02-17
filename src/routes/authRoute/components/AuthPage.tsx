import { Box, Typography, Button } from "@mui/material";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

export const AuthPage: FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignSelf: "center",
        width: "100%",
        minHeight: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: 1,
      }}
    >
      <Typography variant="h3">Welcome to Memora</Typography>
      <Typography variant="h5">Log in with your account to continue</Typography>
      <Box sx={{ display: "flex", columnGap: 2, pt: 1 }}>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/auth/login");
          }}
        >
          Log In
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/auth/signup");
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};
