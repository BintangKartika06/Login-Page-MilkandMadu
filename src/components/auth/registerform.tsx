import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
const SocialLogins: React.FC = () => (
  <div className="w-full max-w-sm mt-8">
    <div className="relative flex items-center justify-center mb-6">
      <div className="border-t border-gray-200 w-full absolute"></div>
      <span className="bg-white px-4 text-[0.65rem] text-gray-400 relative z-10 font-bold tracking-widest uppercase">
        — or —
      </span>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {/* Tombol Google */}
      <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 px-4 hover:bg-gray-50 transition-all text-[0.7rem] font-bold">
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        </svg>
        Google
      </button>
      {/* Tombol Apple */}
      <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 px-4 hover:bg-gray-50 transition-all text-[0.7rem] font-bold">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C4.34 17.06 4.3 11.2 7.2 11.04c1.17 0 1.94.52 2.64.52.7 0 1.7-.56 3.06-.56 1.48.06 2.65.6 3.37 1.63-2.92 1.83-2.46 5.8.53 7.05-.6 1.55-1.54 3.1-2.75 4.6zm-3.15-18.78c-.06 1.76-1.54 3.1-3.06 2.94-.22-1.74 1.34-3.18 3.06-2.94z"/>
        </svg>
        Apple
      </button>
    </div>
  </div>
);

interface AuthProps { 
  onSwitch: () => void 
}

const RegisterForm: React.FC<AuthProps> = ({ onSwitch }) => {
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="w-full flex flex-col items-center animate-in fade-in duration-500">
      <div className="mb-6 flex flex-col items-center">
        {/* Logo Madu & Milk */}
        <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center mb-4">
          <span className="font-serif font-bold text-[0.6rem] text-center leading-tight">Milk &<br/>Madu</span>
        </div>
        <h1 className="text-xl font-bold text-gray-900">Buat Akun Gratis</h1>
      </div>

      <form className="w-full space-y-4" onSubmit={e => e.preventDefault()}>
        {/* Input Nama Lengkap */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 ml-1">Nama Lengkap</label>
          <input 
            type="text" 
            placeholder="Masukkan Nama Lengkap Anda" 
            className="w-full px-4 py-3 rounded-xl bg-[#F0F2F5] border-none focus:ring-2 focus:ring-yellow-400 outline-none text-sm transition-all" 
          />
        </div>

        {/* Input Email */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 ml-1">Email</label>
          <input 
            type="email" 
            placeholder="Masukkan Email Anda" 
            className="w-full px-4 py-3 rounded-xl bg-[#F0F2F5] border-none focus:ring-2 focus:ring-yellow-400 outline-none text-sm transition-all" 
          />
        </div>

        {/* Input Kata Sandi */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 ml-1">Kata Sandi</label>
          <div className="relative">
            <input 
              type={showPwd ? "text" : "password"} 
              placeholder="Masukkan Kata Sandi Anda" 
              className="w-full px-4 py-3 rounded-xl bg-[#F0F2F5] border-none focus:ring-2 focus:ring-yellow-400 outline-none text-sm pr-12 transition-all" 
            />
            <button 
              type="button" 
              onClick={() => setShowPwd(!showPwd)} 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Konfirmasi Kata Sandi */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 ml-1">Konfirmasi Kata Sandi</label>
          <div className="relative">
            <input 
              type={showConfirm ? "text" : "password"} 
              placeholder="Ulangi Kata Sandi" 
              className="w-full px-4 py-3 rounded-xl bg-[#F0F2F5] border-none focus:ring-2 focus:ring-yellow-400 outline-none text-sm pr-12 transition-all" 
            />
            <button 
              type="button" 
              onClick={() => setShowConfirm(!showConfirm)} 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Tombol Daftar */}
        <button className="w-full bg-[#FFFF00] hover:bg-[#F2F200] active:scale-[0.98] text-black font-black py-3.5 rounded-full shadow-md mt-4 text-sm transition-all uppercase tracking-tight">
          Buat Akun
        </button>
      </form>

      {/* Navigasi Ke Login */}
      <div className="mt-6 text-xs flex flex-col items-center gap-2">
        <p className="text-gray-500 font-medium">
          Sudah punya akun? 
          <button onClick={onSwitch} className="ml-1 text-blue-600 font-bold hover:underline">
            Masuk
          </button>
        </p>
        <button className="text-black font-black uppercase tracking-tighter hover:opacity-70 transition-opacity">
          Butuh Bantuan?
        </button>
      </div>

      <SocialLogins />
    </div>
  );
};

export default RegisterForm;