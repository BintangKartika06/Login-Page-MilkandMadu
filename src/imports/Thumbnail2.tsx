import img9687346402412 from "image/backgroubd.png";
import imgRegisterAccountPage2 from "image/RegisterAccountPage1.png";

export default function Thumbnail() {
  return (
    <div className="bg-white relative size-full" data-name="Thumbnail 2">
      <div className="absolute h-[1024px] left-[-190px] opacity-80 top-0 w-[1820px]" data-name="968734_640241 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img9687346402412} />
      </div>
      <div className="absolute h-[747px] left-[194px] shadow-[0px_28px_55px_18px_rgba(0,0,0,0.25)] top-[138px] w-[1051px]" data-name="Register Account Page 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRegisterAccountPage2} />
      </div>
    </div>
  );
}