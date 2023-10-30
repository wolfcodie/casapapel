import phone from "../../assets/phone-black.png";
import phone_white from "../../assets/phone_white.png";
import map_black from "../../assets/map-black.png";
import mail from "../../assets/Envelope.png";

function ContactSection({ home }) {
  return (
    <div
      className={
        home == "home"
          ? " w-[fit-content]  my-4 max-lg:w-full text-white  bg-white  max-sm:p-4 rounded-lg flex flex-col  gap-3 items-center"
          : " w-[fit-content]  max-lg:w-full text-white shadow-xl border bg-black p-12 max-sm:p-4 rounded-lg flex flex-col  gap-3 items-center"
      }
    >
      {home !== "home" && (
        <p className="font-semibold ">
          Pour toute votre demande, veuillez nous contacter au :
        </p>
      )}

      <article className="flex justify-between gap-2 max-sm:gap-4 my-2 w-full flex-wrap">
        <a
          href={`tel:${"0539383809"}`}
          className="flex max-sm:w-[100%] shadow-md border items-center font-semibold gap-4 p-4 bg-green-500 text-white rounded-md    px-6"
        >
          <img src={phone_white} alt="phone" />
          0539383809
        </a>
        <a
          href={`tel:${"0661100616"}`}
          className="flex max-sm:w-[100%] shadow-md border items-center font-semibold gap-4 p-4 bg-white text-black rounded-md    px-6"
        >
          <img src={phone} alt="phone" />
          0661100616
        </a>
        <a
          href={`tel:${"0661060366"}`}
          className="flex max-sm:w-[100%] shadow-md border items-center font-semibold gap-4 p-4 bg-white text-black rounded-md    px-6"
        >
          <img src={phone} alt="phone" />
          0661060366
        </a>
      </article>

      <a
        href={`mailto:${" casapapel08@gmail.com"}`}
        className="flex items-center justify- max-sm:w-[100%]  shadow-md border font-semibold  gap-4 p-4 w-full bg-white text-black rounded-md max-sm:text-[14px]  px-6  text-[16px]"
      >
        <img src={mail} alt="phone" />
        casapapel08@gmail.com
      </a>
      <a
        className="flex items-center  shadow-md border font-semibold  max-sm:text-[12px]  gap-4 p-4 w-full bg-white text-black rounded-md px-6 text-[16px]"
        href="https://maps.app.goo.gl/8gcDTTpWLJL6XMsX9"
        target="_blank"
      >
        <img src={map_black} alt="phone" className="h-[20px]" />
        Route de Rabat Local N°47 Tangier
      </a>
    </div>
  );
}

export default ContactSection;
