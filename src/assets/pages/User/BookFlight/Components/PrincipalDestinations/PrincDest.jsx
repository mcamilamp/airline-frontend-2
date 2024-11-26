import React from "react";
import "../PrincipalDestinations/PrincDest.scss";
import { useNavigate } from "react-router-dom";

import item1 from "../../../../../img/item1.jpg";
import item2 from "../../../../../img/item2.jpg";
import item3 from "../../../../../img/item3.jpg";
import item4 from "../../../../../img/item4.jpg";
import item5 from "../../../../../img/item5.jpg";
import item6 from "../../../../../img/item6.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const items = [
  {
    id: 1,
    image: item1,
    title: "Africa",
    price: "$1600",
  },
  {
    id: 2,
    image: item2,
    title: "Greece",
    price: "$1650",
  },
  {
    id: 3,
    image: item3,
    title: "Australia",
    price: "$2640",
  },
  {
    id: 4,
    image: item4,
    title: "China",
    price: "$2100",
  },
  {
    id: 5,
    image: item5,
    title: "Colombia",
    price: "$90",
  },
  {
    id: 6,
    image: item6,
    title: "France",
    price: "$1200",
  },
];

function PrincDest() {
  const navigate = useNavigate();

  return (
    <section className="container" id="principalDestinations">
      <h2>Main destinations</h2>
      <div className="items">
        {items.map(({ id, image, title, price }, index) => (
          <div
            className="item"
            key={id}
            onClick={() => navigate(`/Tickets/${title}`)}
          >
            <div className="itemImage">
              <img src={image} alt={title} />
            </div>
            <div className="itemText">
              <div className="title">
                <h4>{title}</h4>
                <p>By way from:</p>
              </div>
              <div className="price">
                <p>
                  From: <span> {price}</span>{" "}
                </p>
                <FaArrowRightLong className="icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PrincDest;
