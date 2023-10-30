import dollar from "../../assets/dollar_black.png";
import qualite from "../../assets/quality.png";
import service from "../../assets/service.png";

function Devis() {
  return (
    <section
      id="devis"
      className="w-[70%] m-auto text-center max-md:p-6 p-10 px-[50px] max-lg:my-9 "
    >
      <h2 className="text-[48px] max-sm:text-[30px]  font-bold text-darkBlue mb-14">
        Notre Devise
      </h2>
      <div className="flex justify-between items-center gap-7 max-lg:block">
        <article className="boxShadow max-lg:my-5  p-3 py-5 flex flex-col items-center justify-center gap-2 rounded-xl ">
          <img className="h-[50px]" src={service} alt="service" />
          <h4 className="text-[25px] max-sm:text-[18px] my-3 font-semibold">
            Service
          </h4>
          {/* <p className="w-[80%] max-md:w-[90%] opacity-[.8] text-[14px]">
            Prix avantageux, satisfaisant vos besoins tout en respectant votre
            budget.
          </p> */}
        </article>
        <article className="boxShadow max-lg:my-5  p-3 py-5 flex flex-col items-center justify-center gap-2 rounded-xl ">
          <img className="h-[50px]" src={qualite} alt="qualite" />
          <h4 className="text-[25px] max-sm:text-[18px] my-3 font-semibold">
            Qualité
          </h4>
          {/* <p className="w-[80%] max-md:w-[90%] opacity-[.8] text-[14px]">
            Excellence de qualité est notre priorité absolue dans chaque service
          </p> */}
        </article>

        <article className="boxShadow max-lg:my-5  p-3 py-5 flex flex-col items-center justify-center gap-2 rounded-xl ">
          <img className="h-[40px]" src={dollar} alt="dollar" />
          <h4 className="text-[25px] max-sm:text-[18px] my-3 font-semibold">
            Prix
          </h4>
          {/* <p className="w-[80%] max-md:w-[90%] opacity-[.8] text-[14px]">
            Prix avantageux, satisfaisant vos besoins tout en respectant votre
            budget.
          </p> */}
        </article>
      </div>
    </section>
  );
}

export default Devis;
