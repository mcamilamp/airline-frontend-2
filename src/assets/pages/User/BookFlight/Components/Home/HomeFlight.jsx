import React from "react";
import "../Home/HomeFlight.scss";
import { FaArrowDown } from "react-icons/fa";

function Home() {
  return (
    <section className="homeFlight">
      <div className="secContainer containerr">
        <div className="homeText">
          <h1 className="title">Explore, dream, travel:</h1>
          <p className="subtitle">the best destinations await you.</p>
          <button className="btn">
            <a href="#">
              <FaArrowDown className="icon" />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
