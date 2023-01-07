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
        maxWidth: "2560px",
        p: 0,
        m: "auto",
      }}
    >
      {children}
    </Box>
  );
};
