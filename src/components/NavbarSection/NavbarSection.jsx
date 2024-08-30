import React, { useState } from "react";
import "./NavbarSection.css";
import { FaArrowLeft, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import TypoGrafi from "../TypoGrafi/TypoGrafi";
import { Link } from "react-router-dom";
import { dataTypoGrafi } from "../../datas";

export default function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="d-flex flex-column">
      <div className="section-navbar">
        <div className="container">
          <div className="wrapper-navbar">
            <div className="flexable-items">
              <div className="logo">
                <img
                  src="/img/img-video/logo-id.png"
                  width={120}
                  alt="logo with id"
                />
              </div>

              <button className="hamburger" onClick={toggleMenu}>
                &#9776; {/* آیکون همبرگری */}
              </button>
            </div>

            <ul className={isOpen ? "open" : ""}>
              <li>
                <Link to={"/"}>خانه</Link>
              </li>
              <li>
                <Link to={"/services"}> خدمات ما</Link>
              </li>
              <li>
                <Link to={"/about"}>درباره ما</Link>
              </li>
              <li>
                <Link to={"/contact"}>تماس با ما</Link>
              </li>{" "}

              <li>
                <Link to={"/gallery"}>گالری ما</Link>
              </li>
              <div className="navbar-icons">
                <FaInstagram className="navbar-icon" />
                <FaFacebookF className="navbar-icon" />
                <FaTelegramPlane className="navbar-icon" />
              </div>
            </ul>
          </div>
        </div>
      </div>

      <TypoGrafi data={dataTypoGrafi} />
    </div>
  );
}
