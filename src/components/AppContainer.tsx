import React, { FC, ReactNode } from "react";
import { Box } from "@mui/material";

type AppContainerProps = {
  children?: ReactNode;
};

export const AppContainer: FC<AppContainerProps> = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1440px",
        p: 0,
        m: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      {children}
    </Box>
  );
};
