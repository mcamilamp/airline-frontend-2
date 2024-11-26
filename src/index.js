import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./assets/pages/Login/Login";
import PrincipalPage from "./assets/pages/User/PrincipalPage/PrincipalPage";
import FamDest from "./assets/pages/User/PrincipalPage/Components/FamousDestinations/FamDest";
import BookFlight from "./assets/pages/User/BookFlight/BookFlight";
import OfferPage from "./assets/pages/User/Offers/OfferPage";
import Tickets from "./assets/pages/User/Tickets/Tickets";
import Profile from "./assets/pages/User/Profile/Profile";
import Reservation from "./assets/pages/User/Reservation/Reservation";
import AdminDashbord from "./assets/pages/Admin/Dashbord/AdminDashbord";
import UserAdmin from "./assets/pages/Admin/UsersAdmin/UserAdmin";
import ReservationAdmin from "./assets/pages/Admin/ReservationAdmin/ReservationAdmin";
import DestAdmin from "./assets/pages/Admin/DestAdmin/DestAdmin";
import SignUpForm from "./assets/pages/Login/components/signoutForm/SignUpForm";
import Airport from "./assets/pages/Admin/AirportsAdmin/Airport";

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
  {
    path: "/Tickets/:destination",
    element: <Tickets />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/Reservation",
    element: <Reservation />,
  },
  {
    path: "/AdminDashbord",
    element: <AdminDashbord />,
  },
  {
    path: "/UserAdmin",
    element: <UserAdmin />,
  },
  {
    path: "/ReservationAdmin",
    element: <ReservationAdmin />,
  },
  {
    path: "/DestAdmin",
    element: <DestAdmin />,
  },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
  {
    path: "/Airport",
    element: <Airport />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
