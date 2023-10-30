import bg from "../../assets/circle_blue.png";
import picOne from "../../assets/main_ticket.png";
import Couche from "../../assets/couche.png";
import pictwo from "../../assets/pic1.png";
import pp from "../../assets/pp.png";
import { useState, useEffect } from "react";

function Right_slider({ product }) {
  const [source, setSource] = useState(picOne);

  useEffect(() => {
    if (product) {
      setSource(product.img);
    } else {
      setSource(picOne);
    }
  }, [product]);

  const handleImageClick = (newSource) => {
    setSource(newSource);
  };

  return (
    <div className="flex-[.8] max-sm:mt-10 relative flex justify-center items-center flex-col">
      {!product && (
        <img
          loading="lazy"
          src={bg}
          alt="blue circle"
          className="absolute top-[50%] object-contain w-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1] max-lg:h-[90%] "
        />
      )}

      <img
        loading="lazy"
        src={source}
        alt="ticket"
        className="h-[400px] max-sm:h-[300px] w-[100%] object-contain"
      />
      <article className="w-[65%] h-[100px] max-lg:w-[40%] max-sm:w-[100%] max-sm:m-auto flex justify-between items-center max-sm:items-start max-sm:gap-2 ">
        <img
          loading="lazy"
          src={!product ? pictwo : product.img1}
          alt="ticket"
          onClick={() => handleImageClick(!product ? pictwo : product.img1)}
          className={
            source === (!product ? pictwo : product.img1)
              ? "bordered h-[100px] border object-contain w-[100px] max-sm:w-[32%] max-sm:h-[80px] p-2 bg-white rounded-xl cursor-pointer"
              : "h-[100px] border object-contain w-[100px]  max-sm:w-[32%] max-sm:h-[80px] p-2 bg-white rounded-xl cursor-pointer"
          }
        />
        <img
          loading="lazy"
          src={!product ? Couche : product.img2}
          alt="ticket"
          className={
            source === (!product ? Couche : product.img2)
              ? "h-[100px] border object-contain bordered w-[100px] p-2 bg-white  max-sm:w-[32%] max-sm:h-[80px] rounded-xl   cursor-pointer"
              : "h-[100px] border object-contain  w-[100px] p-2 bg-white  max-sm:w-[32%] max-sm:h-[80px] rounded-xl   cursor-pointer"
          }
          onClick={() => handleImageClick(!product ? Couche : product.img2)}
        />
        <img
          loading="lazy"
          src={!product ? pp : product.img3}
          alt="ticket"
          className={
            source === (!product ? pp : product.img3)
              ? "h-[100px] border object-contain  bordered w-[100px] p-2 bg-white  max-sm:w-[32%] max-sm:h-[80px] rounded-xl   cursor-pointer"
              : "h-[100px] border object-contain  w-[100px] p-2 bg-white  max-sm:w-[32%] max-sm:h-[80px] rounded-xl   cursor-pointer"
          }
          onClick={() => handleImageClick(!product ? pp : product.img3)}
        />
      </article>
    </div>
  );
}

export default Right_slider;
