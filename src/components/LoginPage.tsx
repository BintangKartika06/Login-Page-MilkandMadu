import React, { useState } from 'react';
import { Eye, EyeOff, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageSlideshow } from './ImageSlideshow';

interface LoginProps {
  onSwitchToRegister: () => void;
}

export default function Login({ onSwitchToRegister }: LoginProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{fullName?: string; email?: string; password?: string}>({});

  const validateForm = () => {
    const newErrors: {fullName?: string; email?: string; password?: string} = {};
    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Login submitted:', { fullName, email, password });
      // Add your login logic here
      alert('Login successful!');
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // Add Google OAuth logic here
  };

  const handleAppleLogin = () => {
    console.log('Apple login clicked');
    // Add Apple OAuth logic here
  };

  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden flex aspect-video">
      {/* Left side - Image Slideshow */}
      <div className="hidden md:block md:w-1/2 relative">
        <ImageSlideshow />
      </div>

      {/* Right side - Login Form */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-center mb-8">Log In</h1>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your Full Name Here"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email Here"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password Here"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] mt-6"
          >
            Log in
          </button>
        </form>

        {/* Create Account Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't Have an Account?{' '}
            <button
              onClick={onSwitchToRegister}
              className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
            >
              Create Account
            </button>
          </p>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline mt-1">
            Need Help?
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M19.9 10.2273C19.9 9.51819 19.8364 8.83637 19.7182 8.18182H10.2V12.05H15.6636C15.4091 13.3 14.6727 14.3591 13.5864 15.0682V17.5773H16.8636C18.7909 15.8364 19.9 13.2727 19.9 10.2273Z" fill="#4285F4"/>
              <path d="M10.2 20C12.9 20 15.1727 19.1045 16.8636 17.5773L13.5864 15.0682C12.6636 15.6682 11.5182 16.0227 10.2 16.0227C7.59545 16.0227 5.38182 14.2636 4.56364 11.9H1.17273V14.4909C2.85455 17.8409 6.24545 20 10.2 20Z" fill="#34A853"/>
              <path d="M4.56364 11.9C4.34091 11.3 4.21364 10.6591 4.21364 10C4.21364 9.34091 4.34091 8.7 4.56364 8.1V5.50909H1.17273C0.509091 6.82727 0.136364 8.37273 0.136364 10C0.136364 11.6273 0.509091 13.1727 1.17273 14.4909L4.56364 11.9Z" fill="#FBBC04"/>
              <path d="M10.2 3.97727C11.6364 3.97727 12.9182 4.48182 13.9227 5.43636L16.8455 2.51364C15.1682 0.886364 12.8955 0 10.2 0C6.24545 0 2.85455 2.15909 1.17273 5.50909L4.56364 8.1C5.38182 5.73636 7.59545 3.97727 10.2 3.97727Z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-medium">Sign in with Google</span>
          </button>

          <button
            onClick={handleAppleLogin}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.9498 16.3479C16.4665 17.4229 15.9165 18.4229 15.2915 19.3562C14.4248 20.6312 13.7165 21.5062 13.1748 21.9812C12.3498 22.7479 11.4582 23.1396 10.4915 23.1646C9.78317 23.1646 8.92484 22.9729 7.92484 22.5812C6.9165 22.1896 6.00817 21.9979 5.18317 21.9979C4.3165 21.9979 3.38317 22.1896 2.37484 22.5812C1.36651 22.9729 0.541504 23.1729 -0.0918297 23.1979C-1.0168 23.2479 -1.9335 22.8479 -2.84183 22.0062C-3.42516 21.4896 -4.1585 20.5812 -5.04183 19.2729C-5.9835 17.8812 -6.7585 16.2562 -7.37516 14.3896C-8.0335 12.3479 -8.3335 10.3729 -8.3335 8.46458C-8.3335 6.28958 -7.9085 4.43958 -7.05017 2.92291C-6.38349 1.73958 -5.47516 0.814575 -4.31683 0.147908C-3.15849 -0.518759 -1.90849 -0.860092 -0.558493 -0.885092C0.191507 -0.885092 1.14984 -0.651759 2.3165 -0.193425C3.49151 0.272908 4.24984 0.506241 4.59984 0.506241C4.8665 0.506241 5.70817 0.231241 7.10817 -0.318425C8.44151 -0.826759 9.5665 -1.01842 10.4915 -0.976759C12.8332 -0.851759 14.5748 0.0232414 15.7082 1.68958C13.6248 2.96458 12.5915 4.68124 12.6165 6.83124C12.6415 8.56458 13.2498 10.0146 14.4498 11.1646C15.0082 11.6979 15.6332 12.1146 16.3332 12.4229C16.1998 12.7729 16.0665 13.1146 15.9248 13.4479C15.6248 14.4229 15.3082 15.3646 14.9748 16.2729L16.9498 16.3479Z" transform="translate(8.33333 -0.114258)" fill="black"/>
              <path d="M10.2 -7C10.2 -5.73333 9.73333 -4.53333 8.8 -3.4C7.66667 -2.05 6.3 -1.26667 4.83333 -1.13333C4.81667 -0.983333 4.80833 -0.825 4.80833 -0.658333C4.80833 0.541667 5.21667 1.65 6.1 2.73333C6.88333 3.7 7.95 4.28333 9.1 4.35C9.11667 4.2 9.125 4.05833 9.125 3.925C9.125 2.73333 8.66667 1.58333 7.8 0.5C7.03333 -0.466667 6.05 -1.08333 5 -1.25C5.01667 -1.4 5.025 -1.55 5.025 -1.7C5.025 -4.65 7.28333 -6.33333 10.2 -7Z" transform="translate(8.33333 7.88574)" fill="black"/>
            </svg>
            <span className="text-sm font-medium">Sign in with Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
}
