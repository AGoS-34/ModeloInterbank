import React, { useState } from 'react';
import { LogIn } from 'lucide-react';

export const LoginScreen = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    
    if (username.toLowerCase() === 'gabriel' && password === '1234') {
      handleLogin(true, "Gabriel Hurtado");
    } else {
      setError("Credenciales inválidas. Use 'gabriel' / '1234'.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#009c3b] to-[#007a2e] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="text-4xl font-bold text-[#009c3b]">Interbank</div>
            <div className="w-3 h-3 bg-[#ffd100] rounded-full ml-2"></div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Portal Ejecutivo Omnicanal</h2>
          <p className="text-gray-500 text-sm">Acceso restringido</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Usuario
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009c3b] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009c3b] focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#009c3b] to-[#007a2e] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <LogIn className="w-5 h-5" />
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};