import React, { useEffect, useState } from "react";
import "../NavBar/NavBar.scss";
import { FaPlane } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";

function NavBar() {
  // menu cuando se desplaza hacia abajo
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // menu cuando esta en modo telefono
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNav = () => {
    setActive("navBar");
  };
  //

  return (
    <section className="navBarSection">
      <div className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className="flex">
              <FaPlane className="icon" />
              AirPlane
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Offers
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Destinations
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Contacts
              </a>
            </li>

            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="#">Sign in</a>
              </button>
              <button className="btn logupBtn">
                <a href="#">Sign Up</a>
              </button>
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
