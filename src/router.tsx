import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RootRoute } from "./routes/root";
import { AddDataCardRoute } from "./routes/addDataCard";
import ErrorPage from "./components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create",
    element: <AddDataCardRoute />,
    errorElement: <ErrorPage />,
  },
]);
