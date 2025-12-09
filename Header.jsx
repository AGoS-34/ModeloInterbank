import React from 'react';
import { Search, AlertCircle, RefreshCw, LogOut } from 'lucide-react';

export const Header = ({ 
  user, 
  clientSearchTerm, 
  setClientSearchTerm, 
  searchTerm, 
  setSearchTerm,
  onReportIncident,
  onLogout 
}) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Búsqueda de Cliente */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar cliente por DNI, nombre o cuenta..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009c3b] focus:border-transparent"
                value={clientSearchTerm}
                onChange={(e) => setClientSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Logo Interbank */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-[#009c3b]">Interbank</div>
            <div className="w-2 h-2 bg-[#ffd100] rounded-full"></div>
          </div>

          {/* Búsqueda de Servicios */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar servicios..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009c3b] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* User Info */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm font-semibold text-gray-800">{user.name}</div>
              <div className="text-xs text-gray-500">{user.role} | {user.id}</div>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-[#009c3b] to-[#007a2e] rounded-full flex items-center justify-center text-white font-bold">
              {user.name.charAt(0)}{user.name.split(" ")[1]?.charAt(0) || ''}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={onReportIncident}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
            title="Abrir formulario de Ingreso de Reclamos"
          >
            <AlertCircle className="w-4 h-4" />
            Reportar Incidencia
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Actualizar Datos
          </button>
          <button 
            onClick={onLogout}
            className="px-4 py-2 bg-red-50 border border-red-200 rounded-lg text-sm font-medium text-red-700 hover:bg-red-100 transition-colors flex items-center gap-2 ml-auto"
          >
            <LogOut className="w-4 h-4" />
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
};