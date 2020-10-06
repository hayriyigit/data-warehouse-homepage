import React, { useState } from "react";

import { RightArrow, LeftArrow, Indicator } from "../icons";

const quotes = [
  {
    name: "John Fang",
    job: "wordfaang.com",
    text:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    img: "./assets/illustrations/avatar-1.svg",
  },
  {
    name: "Jeny Doe",
    job: "UX Engineer",
    text:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    img: "./assets/illustrations/avatar-2.svg",
  },
  {
    name: "William",
    job: "Web Designer",
    text:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    img: "./assets/illustrations/avatar-3.svg",
  },
];

export default () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="quotes" id="testimonials">
      <h1>Testimonials</h1>
      <div className="quote">
        {quotes.map((quote, index) => (
          <div
            className={`quote__card ${
              index === current ? "active" : "passive"
            }`}
            key={index}
          >
            <div className="quote__avatar">
              <img
                src={quote.img}
                alt={`avatar-${index}`}
                key={`avatar-${index}`}
              ></img>
            </div>

            <div className="quote__text-area">
              <h4>{quote.name}</h4>
              <small>{quote.job}</small>
              <p>{quote.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="quotes__footer">
        <div className="quotes__indicator">
          <Indicator />
        </div>
        <div className="quotes__switcher">
          <LeftArrow
            style={{ cursor: "pointer", width: "2em" }}
            onClick={() =>
              setCurrent(current === 0 ? quotes.length - 1 : current - 1)
            }
          />
          <RightArrow
            stroke="#ccc"
            style={{ cursor: "pointer" }}
            onClick={() =>
              setCurrent(current === quotes.length - 1 ? 0 : current + 1)
            }
          />
        </div>
      </div>
    </section>
  );
};
