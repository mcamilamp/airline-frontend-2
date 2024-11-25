import React from "react";
import "../Home/HomeFlight.scss";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";

function Home() {
  return (
    <section className="homeFlight">
      <div className="secContainer containerr">
        <div className="homeText">
          <h1 className="title">Explore, dream, travel:</h1>
          <p className="subtitle">the best destinations await you.</p>
          <button className="btn">
            <Link
              to="principalDestinations"
              smooth={true}
              duration={800}
              offset={-50}
            >
              <FaArrowDown className="icon" />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
