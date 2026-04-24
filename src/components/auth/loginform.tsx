import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const App: React.FC = () => {
  // State untuk menampung input user
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   * Logika Login:
   * 1. Mencegah reload halaman bawaan form.
   * 2. (Opsional) Validasi sederhana.
   * 3. Mengarahkan user ke URL tujuan menggunakan window.location.href.
   */
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert("Silakan masukkan email dan password Anda.");
      return;
    }

    setIsLoading(true);

    // Simulasi loading sebentar sebelum redirect
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
            src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1000&auto=format&fit=crop" 
            alt="Delicious Pasta" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Bagian Kanan: Form Login */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          {/* Logo Placeholder */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center p-2">
              <span className="text-[10px] font-bold text-center leading-tight">MILK & MADU</span>
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
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
              <span className="text-sm font-bold">Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-colors">
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