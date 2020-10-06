import React from "react";
import Link from "next/link";

import { Logo, RightArrow } from "../icons";

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

export default () => (
  <nav className="navbar">
    <div className="navbar__container">
      <div href="/" className="navbar__logo">
        <Logo />
      </div>
      <ul className="navbar__menu">
        {routes.map((route) => (
          <li className="navbar__item" key={route.anchor}>
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
    </div>
  </nav>
);
