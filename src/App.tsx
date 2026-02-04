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
          src={googleIcon} /* Ganti dengan {googleIcon} di VSCode */
          alt="Google" 
          className="w-4 h-4 object-contain" 
        />
        Google
      </button>

      {/* Tombol Apple */}
      <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 px-4 hover:bg-gray-50 active:scale-95 transition-all text-[0.7rem] font-bold">
        <img 
          src={appleIcon} /* Ganti dengan {appleIcon} di VSCode */
          alt="Apple" 
          className="w-4 h-4 object-contain" 
        />
        Apple
      </button>
    </div>
  </div>
);

const LoginForm: React.FC<{ onSwitch: () => void }> = ({ onSwitch }) => {
  const [showPwd, setShowPwd] = useState(false);
  return (
    <div className="w-full flex flex-col items-center animate-in fade-in duration-500">
      <div className="mb-6 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center mb-4">
          <img src={logoMadu} alt="Milk & Madu Logo" className="w-12 h-12 object-contain" />
        </div>
        <h1 className="text-xl font-bold text-gray-900">Login</h1>
      </div>
      <form className="w-full space-y-4" onSubmit={e => e.preventDefault()}>
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 ml-1">Email</label>
          <input type="email" placeholder="Enter Your Email Here" className="w-full px-4 py-3 rounded-xl bg-[#F0F2F5] border-none focus:ring-2 focus:ring-yellow-400 outline-none text-sm transition-all" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 ml-1">Password</label>
          <div className="relative">
            <input 
              type={showPwd ? "text" : "password"} 
              placeholder="Enter Your Password Here" 
              className="w-full px-4 py-3 rounded-xl bg-[#F0F2F5] border-none focus:ring-2 focus:ring-yellow-400 outline-none text-sm pr-12 transition-all" 
            />
            <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        <button className="w-full bg-[#FFFF00] hover:bg-[#F2F200] active:scale-[0.98] text-black font-black py-3.5 rounded-full shadow-md mt-4 text-sm transition-all uppercase tracking-tight">Login</button>
      </form>
      <div className="mt-6 text-xs flex flex-col items-center gap-2">
        <p className="text-gray-500 font-medium">Don't have an account? <button onClick={onSwitch} className="text-blue-600 font-bold hover:underline">Create Account</button></p>
        <button className="text-black font-black uppercase tracking-tighter hover:opacity-70 transition-opacity">Need Help?</button>
      </div>
      <SocialLogins />
    </div>
  );
};

const RegisterForm: React.FC<{ onSwitch: () => void }> = ({ onSwitch }) => {
  const [showPwd, setShowPwd] = useState(false);
  return (
    <div className="w-full flex flex-col items-center animate-in fade-in duration-500">
      <div className="mb-6 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center mb-4">
          <img src={logoMadu} alt="Milk & Madu Logo" className="w-12 h-12 object-contain" />
        </div>
        <h1 className="text-xl font-bold text-gray-900">Create Account</h1>
      </div>
      <form className="w-full space-y-4" onSubmit={e => e.preventDefault()}>
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 ml-1">Full Name</label>
          <input type="text" placeholder="Enter Your Full Name Here" className="w-full px-4 py-3 rounded-xl bg-[#F0F2F5] border-none focus:ring-2 focus:ring-yellow-400 outline-none text-sm transition-all" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 ml-1">Email</label>
          <input type="email" placeholder="Enter Your Email Here" className="w-full px-4 py-3 rounded-xl bg-[#F0F2F5] border-none focus:ring-2 focus:ring-yellow-400 outline-none text-sm transition-all" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 ml-1">Password</label>
          <div className="relative">
            <input 
              type={showPwd ? "text" : "password"} 
              placeholder="Create Your Password Here" 
              className="w-full px-4 py-3 rounded-xl bg-[#F0F2F5] border-none focus:ring-2 focus:ring-yellow-400 outline-none text-sm pr-12 transition-all" 
            />
            <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        <button className="w-full bg-[#FFFF00] hover:bg-[#F2F200] active:scale-[0.98] text-black font-black py-3.5 rounded-full shadow-md mt-4 text-sm transition-all uppercase tracking-tight">Create Account</button>
      </form>
      <div className="mt-6 text-xs flex flex-col items-center gap-2">
        <p className="text-gray-500 font-medium">Already have account? <button onClick={onSwitch} className="text-blue-600 font-bold hover:underline">Login</button></p>
        <button className="text-black font-black uppercase tracking-tighter hover:opacity-70 transition-opacity">Need Help?</button>
      </div>
      <SocialLogins />
    </div>
  );
};

const App: React.FC = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [activeImg, setActiveImg] = useState(0);

  const images = [
    ".src/images/image1.png",
    ".src/images/image2.png",
    ".src/images/image3.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => setActiveImg(prev => (prev + 1) % images.length), 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f8f8f8] p-4 font-sans">
      <div className="w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row overflow-hidden min-h-[700px]">
        
        {/* Kolom Carousel Gambar */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto group">
          {images.map((img: string, i: number) => (
            <img
              key={i}
              src={i === 0 ? image1 : i === 1 ? image2 : image3}
              alt="Suasana Milk & Madu"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === activeImg ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-black/10" />
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5">
            {images.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveImg(i)}
                className={`h-1.5 rounded-full transition-all ${i === activeImg ? 'bg-white w-6' : 'bg-white/40 w-1.5 hover:bg-white/60'}`} 
              />
            ))}
          </div>

          <button onClick={() => setActiveImg(p => (p - 1 + images.length) % images.length)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
            <ChevronLeft className="text-white w-5 h-5" />
          </button>
          <button onClick={() => setActiveImg(p => (p + 1) % images.length)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
            <ChevronRight className="text-white w-5 h-5" />
          </button>
        </div>

        {/* Kolom Form */}
        <div className="w-full md:w-1/2 p-8 md:p-14 flex items-center justify-center bg-white relative">
          <div className="w-full max-w-sm">
            {mode === 'login' ? (
              <LoginForm onSwitch={() => setMode('register')} />
            ) : (
              <RegisterForm onSwitch={() => setMode('login')} />
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;