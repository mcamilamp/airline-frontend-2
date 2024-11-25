import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./assets/pages/Login/Login";
import PrincipalPage from "./assets/pages/User/PrincipalPage/PrincipalPage";
import FamDest from "./assets/pages/User/PrincipalPage/Components/FamousDestinations/FamDest";
import BookFlight from "./assets/pages/User/BookFlight/BookFlight";
import OfferPage from "./assets/pages/User/Offers/OfferPage";

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
  {
    path: "/BookFlight",
    element: <BookFlight />,
  },
  {
    path: "/OfferPage",
    element: <OfferPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
