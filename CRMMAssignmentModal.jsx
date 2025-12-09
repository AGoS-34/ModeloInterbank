import React from 'react';
import { X, UserPlus, AlertTriangle } from 'lucide-react';

export const CRMAssignmentModal = ({ closeModal, logCrmAction }) => {
  const handleAssign = () => {
    logCrmAction(`[CRM] Cliente asignado manualmente (DNI XXXXXX).`);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <UserPlus className="w-6 h-6" />
            <h2 className="text-xl font-bold">Asignación Manual CRM</h2>
          </div>
          <button onClick={closeModal} className="hover:bg-purple-800 rounded-full p-2 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-yellow-800 mb-1">Uso Exclusivo</p>
              <p className="text-sm text-yellow-700">
                Utilice esta herramienta solo cuando el cliente no se asigne automáticamente al iniciar la interacción omnicanal.
              </p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tipo de Documento
            </label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white">
              <option>DNI</option>
              <option>RUC</option>
              <option>Carnet de Extranjería</option>
              <option>Pasaporte</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Número de Documento
            </label>
            <input
              type="text"
              placeholder="Ingrese el número de documento"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Motivo de Asignación Manual
            </label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white">
              <option>Seleccione un motivo...</option>
              <option>Error en identificación biométrica</option>
              <option>Cliente VIP / Banca Exclusiva</option>
              <option>Incidencia Técnica en CRM</option>
              <option>Atención por Apoderado</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Observaciones (Opcional)
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none h-20"
              placeholder="Ingrese observaciones adicionales..."
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={closeModal}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleAssign}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:shadow-lg font-semibold transition-all"
            >
              Asignar y Abrir CRM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};