import { useState } from "react";
import ImageSlideshow from "./ImageSlideshow";
import svgPaths from "../imports/svg-gc0ax7mkue";
import imgGoogle from "figma:asset/c60f0ff5395f93b4cff610fb1b675dcc70e362d2.png";
import imgAppleLogoBlack1 from "image/applelogoblack.svg";
import imgRectangle1 from "figma:asset/2442acfa848f8e5dd992c0a12eee5fe62877dc1f.png";

interface LoginPageProps {
  onNavigateToRegister: () => void;
}

export default function LoginPage({ onNavigateToRegister }: LoginPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    // Handle login logic here
  };

  const handleGoogleLogin = () => {
    console.log("Initiating Google login...");
    // In a real application, this would redirect to Google OAuth
    alert("Google login initiated! In a real app, this would redirect to Google's authentication page.");
    // Example: window.location.href = 'YOUR_GOOGLE_OAUTH_URL';
  };

  const handleAppleLogin = () => {
    console.log("Initiating Apple login...");
    // In a real application, this would redirect to Apple OAuth
    alert("Apple login initiated! In a real app, this would redirect to Apple's authentication page.");
    // Example: window.location.href = 'YOUR_APPLE_OAUTH_URL';
  };

  return (
    <div className="bg-white relative w-full h-screen overflow-hidden">
      <ImageSlideshow />
      
      <div className="absolute bg-white h-[1024px] left-[650px] rounded-bl-[20px] rounded-tl-[20px] top-0 w-[790px]" />

      {/* Logo */}
      <div className="absolute h-[88px] left-[1006px] top-[25px] w-[94px]">
        <img alt="Logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="absolute left-[763px] top-[142px]">
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] text-center not-italic text-[32px] text-black mb-[95px]">
          Log In
        </p>

        {/* Full Name Input */}
        <div className="mb-[53px]">
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic text-[#828282] text-[20px] mb-[15px]">
            Full Name
          </p>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Enter Your Full Name Here"
            className="bg-[rgba(232,238,244,0.81)] h-[61px] rounded-[18px] w-[581px] px-[32px] font-['Poppins:Medium',sans-serif] text-[20px] text-black placeholder:text-[#afafaf] outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Email Input */}
        <div className="mb-[53px]">
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic text-[#828282] text-[20px] mb-[15px]">
            Email
          </p>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Enter Your Email Here"
            className="bg-[rgba(232,238,244,0.81)] h-[61px] rounded-[18px] w-[581px] px-[32px] font-['Poppins:Medium',sans-serif] text-[20px] text-black placeholder:text-[#afafaf] outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Password Input */}
        <div className="mb-[48px]">
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic text-[#828282] text-[20px] mb-[15px]">
            Password
          </p>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Enter Your Password Here"
              className="bg-[rgba(232,238,244,0.81)] h-[61px] rounded-[18px] w-[581px] px-[32px] font-['Poppins:Medium',sans-serif] text-[20px] text-black placeholder:text-[#afafaf] outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-[24px] top-1/2 -translate-y-1/2 w-[26px] h-[20px] cursor-pointer"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.4196 20.1251">
                  <path clipRule="evenodd" d={svgPaths.p369dd00} fill="#BFBFBF" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p318ae100} fill="black" fillRule="evenodd" />
                </svg>
              ) : (
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6035 24.5">
                  <path clipRule="evenodd" d={svgPaths.pfd19ef2} fill="black" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3aea2580} fill="#BFBFBF" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p13929e00} fill="#BFBFBF" fillRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="bg-[#fe0] h-[70px] rounded-[28px] w-[352px] ml-[116px] mb-[17px] hover:bg-[#ffee33] transition-colors cursor-pointer"
        >
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic text-[24px] text-black">
            Log In
          </p>
        </button>

        {/* Create Account Link */}
        <div className="flex justify-center mb-[33px]">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic text-[15px] text-black">
            Don't Have an Account?{" "}
          </p>
          <button
            type="button"
            onClick={onNavigateToRegister}
            className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic text-[#001aff] text-[15px] underline ml-[5px] cursor-pointer hover:text-[#0015cc]"
          >
            Create Account
          </button>
        </div>

        {/* Need Help */}
        <p className="font-['Poppins:Bold',sans-serif] leading-[normal] text-center not-italic text-[14px] text-black mb-[71px] cursor-pointer hover:text-gray-700">
          Need Help?
        </p>

        {/* OR Separator */}
        <p className="font-['Poppins:Medium',sans-serif] leading-[normal] text-center not-italic text-[#716f6f] text-[20px] mb-[64px]">
          - OR -
        </p>

        {/* Social Login Buttons */}
        <div className="flex gap-[117px]">
          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="bg-white border border-black border-solid h-[56px] rounded-[18px] w-[210px] flex items-center justify-center gap-[12px] hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="h-[38px] w-[36px]">
              <img alt="Google" className="max-w-none object-contain pointer-events-none size-full" src={imgGoogle} />
            </div>
            <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic text-[13px] text-black">
              Sign in with Google
            </p>
          </button>

          {/* Apple Button */}
          <button
            type="button"
            onClick={handleAppleLogin}
            className="bg-white border border-black border-solid h-[56px] rounded-[18px] w-[210px] flex items-center justify-center gap-[12px] hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="h-[33px] w-[27px]">
              <img alt="Apple" className="max-w-none object-cover pointer-events-none size-full" src={imgAppleLogoBlack1} />
            </div>
            <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic text-[13px] text-black">
              Sign in with Apple
            </p>
          </button>
        </div>
      </form>
    </div>
  );
}