import React from "react";
import Link from "next/link";

import {
  Logo,
  Facebook,
  Twitter,
  Instagram,
  Message,
  RightArrow,
} from "../icons";

export default () => (
  <footer className="footer" id="footer">
    <div className="offer">
      <div className="offer__message">
        <h1>Try for free!</h1>
        <p>Get limited 1 week free try our features!</p>
      </div>
      <div className="offer__buttons">
        <Link href="#">
          <div className="more">Learn more</div>
        </Link>
        <Link href="#">
          <div className="demo">
            Request demo
            <RightArrow />
          </div>
        </Link>
      </div>
    </div>
    <div className="footer__container">
      <div className="company">
        <div className="company__info">
          <div className="company__logo">
            <Logo />
            <p>DataWarehouse</p>
          </div>
          <p className="adress">
            Warehouse Society, 234 Bahagia Ave Street PRBW 29281
          </p>
          <p>info@warehouse.project 1-232-3434 (Main)</p>
        </div>
        <div className="company__links">
          <ul>
            <p>About</p>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">DW News</a>
            </li>
          </ul>
          <ul>
            <p>Help</p>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Sign up</a>
            </li>
            <li>
              <a href="#">Guide</a>
            </li>
            <li>
              <a href="#">Reports</a>
            </li>
            <li>
              <a href="#">Q&A</a>
            </li>
          </ul>
        </div>
        <div className="company__social-links">
          <ul>
            <p>Social Media</p>
            <li>
              <Facebook />
            </li>
            <li>
              <Twitter />
            </li>
            <li>
              <Instagram />
            </li>
          </ul>
        </div>
      </div>
      <div className="rights">
        <div className="rights__text">
          <p>
            © Datawarehouse™, 2020. All rights reserved. Company Registration
            Number: 21479524.
          </p>
        </div>
        <Message />
      </div>
    </div>
  </footer>
);
