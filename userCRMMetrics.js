import { useState } from 'react';

export const useCRMMetrics = () => {
  const [crmMetrics, setCrmMetrics] = useState({
    pending: 0,
    resolved: 0,
    log: [
      { timestamp: new Date().toLocaleTimeString('es-ES'), message: 'Sistema listo.' },
    ]
  });

  const logCrmAction = (message) => {
    const now = new Date().toLocaleTimeString('es-ES');
    setCrmMetrics(prev => ({
      ...prev,
      log: [{ timestamp: now, message }, ...prev.log].slice(0, 5)
    }));
  };

  const updateCrmMetrics = (updater) => {
    setCrmMetrics(updater);
  };

  return {
    crmMetrics,
    setCrmMetrics,
    logCrmAction,
    updateCrmMetrics
  };
};