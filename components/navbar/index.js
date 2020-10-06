import React, { useState } from "react";
import Link from "next/link";

import { Logo, RightArrow, Times, Bars } from "../icons";

const routes = [
  {
    name: "About",
    anchor: "about",
  },
  {
    name: "Help",
    anchor: "help",
  },
  {
    name: "Features",
    anchor: "features",
  },
  {
    name: "Signup",
    anchor: "signup",
  },
];

export default () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div href="/" className="navbar__logo">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <ul className={click ? "navbar__menu active" : "navbar__menu"}>
          {routes.map((route) => (
            <li
              className="navbar__item"
              key={route.anchor}
              onClick={closeMobileMenu}
            >
              <Link className="navbar__link" href={`/#${route.anchor}`}>
                <span className="navbar__link">{route.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="#">
          <div className="navbar__button">
            <p>Request Demo</p>
            <RightArrow />
          </div>
        </Link>
        <button type="button" className="menu-icon" onClick={handleClick}>
          {click ? <Times /> : <Bars />}
        </button>
      </div>
    </nav>
  );
};
