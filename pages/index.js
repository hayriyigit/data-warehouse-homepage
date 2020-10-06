import React from "react";
import Head from "next/head";

import {
  Navbar,
  Hero,
  About,
  Features,
  Testimonials,
  Footer,
} from "../components";

export default () => (
  <div className="container">
    <Head>
      <title>DataWarehouse - Landing page</title>
    </Head>
    <Navbar />
    <Hero />
    <About />
    <Features />
    <Testimonials />
    <Footer />
  </div>
);
