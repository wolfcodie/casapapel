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
          content="Casapapel Maroc est un fabricant industriel spécialisé dans la production d'étiquettes adhésives en rouleaux depuis 2015. Nous sommes experts dans la fabrication de petites et grandes séries ainsi que dans l'impression flexographique. Notre équipe réactive est dédiée à vous accompagner dans le choix des matériaux, des processus et des technologies les plus adaptés à vos besoins. Faites confiance à notre expertise pour garantir des solutions sur mesure et de haute qualité pour vos étiquetages."
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
