import React from "react";
import Link from "next/link";

import { RightArrow } from "../icons";

const features = [
  {
    title: "Search Data",
    text:
      "Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.",
    img: "./assets/illustrations/search-data.svg",
    bg: "./assets/illustrations/search-data-bg.svg",
  },
  {
    title: "24 Hours Access",
    text:
      "Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.",
    img: "./assets/illustrations/hours-access.svg",
    bg: "./assets/illustrations/hours-access-bg.svg",
  },
  {
    title: "Print Out",
    text:
      "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
    img: "./assets/illustrations/print-out.svg",
    bg: "./assets/illustrations/print-out-bg.svg",
  },
  {
    title: "Security Code",
    text:
      "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.",
    img: "./assets/illustrations/security-code.svg",
    bg: "./assets/illustrations/security-code-bg.svg",
  },
];

export default () => (
  <section className="features" id="features">
    <div className="features__text-area">
      <h1>Features</h1>
      <p>
        Some of the features and advantages that we provide for those of you who
        store data in this Data Warehouse.
      </p>
    </div>
    <div className="features__cards">
      {features.map((feature, index) => (
        <div className="card" key={index}>
          <div className="card__data">
            <div className="card__draw">
              <img src={feature.img} alt="illustration"></img>
            </div>

            <div className="card__text-area">
              <h1>{feature.title}</h1>
              <p> {feature.text}</p>
              <Link href="#">
                <div className="card__button">
                  Learn More
                  <RightArrow />
                </div>
              </Link>
            </div>
          </div>
          <div className="card__bg">
            <img src={feature.bg} alt="illustration"></img>
          </div>
        </div>
      ))}
    </div>
  </section>
);
