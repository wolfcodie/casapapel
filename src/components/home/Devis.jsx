import dollar from "../../assets/dollar_black.png";
import qualite from "../../assets/quality.png";
import service from "../../assets/service.png";

function Devis() {
  return (
    <section
      id="devis"
      className=" text-center max-md:p-6 p-10 px-14 max-lg:my-9 "
    >
      <h2 className="text-[48px] font-bold text-darkBlue mb-14">Notre Devis</h2>
      <div className="flex justify-between items-center gap-7 max-lg:block">
        <article className="boxShadow max-lg:my-5  p-3 py-5 flex flex-col items-center justify-center gap-2 rounded-xl shadow-sm">
          <img className="h-[50px]" src={dollar} alt="dollar" />
          <h4 className="text-[25px] my-3 font-semibold">Prix compétiti</h4>
          <p className="w-[80%] max-md:w-[90%] opacity-[.8] text-[14px]">
            Prix avantageux, satisfaisant vos besoins tout en respectant votre
            budget.
          </p>
        </article>
        <article className="boxShadow max-lg:my-5  p-3 py-5 flex flex-col items-center justify-center gap-2 rounded-xl shadow-sm">
          <img className="h-[50px]" src={qualite} alt="qualite" />
          <h4 className="text-[25px] my-3 font-semibold">Prix compétiti</h4>
          <p className="w-[80%] max-md:w-[90%] opacity-[.8] text-[14px]">
            Excellence de qualité est notre priorité absolue dans chaque service
          </p>
        </article>
        <article className="boxShadow max-lg:my-5  p-3 py-5 flex flex-col items-center justify-center gap-2 rounded-xl shadow-sm">
          <img className="h-[50px]" src={service} alt="service" />
          <h4 className="text-[25px] my-3 font-semibold">Prix compétiti</h4>
          <p className="w-[80%] max-md:w-[90%] opacity-[.8] text-[14px]">
            Prix avantageux, satisfaisant vos besoins tout en respectant votre
            budget.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Devis;
