import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./assets/pages/Login/Login";
import PrincipalPage from "./assets/pages/User/PrincipalPage/PrincipalPage";
import FamDest from "./assets/pages/User/PrincipalPage/Components/FamousDestinations/FamDest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/principalPage",
    element: <PrincipalPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
