import pinned from "../../assets/pinned.png";
import bag from "../../assets/bag.png";
import taps from "../../assets/taps.png";
function Points() {
  return (
    <section className=" text-center py-10  max-lg:my-9 ">
      <h2 className="text-[48px] font-bold text-darkBlue mb-14 max-sm:text-[30px]">
        Nos Points Forts
      </h2>
      <div className="flex justify-between items-center gap-5 max-lg:flex-col max-md:gap-2 max-lg:justify-center">
        <article className="boxShadow  h-[200px] max-lg:h-[fit-content] bg-black text-white max-lg:my-4  p-3 py-10 w-[30%] max-lg:w-[80%] max-sm:w-[100%] flex flex-col items-center justify-center gap-2 rounded-xl shadow-sm">
          <img className="h-[50px]" src={pinned} alt="dollar" />
          <p className=" w-[80%] max-md:w-[90%] opacity-[.8] text-[20px]">
            Création sur mesure pour vos besoins uniques
          </p>
        </article>
        <article className="boxShadow max-lg:h-[fit-content]  h-[200px] bg-black text-white max-lg:my-4  p-3 py-10 w-[30%] max-lg:w-[80%] max-sm:w-[100%] flex flex-col items-center justify-center gap-2 rounded-xl shadow-sm">
          <img className="h-[50px]" src={bag} alt="qualite" />
          <p className=" w-[80%] max-md:w-[90%] opacity-[.8] text-[20px]">
            Large gamme de matériaux et de finitions disponibles.
          </p>
        </article>
        <article className="boxShadow max-lg:h-[fit-content]  h-[200px] bg-black text-white max-lg:my-4  p-3 py-10 w-[30%] max-lg:w-[80%] max-sm:w-[100%] flex flex-col items-center justify-center gap-2 rounded-xl shadow-sm">
          <img className="h-[50px]" src={taps} alt="service" />
          <p className=" w-[80%] max-md:w-[90%] opacity-[.8] text-[20px]">
            Détails minutieux et couleurs éclatantes.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Points;
