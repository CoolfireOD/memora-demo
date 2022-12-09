import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ColorModeProvider } from "./components/ColorModeProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ColorModeProvider>
    <App />
  </ColorModeProvider>
);
