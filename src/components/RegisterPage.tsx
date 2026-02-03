import { useState } from "react";
import ImageSlideshow from "./ImageSlideshow";
import svgPaths from "../imports/svg-fjrt8ztqe1";
import imgGoogle from "image/googlelogo.svg";
import imgAppleLogoBlack1 from "image/applelogoblack.svg";
import imgRectangle1 from "image/milkmadu.png";

interface RegisterPageProps {
  onNavigateToLogin: () => void;
}

export default function RegisterPage({ onNavigateToLogin }: RegisterPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Register attempt:", formData);
    // Handle registration logic here
  };

  const handleGoogleSignup = () => {
    console.log("Initiating Google signup...");
    // In a real application, this would redirect to Google OAuth
    alert("Google signup initiated! In a real app, this would redirect to Google's authentication page.");
    // Example: window.location.href = 'YOUR_GOOGLE_OAUTH_URL';
  };

  const handleAppleSignup = () => {
    console.log("Initiating Apple signup...");
    // In a real application, this would redirect to Apple OAuth
    alert("Apple signup initiated! In a real app, this would redirect to Apple's authentication page.");
    // Example: window.location.href = 'YOUR_APPLE_OAUTH_URL';
  };

  return (
    <div className="bg-white relative w-full h-screen overflow-hidden">
      <ImageSlideshow />
      
      <div className="absolute bg-white h-[1024px] left-[650px] rounded-bl-[20px] rounded-tl-[20px] top-0 w-[790px]" />

      {/* Logo */}
      <div className="absolute h-[88px] left-[998px] top-[25px] w-[94px]">
        <img alt="Logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="absolute left-[760px] top-[150px]">
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] text-center not-italic text-[24px] text-black mb-[72px]">
          Create Your Free Account
        </p>

        {/* Full Name Input */}
        <div className="mb-[38px]">
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
        <div className="mb-[38px]">
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
        <div className="mb-[38px]">
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

        {/* Confirm Password Input */}
        <div className="mb-[44px]">
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic text-[#828282] text-[20px] mb-[15px]">
            Confirm Password
          </p>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              placeholder="Enter Your Password Here"
              className="bg-[rgba(232,238,244,0.81)] h-[61px] rounded-[18px] w-[581px] px-[32px] font-['Poppins:Medium',sans-serif] text-[20px] text-black placeholder:text-[#afafaf] outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-[24px] top-1/2 -translate-y-1/2 w-[26px] h-[20px] cursor-pointer"
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            >
              {showConfirmPassword ? (
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

        {/* Create Account Button */}
        <button
          type="submit"
          className="bg-[#fe0] h-[70px] rounded-[28px] w-[352px] ml-[109px] mb-[21px] hover:bg-[#ffee33] transition-colors cursor-pointer"
        >
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic text-[24px] text-black">
            Create Account
          </p>
        </button>

        {/* Login Link */}
        <div className="flex justify-center mb-[34px]">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic text-[15px] text-black">
            Already have a account?{" "}
          </p>
          <button
            type="button"
            onClick={onNavigateToLogin}
            className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic text-[#001aff] text-[15px] underline ml-[5px] cursor-pointer hover:text-[#0015cc]"
          >
            Log In
          </button>
        </div>

        {/* Need Help */}
        <p className="font-['Poppins:Bold',sans-serif] leading-[normal] text-center not-italic text-[14px] text-black mb-[72px] cursor-pointer hover:text-gray-700">
          Need Help?
        </p>

        {/* OR Separator */}
        <p className="font-['Poppins:Medium',sans-serif] leading-[normal] text-center not-italic text-[#716f6f] text-[20px] mb-[27px]">
          - OR -
        </p>

        {/* Social Login Buttons */}
        <div className="flex gap-[117px] ml-[15px]">
          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleSignup}
            className="bg-white border border-black border-solid h-[56px] rounded-[18px] w-[210px] flex items-center justify-center gap-[12px] hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="h-[38px] w-[36px]">
              <img alt="Google" className="max-w-none object-contain pointer-events-none size-full" src={imgGoogle} />
            </div>
            <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic text-[13px] text-black">
              Sign up with Google
            </p>
          </button>

          {/* Apple Button */}
          <button
            type="button"
            onClick={handleAppleSignup}
            className="bg-white border border-black border-solid h-[56px] rounded-[18px] w-[210px] flex items-center justify-center gap-[12px] hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="h-[33px] w-[27px]">
              <img alt="Apple" className="max-w-none object-cover pointer-events-none size-full" src={imgAppleLogoBlack1} />
            </div>
            <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic text-[13px] text-black">
              Sign up with Apple
            </p>
          </button>
        </div>
      </form>
    </div>
  );
}