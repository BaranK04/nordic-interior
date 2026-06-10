import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { BookingService, Booking } from '../services/store';

export function AdminDashboard() {
  const { user, isLoading } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    setBookings(BookingService.getAll().reverse());
  }, []);

  const updateStatus = (id: string, status: Booking['status']) => {
    BookingService.updateStatus(id, status);
    setBookings(BookingService.getAll().reverse());
  };

  if (isLoading) return null;
  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-nordic-bg pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h1 className="font-serif text-4xl mb-2">Administrator</h1>
              <p className="text-nordic-muted font-light">Oversikt over alle konsultasjonsforespørsler.</p>
            </div>
            <div className="text-sm border border-black/10 px-4 py-2 bg-white">
              Logget inn som: <span className="font-medium text-nordic-accent">{user.email}</span>
            </div>
          </div>

          <div className="bg-white border border-black/5 rounded-3xl overflow-hidden shadow-sm">
            {bookings.length === 0 ? (
              <div className="p-12 text-center text-nordic-muted font-light">
                Ingen bestillinger funnet.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-black/5 text-xs uppercase tracking-widest text-nordic-muted">
                      <th className="p-6 font-medium">Dato</th>
                      <th className="p-6 font-medium">Kunde</th>
                      <th className="p-6 font-medium">Type / Budsjett</th>
                      <th className="p-6 font-medium">Melding</th>
                      <th className="p-6 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-black/5 hover:bg-black/[0.01]">
                        <td className="p-6 text-sm whitespace-nowrap">
                          {new Date(booking.createdAt).toLocaleDateString()}
                        </td>
                        <td className="p-6">
                          <div className="font-medium">{booking.name}</div>
                          <div className="text-xs text-nordic-muted mt-1">{booking.userEmail}</div>
                          <div className="text-xs text-nordic-muted">{booking.phone}</div>
                        </td>
                        <td className="p-6">
                          <div className="text-sm">{booking.projectType}</div>
                          <div className="text-xs text-nordic-muted mt-1">{booking.budget || 'Ikke oppgitt'}</div>
                        </td>
                        <td className="p-6 max-w-xs">
                          <p className="text-sm font-light truncate" title={booking.message}>{booking.message}</p>
                        </td>
                        <td className="p-6">
                          <select 
                            value={booking.status}
                            onChange={(e) => updateStatus(booking.id, e.target.value as Booking['status'])}
                            className="bg-transparent border border-black/10 text-sm p-2 outline-none"
                          >
                            <option value="pending">Venter</option>
                            <option value="approved">Godkjent</option>
                            <option value="completed">Fullført</option>
                            <option value="cancelled">Kansellert</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
