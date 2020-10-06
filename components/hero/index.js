import React from "react";
import Link from "next/link";

export default () => (
  <section className="header" id="hero">
    <div className="header__draw">
      <img src="./assets/illustrations/hero.svg" alt="illustration"></img>
    </div>
    <div className="header__text-area">
      <h1>Save your data storage here.</h1>
      <p>
        Data Warehouse is a data storage area that has been tested for security,
        so you can store your data here safely but not be afraid of being stolen
        by others.
      </p>
      <Link href="#">
        <div className="header__button">Learn More</div>
      </Link>
    </div>
  </section>
);
