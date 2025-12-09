import React from 'react';

export const ServiceCard = ({ item, onClick }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Activo': return 'bg-green-100 text-green-700 border-green-200';
      case 'Ocupado': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Mantenimiento': return 'bg-red-100 text-red-700 border-red-200';
      case 'Inactivo': return 'bg-gray-100 text-gray-600 border-gray-200';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div
      onClick={() => onClick(item)}
      className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#009c3b] transition-all duration-300 cursor-pointer flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-gradient-to-br from-[#009c3b] to-[#007a2e] rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
          {item.icon}
        </div>
        <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(item.status)}`}>
          {item.status}
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#009c3b] transition-colors">
        {item.title}
      </h3>
      
      <p className="text-sm text-gray-500 mb-4 flex-grow">
        {item.description || 'Servicio disponible para gestión omnicanal'}
      </p>
      
      <div className="flex items-center text-[#009c3b] font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
        Acceder
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};