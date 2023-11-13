import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="skills_section text-center  flex justify-center items-center flex-col gap-4 py-10">
      <img
        src={logo}
        alt="logo"
        className="h-[60px] w-[80px] max-sm:h-[40px] max-sm:w-[50px]  cursor-pointer "
      />

      <ul className="flex gap-6 my-3 max-sm:flex-col">
        <li>
          <Link className="text-[16px] font-semibold" to="/" href="#hero">
            Accueil
          </Link>
        </li>
        <li>
          <a className="text-[16px] font-semibold" href="#devis">
            Notre devis
          </a>
        </li>
        <li>
          <a className="text-[16px] font-semibold" href="#catalog">
            Catalog
          </a>
        </li>
        <li>
          <a className="text-[16px] font-semibold" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <span className="opacity-[.6] text-[14px]">
        Copyright © 2023 CasaPapelMaroc. <br /> Tous droits réservés.
      </span>
    </footer>
  );
}

export default Footer;
