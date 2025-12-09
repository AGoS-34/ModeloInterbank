import React, { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';

export const ReclamoInputModal = ({ closeModal, logCrmAction, addTicketToList, source }) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [claimType, setClaimType] = useState('Transaccion');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !details) {
      alert("Por favor, complete el título y los detalles del reclamo.");
      return;
    }

    const ticketId = Math.floor(Math.random() * 900000) + 100000;
    
    addTicketToList({
      id: `T-${ticketId}`,
      title,
      details,
      type: claimType,
      status: 'Abierto',
      date: new Date().toLocaleDateString('es-ES'),
      source: source
    });

    logCrmAction(`[TICKET CREADO] T-${ticketId}: ${title} (Origen: ${source}).`);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6" />
            <h2 className="text-xl font-bold">Ingreso de Reclamo (Origen: {source})</h2>
          </div>
          <button onClick={closeModal} className="hover:bg-red-800 rounded-full p-2 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>El tipo de incidencia ya se ha clasificado como:</strong> {source}.
              <br />
              Complete los datos para generar el ticket.
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Título/Asunto
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ej: Cobro doble en app"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Categoría del Reclamo
            </label>
            <select
              value={claimType}
              onChange={(e) => setClaimType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none bg-white"
            >
              <option value="Transaccion">Transacción (PLIN/Transferencia/Cargo)</option>
              <option value="BancaDigital">Banca Digital/Servicio</option>
              <option value="CRM">CRM/Asignación</option>
              <option value="Otro">Otro/General</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Detalles y Observaciones
            </label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none resize-none h-24"
              placeholder="Detalle el monto, fecha y pasos si aplica."
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={closeModal}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:shadow-lg font-semibold transition-all"
            >
              Crear Ticket y Enviar a Seguimiento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};