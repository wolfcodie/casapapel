import { ProductsList } from "../../constants/ProductsList";
import Product from "./Product";

function Catalog() {
  return (
    <section id="catalog" className=" text-center py-10  max-lg:my-9 ">
      <h2 className="text-[48px] font-bold text-darkBlue mb-14 max-sm:text-[38px]">
        Notre Catalog
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-5 max-lg:flex-col max-md:gap-2 max-lg:justify-center">
        {ProductsList &&
          ProductsList.map((prd) => {
            return <Product key={prd.id} prd={prd} />;
          })}
      </div>
    </section>
  );
}

export default Catalog;
