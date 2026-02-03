import React, { useState } from 'react';
import Login from './components/LoginPage';
import Register from './components/RegisterPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'login' | 'register'>('login');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f3e8] via-[#e8e5d3] to-[#d4d1c0] flex items-center justify-center p-4">
      {currentPage === 'login' ? (
        <Login onSwitchToRegister={() => setCurrentPage('register')} />
      ) : (
        <Register onSwitchToLogin={() => setCurrentPage('login')} />
      )}
    </div>
  );
}

export default App;
