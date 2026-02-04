import React from 'react';
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

      {/* Tombol Apple */}
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

export default SocialLogins;