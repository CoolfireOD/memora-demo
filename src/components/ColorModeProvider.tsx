import React, {
  FC,
  createContext,
  ReactNode,
  useState,
  useContext,
} from "react";
import { getColorModeFromCache } from "../utils/getColorModeFromCache";
import useMediaQuery from "@mui/material/useMediaQuery";

type ColorModeContextValue = {
  mode: "light" | "dark";
  toggleColorMode: () => void;
  setLight: () => void;
  setDark: () => void;
};

const ColorModeContext = createContext<ColorModeContextValue | null>(null);

export const ColorModeProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const preferedMode: "light" | "dark" = prefersDarkMode ? "dark" : "light";

  const [mode, setMode] = useState<"light" | "dark">(
    getColorModeFromCache() || preferedMode
  );

  return (
    <ColorModeContext.Provider
      value={{
        mode,
        toggleColorMode: () => {
          if (mode === "light") {
            setMode("dark");
            localStorage.setItem("mode", "dark");
          } else {
            setMode("light");
            console.log(mode);
            localStorage.setItem("mode", "light");
          }
        },
        setLight: () => {
          setMode("light");
          localStorage.setItem("mode", "light");
        },
        setDark: () => {
          setMode("dark");
          localStorage.setItem("mode", "dark");
        },
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};

export function useColorMode() {
  const value = useContext(ColorModeContext);

  if (value == null)
    throw new Error(
      "Seems you forgot to wrap a component with ColorModeProvider"
    );

  return value;
}
