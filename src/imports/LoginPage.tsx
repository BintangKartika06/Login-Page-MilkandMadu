import svgPaths from "./svg-gc0ax7mkue";
import imgAlexanderStartsevNdNw6QgrCUnsplash1 from "figma:asset/907587bbe4716f71e3bc8b6c27aee77528e12228.png";
import imgBrunaBrancoT8HTmte4OGUnsplash1 from "figma:asset/2253934e8a0ad703e7b9253aac67ea3f159a035e.png";
import imgMaeMuTkzdkVn1AyAUnsplash1 from "figma:asset/a5284c8200ddeeb01bc4396479826ec51ebefc60.png";
import imgGoogle from "figma:asset/c60f0ff5395f93b4cff610fb1b675dcc70e362d2.png";
import imgAppleLogoBlack1 from "figma:asset/3d3984d9d51c1e28cf6e1521ee434231cea860b0.png";
import imgRectangle1 from "figma:asset/2442acfa848f8e5dd992c0a12eee5fe62877dc1f.png";

function ImageSlideshow() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Image Slideshow">
      <div className="absolute h-[1020px] left-0 top-0 w-[680px]" data-name="alexander-startsev-ndNw_6QGR_c-unsplash 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAlexanderStartsevNdNw6QgrCUnsplash1} />
      </div>
      <div className="absolute h-[1021px] left-0 top-0 w-[681px]" data-name="bruna-branco-t8hTmte4O_g-unsplash 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBrunaBrancoT8HTmte4OGUnsplash1} />
      </div>
      <div className="absolute h-[1024px] left-0 top-0 w-[680px]" data-name="mae-mu-TkzdkVn1AyA-unsplash 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-6.94%] max-w-none top-0 w-[120.5%]" src={imgMaeMuTkzdkVn1AyAUnsplash1} />
        </div>
      </div>
    </div>
  );
}

