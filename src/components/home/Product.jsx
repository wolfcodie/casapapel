import { Link } from "react-router-dom";

function Product({ prd }) {
  return (
    <article className="shadow-lg border min-h-[440px]  h-[440px] overflow-hidden max-lg:h-[fit-content]  text-white max-lg:my-4 w-[270px] min-w-[250px] max-w-[320px] max-lg:w-[80%] max-sm:w-[100%] flex flex-col items-center justify-between gap-2 rounded-[30px] pt-4">
      <img
        className="h-[40%] w-[50%]  object-contain "
        alt="dollar"
        src={prd.img}
      />
      <h2 className="text-black font-semibold text-[25px] max-sm:text-[20px]">
        {prd.title}
      </h2>
      <p className=" w-[90%] max-md:w-[90%] opacity-[.8] text-[14px] text-black">
        {prd.text}
      </p>
      <Link
        to={`/Product/${prd.id}`}
        className="bg-blue p-4 px-10 w-[100%]  text-white max-sm:text-[14px] "
      >
        Voir Plus
      </Link>
    </article>
  );
}

export default Product;
