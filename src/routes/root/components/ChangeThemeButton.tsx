import React, { FC } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorMode } from "../../../components/ColorModeProvider";

export const ChangeThemeButton: FC = () => {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <>
      {mode === "light" ? (
        <Brightness4Icon onClick={toggleColorMode} />
      ) : (
        <Brightness7Icon onClick={toggleColorMode} />
      )}
    </>
  );
};
