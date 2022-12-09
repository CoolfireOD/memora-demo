import React from "react";
import { AppContainer } from "./components/AppContainer";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useColorMode } from "./components/ColorModeProvider";

const queryClient = new QueryClient();

function App() {
  const { mode } = useColorMode();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        theme={createTheme({
          palette: {
            mode,
          },
        })}
      >
        <CssBaseline />
        <AppContainer>
          <RouterProvider router={router} />
        </AppContainer>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
