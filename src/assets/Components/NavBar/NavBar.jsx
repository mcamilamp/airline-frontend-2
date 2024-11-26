import React, { useEffect, useState } from "react";
import "../NavBar/NavBar.scss";
import { FaPlane } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Auth from "../../pages/Login/components/scripts/auth";

function NavBar() {
  const location = useLocation();
  const isSpecialPage =
    location.pathname.startsWith("/Tickets") ||
    location.pathname === "/Profile";
  const [isScrolled, setIsScrolled] = useState(false);
  let isAuthenticated = false;

  const auth = new Auth()
  if (auth.isAuthenticated()) {
    isAuthenticated = false;
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [active, setActive] = useState("navBar");
  const showNav = () => setActive("navBar activeNavbar");
  const removeNav = () => setActive("navBar");

  return (
    <section className="navBarSection">
      <div
        className={`header ${isScrolled ? "scrolled" : ""} ${
          isSpecialPage ? "specialPage" : ""
        }`}
      >
        <div className="logoDiv">
          <Link to="/principalPage" className="logo navLink">
            <h1 className="flex">
              <FaPlane className="icon" />
              AirLine
            </h1>
          </Link>
        </div>
        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <Link to="/principalPage" className="navLink">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to="/OfferPage" className="navLink">
                Offers
              </Link>
            </li>
            <li className="navItem">
              <Link to="/BookFlight" className="navLink">
                Destinations
              </Link>
            </li>
            <div className="headerBtns flex">
              {
                  isAuthenticated &&
                  (<button className="btn loginBtn">
                    <Link to="/login">Sign in</Link>
                  </button>)
              }
              {/*
              <button className="btn logupBtn">
                <Link to="/login">Sign Up</Link>
              </button>
              */}
            </div>
          </ul>
          <div onClick={removeNav} className="closeNavBar">
            <IoMdCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavBar">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </section>
  );
}

export default NavBar;
