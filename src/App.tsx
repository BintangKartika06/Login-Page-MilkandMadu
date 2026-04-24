import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye, EyeOff } from 'lucide-react';
import logoMadu from './assets/milkmadu.png';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import googleIcon from './assets/googlelogo.svg';
import appleIcon from './assets/applelogoblack.svg';


const SocialLogins: React.FC = () => (
  <div className="w-full max-w-sm mt-8">
    <div className="relative flex items-center justify-center mb-6">
      <div className="border-t border-gray-200 w-full absolute"></div>
      <span className="bg-white px-4 text-[0.65rem] text-gray-400 relative z-10 font-bold tracking-widest uppercase">— or —</span>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {/* Tombol Google */}
      <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 px-4 hover:bg-gray-50 active:scale-95 transition-all text-[0.7rem] font-bold">
        <img 
          src={googleIcon}
          alt="Google" 
          className="w-4 h-4 object-contain" 
        />
        Google
      </button>

      {}
      <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 px-4 hover:bg-gray-50 active:scale-95 transition-all text-[0.7rem] font-bold">
        <img 
          src={appleIcon}
          alt="Apple" 
          className="w-4 h-4 object-contain" 
        />
        Apple
      </button>
    </div>
  </div>
);

const App: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const images = [
    "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1000&auto=format&fit=crop"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert("Silakan masukkan email dan password Anda.");
      return;
    }

    setIsLoading(true);

    // Simulasi loading sebentar sebelum redirect ke website tujuan
    setTimeout(() => {
      window.location.href = "https://milkandmadu.com/";
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center p-4 md:p-10 font-sans">
      <div className="bg-white rounded-[40px] shadow-2xl flex flex-col md:flex-row max-w-5xl w-full overflow-hidden min-h-[600px]">
        
        {/* Bagian Kiri: Gambar Makanan (Pasta) */}
        <div className="hidden md:block md:w-1/2 relative">
          <img 
            src={image1} 
            alt="Delicious Pasta" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Bagian Kanan: Form Login */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          {/* Logo Placeholder */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center p-2">
              <span className="text-[10px] font-bold text-center leading-tight"></span>
              <img src={logoMadu} alt="Milk & Madu Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          <h1 className="text-2xl font-black text-center text-[#1a1a1a] mb-8">Login</h1>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Input Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-1 ml-1">Email</label>
              <input 
                type="email"
                placeholder="Enter Your Email Here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#f1f3f7] border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
                required
              />
            </div>

            {/* Input Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-1 ml-1">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password Here"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#f1f3f7] border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Tombol Login */}
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#ffff00] hover:bg-[#ecec00] text-black font-bold py-4 rounded-full shadow-lg transform transition-transform active:scale-95 flex justify-center items-center"
            >
              {isLoading ? "LOADING..." : "LOGIN"}
            </button>
          </form>

          {/* Navigasi Tambahan */}
          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-gray-600 font-medium">
              Don't have an account? <a href="#" className="text-blue-600 font-bold hover:underline">Create Account</a>
            </p>
            <button className="text-xs font-black uppercase tracking-wider hover:underline">Need Help?</button>
          </div>

          {/* Divider OR */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <span className="px-3 text-xs text-gray-400 font-bold">OR</span>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button type="button" className="flex-1 flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
              <span className="text-sm font-bold">Google</span>
            </button>
            <button type="button" className="flex-1 flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-14.7 0-51.4-22.2-84.6-20.5-41.2 2.3-91.2 25.6-115.4 70.5-27.4 50.1-13.6 124.8 19.1 176.6 15.3 24.3 34.7 51.3 59.8 50.3 23.3-1 31.1-14.9 59-14.9 28.2 0 36.2 14.9 60.6 14.4 25.4-.5 42.1-24.3 57.3-46.3 17.5-25.3 24.6-49.7 25-50.8-.8-.4-48.2-18.4-48.7-72.2zM273.1 82.1c14.5-17.6 24.3-42.2 21.6-67.1-20.9 1-46.3 14.2-61.4 31.9-13.5 15.8-25.3 41.2-22.1 65.3 23.1 1.8 47.3-12.5 61.9-30.1z"/></svg>
              <span className="text-sm font-bold">Apple</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;