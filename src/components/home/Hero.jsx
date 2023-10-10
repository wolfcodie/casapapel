import React from "react";
import SocialMedia from "./SocialMedia";
import Right_slider from "./Right_slider";

function Hero() {
  return (
    <section className="flex justify-between max-lg:block  min-h-[90vh] items-center flex-wrap">
      <article className="flex-1 max-lg:text-center">
        <h1 className="max-sm:text-[50px] text-[60px] font-bold">
          <span className="text-pink">Casapapel</span> <br /> Découvrez
          l'Élégance des Étiquettes
        </h1>
        <p className="font-openSans opacity-[.8] my-6 w-[70%] max-lg:w-full text-[14px]">
          Chez Casapapel, nous allions l'expertise en impression d'étiquettes à
          la puissance des technologies de développement les plus en vogue au
          Maroc. Notre passion pour la qualité se reflète non seulement dans nos
          produits, mais aussi dans les outils que nous utilisons pour offrir
          une expérience exceptionnelle.p
        </p>
        <button className="bg-blue p-4 px-10   text-white max-sm:text-[14px] rounded-md ">
          Explorez le Catalog
        </button>
        <SocialMedia />
      </article>
      <Right_slider />
    </section>
  );
}

export default Hero;
