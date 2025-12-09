import { useState } from 'react';

export const useTickets = (setCrmMetrics, logCrmAction) => {
  const [ticketsList, setTicketsList] = useState([]);

  const addTicketToList = (newTicket) => {
    setTicketsList(prev => [newTicket, ...prev]);
    setCrmMetrics(prev => ({
      ...prev,
      pending: prev.pending + 1
    }));
  };

  const handleResolveTicket = (ticketId) => {
    setTicketsList(prev => 
      prev.map(ticket => 
        ticket.id === ticketId ? { ...ticket, status: 'Resuelto' } : ticket
      )
    );
    setCrmMetrics(prev => ({
      ...prev,
      pending: prev.pending - 1,
      resolved: prev.resolved + 1
    }));
    logCrmAction(`[TICKET RESUELTO] ${ticketId} marcado como resuelto.`);
  };

  return {
    ticketsList,
    setTicketsList,
    addTicketToList,
    handleResolveTicket
  };
};
