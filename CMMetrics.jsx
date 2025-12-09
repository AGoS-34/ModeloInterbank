import React, { useRef, useEffect } from 'react';
import { AlertTriangle, Check, Clock } from 'lucide-react';

export const CRMMetrics = ({ crmMetrics }) => {
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = 0;
    }
  }, [crmMetrics.log]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg border border-blue-100 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5 text-blue-600" />
        Resumen del Flujo de Trabajo CRM
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Métrica 1: Reclamos Pendientes */}
        <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-yellow-500">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-600">Reclamos Pendientes</span>
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="text-3xl font-bold text-gray-800">{crmMetrics.pending}</div>
        </div>

        {/* Métrica 2: Reclamos Resueltos */}
        <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-green-500">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-600">Reclamos Resueltos</span>
            <Check className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-gray-800">{crmMetrics.resolved}</div>
        </div>

        {/* Métrica 3: Log de Interacción */}
        <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-blue-500">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-600">Log de Interacción</span>
            <Clock className="w-5 h-5 text-blue-500" />
          </div>
          <div 
            ref={logRef}
            className="space-y-1 max-h-20 overflow-y-auto text-xs text-gray-600"
          >
            {crmMetrics.log.map((entry, index) => (
              <div key={index} className="border-b border-gray-100 pb-1">
                <span className="font-semibold text-blue-600">[{entry.timestamp}]</span> {entry.message}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};