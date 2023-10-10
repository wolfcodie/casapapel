import React from "react";
import ContactSection from "../ProductPage/ContactSection";

function Contact() {
  return (
    <section
      id="contact"
      className=" text-center max-md:p-0 py-10 max-lg:my-9 flex flex-col justify-center items-center gap-6 "
    >
      <h2 className="text-[48px] font-bold text-darkBlue mb-4">Nos Contact</h2>
      <p className="w-[50%] max-lg:w-[70%] max-sm:w-[90%] m-auto opacity-[.8] font-medium text-[14px] ">
        Nous facilitons la commande de nos produits. Vous pouvez passer vos
        commandes en utilisant les options ci-dessous. Si vous avez des
        questions ou avez besoin d'aide, n'hésitez pas à nous contacter. Notre
        équipe dévouée est là pour vous aide
      </p>
      <ContactSection home="home" />
      <iframe
        className="border-2 border-black rounded-lg w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.5697265026206!2d-5.853880025087697!3d35.73679912692096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b87069ddb29e1%3A0x653429e05071f3e9!2sImprimerie%20CASAPAPELMAROC!5e0!3m2!1sen!2sma!4v1696413481323!5m2!1sen!2sma"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default Contact;
