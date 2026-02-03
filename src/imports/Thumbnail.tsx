import img9687346402411 from "image/backgroubd.png";
import imgRegisterAccountPage1 from "image/RegisterAccountPage1.png";

export default function Thumbnail() {
  return (
    <div className="bg-white relative size-full" data-name="Thumbnail">
      <div className="absolute h-[1024px] left-[-190px] opacity-80 top-0 w-[1820px]" data-name="968734_640241 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img9687346402411} />
      </div>
      <div className="absolute h-[751px] left-[192px] shadow-[0px_48px_51.9px_17px_rgba(0,0,0,0.25)] top-[136px] w-[1056px]" data-name="Register Account Page 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRegisterAccountPage1} />
      </div>
    </div>
  );
}