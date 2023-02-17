import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RootRoute } from "./routes/root";
import { AddDataCardRoute } from "./routes/addDataCard";
import ErrorPage from "./components/ErrorPage";
import { CardRoute } from "./routes/cardRoute";
import { RecordsRoute } from "./routes/recordsRoute";
import { ProfileRoute } from "./routes/profileRoute";
import { SettingsRoute } from "./routes/settingsRoute";
import { AuthPage, LoginPage, SignUpPage } from "./routes/authRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <RecordsRoute />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/create",
        element: <AddDataCardRoute />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/:id",
        element: <CardRoute />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/profile",
        element: <ProfileRoute />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/settings",
        element: <SettingsRoute />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth/signup",
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
  },
]);
