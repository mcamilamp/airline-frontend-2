import React from "react";
import "../AsideTicket/AsideTicket.scss";
import { useParams } from "react-router-dom";

import item1 from "../../../../../img/item1.jpg";
import item2 from "../../../../../img/item2.jpg";
import item3 from "../../../../../img/item3.jpg";
import item4 from "../../../../../img/item4.jpg";
import item5 from "../../../../../img/item5.jpg";
import item6 from "../../../../../img/item6.jpg";
import { FaPlane } from "react-icons/fa";

const aside = [
  {
    id: 1,
    img: item1,
    title: "Africa",
    price: "$160",
    subPrice: "$2700",
  },
  {
    id: 2,
    img: item2,
    title: "Greece",
    price: "$290",
    subPrice: "$2800",
  },
  {
    id: 3,
    img: item3,
    title: "Australia",
    price: "$1100",
    subPrice: "$2700",
  },
  {
    id: 4,
    img: item4,
    title: "China",
    price: "130",
    subPrice: "$3700",
  },
  {
    id: 5,
    img: item5,
    title: "Colombia",
    price: "$90",
    subPrice: "$240",
  },
  {
    id: 6,
    img: item6,
    title: "France",
    price: "$80",
    subPrice: "$1960",
  },
];

const destinations = [
  {
    id: 1,
    title: "Africa",
    tickets: [
      {
        idFlight: "01",
        origin: "Bogota",
        destination: "Cairo",
        departureDate: "1/12/2024",
        departureTime: "18:00",
        duration: "16h",
        price: "$1225",
      },
      {
        idFlight: "02",
        origin: "Madrid",
        destination: "Marrakech",
        departureDate: "1/12/2024",
        departureTime: "15:20",
        duration: "21h",
        price: "$195.10",
      },
      {
        idFlight: "02",
        origin: "Miami",
        destination: "Nairobi",
        departureDate: "1/12/2024",
        departureTime: "14:00",
        duration: "21h 15min",
        price: "$1176.17",
      },
    ],
  },
  {
    id: 2,
    title: "Greece",
    tickets: [
      {
        idFlight: "02",
        origin: "Bogota",
        destination: "Atenas",
        departureDate: "29/11/2024",
        departureTime: "09:00",
        duration: "17h 30min",
        price: "$1481.41",
      },
      {
        idFlight: "02",
        origin: "Paris",
        destination: "Santorini",
        departureDate: "1/01/2025",
        departureTime: "13:20",
        duration: "9h 40min",
        price: "$294.92",
      },
      {
        idFlight: "02",
        origin: "New York",
        destination: "Santorini",
        departureDate: "2/04/2025",
        departureTime: "14:00",
        duration: "11h 15min",
        price: "$1176.17",
      },
    ],
  },
  {
    id: 3,
    title: "Australia",
    tickets: [
      {
        idFlight: "03",
        origin: "New York",
        destination: "Sidney",
        departureDate: "29/11/2024",
        departureTime: "09:00",
        duration: "31h 30min",
        price: "$1406.55",
      },
      {
        idFlight: "03",
        origin: "Bogota",
        destination: "Melbourne",
        departureDate: "2/03/2025",
        departureTime: "11:20",
        duration: "40h 15min",
        price: "$2427.42",
      },
      {
        idFlight: "03",
        origin: "Madrid",
        destination: "Perth",
        departureDate: "2/04/2025",
        departureTime: "14:00",
        duration: "33h 15min",
        price: "$1176.17",
      },
    ],
  },
  {
    id: 4,
    title: "China",
    tickets: [
      {
        idFlight: "04",
        origin: "Buenos Aires",
        destination: "Pekin",
        departureDate: "27/11/2024",
        departureTime: "09:10",
        duration: "31h 16min",
        price: "$4627.99",
      },
      {
        idFlight: "04",
        origin: "Seul",
        destination: "Shanghai",
        departureDate: "12/01/2025",
        departureTime: "12:20",
        duration: "2h 15min",
        price: "$131.58",
      },
      {
        idFlight: "04",
        origin: "Miami",
        destination: "Shangai",
        departureDate: "11/08/2025",
        departureTime: "18:20",
        duration: "20h 15min",
        price: "$1315.80",
      },
    ],
  },
  {
    id: 5,
    title: "Colombia",
    tickets: [
      {
        idFlight: "05",
        origin: "Buenos Aires",
        destination: "Medellin",
        departureDate: "29/11/2024",
        departureTime: "08:00",
        duration: "21h 36min",
        price: "$839.39",
      },
      {
        idFlight: "05",
        origin: "Seul",
        destination: "Bogota",
        departureDate: "12/01/2025",
        departureTime: "12:20",
        duration: "33h 15min",
        price: "$725.96",
      },
      {
        idFlight: "05",
        origin: "Miami",
        destination: "Santa Marta",
        departureDate: "1/03/2025",
        departureTime: "12:20",
        duration: "1h 15min",
        price: "$88.48",
      },
    ],
  },
  {
    id: 6,
    title: "France",
    tickets: [
      {
        idFlight: "06",
        origin: "Oporto",
        destination: "Paris",
        departureDate: "25/10/2025",
        departureTime: "08:00",
        duration: "2h 16min",
        price: "$179.22",
      },
      {
        idFlight: "06",
        origin: "Roma",
        destination: "Burdeos",
        departureDate: "11/12/2024",
        departureTime: "11:50",
        duration: "2h 10min",
        price: "$89.16",
      },
    ],
  },
];
function AsideTickets() {
  const { destination } = useParams();

  return (
    <div className="aside-section">
      <aside>
        <div className="aside-title">
          <h2>Tickets for:</h2>
        </div>
        {aside
          .filter((ticket) => ticket.title === destination)
          .map(({ img, title, price, subPrice }, index) => (
            <div className="aside-info" key={index}>
              <div className="aside-img">
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>
                From: <span>{price}</span>
              </p>
              <p>
                Up to: <span>{subPrice}</span>
              </p>
            </div>
          ))}
      </aside>

      <div className="tickets">
        {destinations
          .filter((dest) => dest.title === destination)
          .flatMap((dest) => dest.tickets)
          .map(
            (
              {
                idFlight,
                origin,
                destination,
                departureDate,
                departureTime,
                duration,
                price,
              },
              index
            ) => (
              <a href="#">
                <div className="ticket-item" key={idFlight || index}>
                  <div className="origin">
                    <h2>{origin}</h2>
                    <p>{departureDate}</p>
                    <p>{departureTime}</p>
                  </div>
                  <div className="inter">
                    <p>{duration}</p>
                    <p>
                      ----
                      <FaPlane className="plane" />
                      ----
                    </p>
                  </div>
                  <div className="destination">
                    <h2>{destination}</h2>
                  </div>
                  <div className="price">
                    <p>{price}</p>
                  </div>
                </div>
              </a>
            )
          )}
      </div>
    </div>
  );
}

export default AsideTickets;
