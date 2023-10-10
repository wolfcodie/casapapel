import { useState } from "react";
import logo from "../assets/logo.png";
import phone_white from "../assets/phone_white.png";
import menu from "../assets/menu.png";
import { Link } from "react-router-dom";

export default function Nav() {
  const [showNav, setshowNav] = useState(false);

  return (
    <header className="max-w-[1680px] m-auto w-[90%]  rounded-b-lg ">
      <nav className="flex items-center">
        <Link
          to="/"
          className="flex items-center flex-1 max-md:flex-[0.5] max-sm:flex-[0.33]   "
        >
          <img
            src={logo}
            alt="logo"
            className="h-[70px] w-[80px] max-sm:h-[40px] max-sm:w-[50px]  cursor-pointer "
          />
        </Link>
        <ul className="nav flex">
          <li>
            <Link to="/" href="#hero">
              Accueil
            </Link>
          </li>
          <li>
            <a href="#devis">Notre devis </a>
          </li>
          <li>
            <a href="#catalog">Catalog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="nav_btn_holder flex justify-end max-md:flex-2 flex-1 max-md:justify-center">
          <a
            href={`tel:${"0539383809"}`}
            className="bg-blue navBtn p-3 max-sm:p-2 w-[180px] max-sm:w-[140px]  text-white max-sm:text-[14px] rounded-3xl flex justify-evenly items-center "
          >
            <img src={phone_white} alt="phone" className=" max-sm:h-[80%]" />
            0539383809
          </a>
        </div>

        <img
          src={menu}
          alt="menu"
          className="menu cursor-pointer"
          onClick={() => setshowNav(true)}
        />
      </nav>
      {showNav && (
        <ul className="h-[100%] w-[80%] right-0 top-0 z-10 fixed bg-black p-5 ">
          <button
            className="text-[40px] mb-10 text-white"
            onClick={() => setshowNav(false)}
          >
            X
          </button>

          <li className="p-[20px]  bg-black text-white cursor-pointer">
            <Link
              onClick={() => setshowNav(false)}
              to="/"
              className="text-[30px]"
            >
              Accueil
            </Link>
          </li>

          <li className="p-[20px]  bg-black text-white cursor-pointer">
            <a
              onClick={() => setshowNav(false)}
              className="text-[30px]"
              href="#devis"
            >
              Notre Devis
            </a>
          </li>
          <li
            onClick={() => setshowNav(false)}
            className="p-[20px]  bg-black text-white cursor-pointer"
          >
            <a className="text-[30px]" href="#catalog">
              Catalog
            </a>
          </li>
          <li className="p-[20px]  bg-black text-white cursor-pointer">
            <a
              onClick={() => setshowNav(false)}
              className="text-[30px]"
              href="#contact"
            >
              Contact
            </a>
          </li>
          <div className=" flex justify-center items-center  max-md:justify-center mt-4">
            <a
              href={`tel:${"0539383809"}`}
              className="bg-blue p-4  w-full text-white text-[20px]  rounded-xl flex justify-center gap-6 items-center "
            >
              <img src={phone_white} alt="phone" className=" max-sm:h-[80%]" />
              0539383809
            </a>
          </div>
        </ul>
      )}
    </header>
  );
}
