import facebook from "../../assets/facebook.png";
import envelope from "../../assets/Envelope.png";
import instagram from "../../assets/instagram.png";
import linkdin from "../../assets/Linkedin.png";
function SocialMedia() {
  return (
    <ul className="flex items-center justify-center gap-2 mt-4 max-lg:my-9 max-sm:mt-10 lg:w-[fit-content] xl:max-w-[300px]">
      <li className="border border-3 border-black w-[40px] h-[40px] flex items-center justify-center rounded-full opacity-[.5]">
        <a href="#">
          <img src={facebook} alt="social media logo" />
        </a>
      </li>
      <li className="border border-3 border-black w-[40px] h-[40px] flex items-center justify-center rounded-full opacity-[.5]">
        <a href="#">
          <img src={instagram} alt="social media logo" />
        </a>
      </li>
      <li className="border border-3 border-black w-[40px] h-[40px] flex items-center justify-center rounded-full opacity-[.5]">
        <a href="#">
          <img src={envelope} alt="social media logo" />
        </a>
      </li>
      <li className="border border-3 border-black w-[40px] h-[40px] flex items-center justify-center rounded-full opacity-[.5]">
        <a href="#">
          <img src={linkdin} alt="social media logo" />
        </a>
      </li>
    </ul>
  );
}

export default SocialMedia;
