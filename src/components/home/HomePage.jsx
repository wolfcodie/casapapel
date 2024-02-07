import React from "react";
import Hero from "./Hero";
import Points from "./Points";
import Catalog from "./Catalog";
import Contact from "./Contact";
import Devis from "./Devis";
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <section className="max-w-[1680px] w-[90%]  m-auto">
      <Helmet>
        <title>CASAPAPEL MAROC - Découvrez l'Élégance Des Étiquettes</title>
        <meta
          name="description"
          content="Welcome to my website! Explore our products and services."
        />
      </Helmet>
      <Hero />
      <Devis />
      <Points />
      <Catalog />
      <Contact />
    </section>
  );
}

export default HomePage;
