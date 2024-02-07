import React from "react";
import SocialMedia from "./SocialMedia";
import Right_slider from "./Right_slider";

function Hero() {
  return (
    <section className="flex justify-between max-lg:block  min-h-[90vh] items-center flex-wrap">
      <article className="flex-1 max-lg:text-center">
        <h1 className="max-sm:text-[25px] text-[48px] font-bold max-sm:my-8">
          <span className="text-pink text-[60px] max-sm:text-[40px]">
            Casapapel Maroc
          </span>
          <br />
          Spécialiste de la fabrication d'étiquettes adhésives à Tanger
        </h1>
        <p className="font-openSans opacity-[.8] my-6 w-[70%] max-lg:w-full text-[14px] max-sm:text-[12px]">
          Casapapel Maroc est un fabricant industriel d'étiquettes adhésives en
          rouleaux depuis 2015. Spécialiste de la petite ou grande série et de
          l'impression flexographie. Porté par une équipe réactive, notre
          expertise est forte pour vous accompagner dans le choix des matières,
          des process et des technologies, adaptés à vos besoins.
        </p>
        <a
          href="#catalog"
          className="bg-blue p-4 px-10   text-white max-sm:text-[14px] rounded-md "
        >
          Explorez le Catalog
        </a>
        {/* <SocialMedia /> */}
      </article>
      <Right_slider />
    </section>
  );
}

export default Hero;
