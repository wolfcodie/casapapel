import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductsList } from "../../constants/ProductsList";
import Right_slider from "../home/Right_slider";
// import phone from "../../assets/phone-black.png";
// import phone_white from "../../assets/phone_white.png";
// import map_black from "../../assets/map-black.png";
// import mail from "../../assets/map-black.png";
import ContactSection from "./ContactSection";
import { Helmet } from "react-helmet";

function ProductPage() {
  const { productId } = useParams("productId");
  const [product, setProduct] = useState({});
  useEffect(() => {
    const foundedProduct = ProductsList.filter((prd) => prd.id == productId);
    if (foundedProduct) {
      setProduct(foundedProduct[0]);
    }
  }, [productId]);
  const address = " ROUTE DE RABAT LOCAL N°47 TANGER";

  return (
    <section className="flex justify-between max-w-[1680px] m-auto w-[90%]  max-lg:block  min-h-[90vh] items-start flex-wrap py-10">
      <Helmet>
        <title>{`${product.title} - CasaPapel Tanger`}</title>
        <meta name="description" content={product.description} />
        <meta property="og:image" content={product.image} />

        <meta name="twitter:title" content={product.title} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={product.image} />
      </Helmet>

      <Right_slider product={product} />
      <article className="flex-1 max-lg:text-center">
        <h1 className="max-sm:text-[40px] text-[50px] font-bold">
          {product.title}
        </h1>
        <p className="font-openSans opacity-[.8] my-6 w-[70%] max-lg:w-full text-[14px]">
          {product.text}
        </p>
        <ContactSection />
      </article>
    </section>
  );
}

export default ProductPage;
