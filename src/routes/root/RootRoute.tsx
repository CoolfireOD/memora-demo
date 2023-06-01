import React, { FC } from "react";
import { Box } from "@mui/material";
import { MainNav } from "./components/MainNav/MainNav";
import { Outlet } from "react-router-dom";
import { AddDataCardButton } from "./components/AddDataCardButton";

export const RootRoute: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",

        "@media screen and (max-width: 600px)": {
          flexDirection: "column",
        },
      }}
    >
      <MainNav />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          p: 4,
          "@media screen and (max-width: 600px)": {
            p: 2,
          },
          position: "relative",
        }}
      >
        {" "}
        <AddDataCardButton />
        <Outlet />
      </Box>
    </Box>
  );
};
