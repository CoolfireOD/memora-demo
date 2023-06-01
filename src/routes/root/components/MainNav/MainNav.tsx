import React, { FC } from "react";
import { Box } from "@mui/material";
import { DesktopNav } from "./components/DesktopNav";
import { MobileNav } from "./components/MobileNav";
import { useMediaQuery } from "@mui/material";
import { Theme } from "@mui/material/styles";

export const MainNav: FC = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down(601)
  );

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "75px",
        height: "inherit",
        zIndex: 10000,
        position: "relative",

        "@media screen and (max-width: 600px)": {
          width: "100%",
          maxWidth: "100%",
          height: "75px",
          top: 0,
          position: "sticky",
        },
      }}
    >
      {isSmallScreen ? <MobileNav /> : <DesktopNav />}
    </Box>
  );
};
