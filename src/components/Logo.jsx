import logoPart1 from "../assets/web-logo/Ellipse 2.png";
import logoPart2 from "../assets/web-logo/Search.png";
import logoPart3 from "../assets/web-logo/Vector 7.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 font-redHatDisplay">
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <img className="w-full h-full" src={logoPart1} alt="" />
        <img
          className="absolute top-[6px] left-[11px] w-5 h-5"
          src={logoPart2}
          alt=""
        />
        <img className="absolute top-[26px] left-3" src={logoPart3} alt="" />
      </div>
      <h3 className="text-2xl font-bold">
        Job <span>Hunt</span>
      </h3>
    </div>
  );
};

export default Logo;
