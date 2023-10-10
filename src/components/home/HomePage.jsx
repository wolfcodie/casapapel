import React from "react";
import Hero from "./Hero";
import Points from "./Points";
import Catalog from "./Catalog";
import Contact from "./Contact";
import Devis from "./Devis";

function HomePage() {
  return (
    <section className="max-w-[1680px] w-[90%]  m-auto">
      <Hero />
      <Devis />
      <Points />
      <Catalog />
      <Contact />
    </section>
  );
}

export default HomePage;
