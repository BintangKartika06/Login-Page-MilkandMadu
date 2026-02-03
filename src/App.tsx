import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye, EyeOff } from 'lucide-react';
import logoMadu from './assets/milkmadu.png';


const SocialLogins: React.FC = () => (
  <div className="w-full max-w-sm mt-8">
    <div className="relative flex items-center justify-center mb-6">
      <div className="border-t border-gray-200 w-full absolute"></div>
      <span className="bg-white px-4 text-[0.65rem] text-gray-400 relative z-10 font-bold tracking-widest uppercase">— or —</span>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 px-4 hover:bg-gray-50 transition-all text-[0.7rem] font-bold">
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        </svg>
        Google
      </button>
      <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 px-4 hover:bg-gray-50 transition-all text-[0.7rem] font-bold">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C4.34 17.06 4.3 11.2 7.2 11.04c1.17 0 1.94.52 2.64.52.7 0 1.7-.56 3.06-.56 1.48.06 2.65.6 3.37 1.63-2.92 1.83-2.46 5.8.53 7.05-.6 1.55-1.54 3.1-2.75 4.6zm-3.15-18.78c-.06 1.76-1.54 3.1-3.06 2.94-.22-1.74 1.34-3.18 3.06-2.94z"/>
        </svg>
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
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=1200"
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
              src={img}
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