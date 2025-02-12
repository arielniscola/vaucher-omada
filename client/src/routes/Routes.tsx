import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/login";
import ProtectedRoute from "./ProtectedRoutes";

import Dashboard from "../pages/dashboard/Dashboard";

import Unauthorized from "../pages/unauthorized";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <Login /> },
      {
        path: "access-denied",
        element: <Unauthorized />,
      },
    ],
  },
]);