function EyeClose() {
  return (
    <div className="absolute inset-[52.44%_7.94%_45.17%_90.21%]" data-name="eye-close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6035 24.5">
        <g id="eye-close">
          <path clipRule="evenodd" d={svgPaths.pfd19ef2} fill="var(--fill-0, black)" fillRule="evenodd" id="vector (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p3aea2580} fill="var(--fill-0, #BFBFBF)" fillRule="evenodd" id="vector (Stroke)_2" />
          <path clipRule="evenodd" d={svgPaths.p13929e00} fill="var(--fill-0, #BFBFBF)" fillRule="evenodd" id="vector (Stroke)_3" />
        </g>
      </svg>
    </div>
  );
}

function EyeOpen() {
  return (
    <div className="absolute inset-[52.64%_7.96%_45.4%_90.21%]" data-name="eye-open">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.4196 20.1251">
        <g id="eye-open">
          <path clipRule="evenodd" d={svgPaths.p369dd00} fill="var(--fill-0, #BFBFBF)" fillRule="evenodd" id="vector (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p318ae100} fill="var(--fill-0, black)" fillRule="evenodd" id="vector (Stroke)_2" />
        </g>
      </svg>
    </div>
  );
}

function StyleDoutone() {
  return (
    <div className="absolute contents inset-[52.64%_7.96%_45.4%_90.21%]" data-name="style=doutone">
      <EyeOpen />
    </div>
  );
}

function InputPassword() {
  return (
    <div className="absolute contents left-[763px] top-[488px]" data-name="InputPassword">
      <div className="absolute bg-[rgba(232,238,244,0.81)] h-[61px] left-[763px] rounded-[18px] top-[518px] w-[581px]" data-name="Input_Fullname" />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[795px] not-italic text-[#afafaf] text-[20px] top-[534px]">Enter Your Password Here</p>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[763px] not-italic text-[#828282] text-[20px] top-[488px]">Password</p>
      <EyeClose />
      <StyleDoutone />
    </div>
  );
}

function InputEmail() {
  return (
    <div className="absolute contents left-[763px] top-[365px]" data-name="InputEmail">
      <div className="absolute bg-[rgba(232,238,244,0.81)] h-[61px] left-[763px] rounded-[18px] top-[395px] w-[581px]" data-name="Input_Fullname" />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[795px] not-italic text-[#afafaf] text-[20px] top-[411px]">Enter Your Email Here</p>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[763px] not-italic text-[#828282] text-[20px] top-[365px]">Email</p>
    </div>
  );
}

function InputName() {
  return (
    <div className="absolute contents left-[763px] top-[237px]" data-name="InputName">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[763px] not-italic text-[#828282] text-[20px] top-[237px]">Full Name</p>
      <div className="absolute bg-[rgba(232,238,244,0.81)] h-[61px] left-[763px] rounded-[18px] top-[272px] w-[581px]" data-name="Input_Fullname" />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[795px] not-italic text-[#afafaf] text-[20px] top-[288px]">Enter Your Full Name Here</p>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute contents left-[763px] top-[142px]" data-name="Section">
      <InputPassword />
      <InputEmail />
      <InputName />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[1006px] not-italic text-[32px] text-black top-[142px]">Log In</p>
    </div>
  );
}

function Slider() {
  return (
    <div className="absolute h-[10px] left-[290px] top-[970px] w-[51px]" data-name="Slider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 10">
        <g id="Slider">
          <circle cx="5" cy="5" fill="var(--fill-0, white)" id="Ellipse 1" opacity="0.5" r="5" />
          <circle cx="46" cy="5" fill="var(--fill-0, white)" id="Ellipse 2" opacity="0.5" r="5" />
          <circle cx="26" cy="5" fill="var(--fill-0, white)" id="Ellipse 3" r="5" />
        </g>
      </svg>
    </div>
  );
}

function CreateAccount() {
  return (
    <div className="absolute contents left-[879px] top-[628px]" data-name="CreateAccount">
      <div className="absolute bg-[#fe0] h-[70px] left-[879px] rounded-[28px] top-[628px] w-[352px]" />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[1018px] not-italic text-[24px] text-black top-[645px]">Log In</p>
    </div>
  );
}

function ButtonGoogle() {
  return (
    <div className="absolute contents left-[780px] top-[883px]" data-name="ButtonGoogle">
      <div className="absolute bg-white border border-black border-solid h-[56px] left-[780px] rounded-[18px] top-[883px] w-[210px]" data-name="Button" />
      <div className="absolute h-[38px] left-[794px] top-[892px] w-[36px]" data-name="Google">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgGoogle} />
      </div>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[842px] not-italic text-[13px] text-black top-[901px]">Sign in with Google</p>
    </div>
  );
}

function ButtonApple() {
  return (
    <div className="absolute contents left-[1107px] top-[883px]" data-name="ButtonApple">
      <div className="absolute bg-white border border-black border-solid h-[56px] left-[1107px] rounded-[18px] top-[883px] w-[210px]" data-name="Button" />
      <div className="absolute h-[33px] left-[1125px] top-[894px] w-[27px]" data-name="Apple_logo_black 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAppleLogoBlack1} />
      </div>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[1169px] not-italic text-[13px] text-black top-[901px]">Sign in with Apple</p>
    </div>
  );
}

function NavigationArrowLeft() {
  return (
    <div className="absolute left-[37px] size-[50px] top-[487px]" data-name="Navigation Arrow Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Navigation Arrow Left" opacity="0.53">
          <circle cx="25" cy="25" fill="var(--fill-0, white)" fillOpacity="0.26" id="Ellipse 4" r="25" />
          <g id="Vector">
            <path d={svgPaths.p16d28800} fill="var(--fill-0, #D9D9D9)" />
            <path d={svgPaths.p1573d4f0} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NavigationArrowRight() {
  return (
    <div className="relative size-[50px]" data-name="Navigation Arrow Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Navigation Arrow Right" opacity="0.53">
          <circle cx="25" cy="25" fill="var(--fill-0, white)" fillOpacity="0.26" id="Ellipse 4" r="25" />
          <g id="Vector">
            <path d={svgPaths.p16d28800} fill="var(--fill-0, #D9D9D9)" />
            <path d={svgPaths.p1573d4f0} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="bg-white relative size-full" data-name="Login Page">
      <ImageSlideshow />
      <div className="absolute bg-white h-[1024px] left-[650px] rounded-bl-[20px] rounded-tl-[20px] top-0 w-[790px]" />
      <Section />
      <Slider />
      <div className="absolute h-[88px] left-[1006px] top-[25px] w-[94px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
      <CreateAccount />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[903px] not-italic text-[15px] text-black top-[715px]">{`Don't Have an Account? `}</p>
      <p className="absolute decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] left-[1089px] not-italic text-[#001aff] text-[15px] top-[715px] underline">Create Account</p>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[1011px] not-italic text-[#716f6f] text-[20px] top-[819px]">{` - OR -`}</p>
      <ButtonGoogle />
      <ButtonApple />
      <NavigationArrowLeft />
      <div className="absolute flex items-center justify-center left-[566px] size-[50px] top-[487px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <NavigationArrowRight />
        </div>
      </div>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[1013px] not-italic text-[14px] text-black top-[748px]">Need Help?</p>
    </div>
  );
}