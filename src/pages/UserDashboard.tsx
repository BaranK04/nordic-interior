import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { BookingService, Booking } from '../services/store';

export function UserDashboard() {
  const { user, isLoading } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    if (user) {
      setBookings(BookingService.getByUser(user.email).reverse());
    }
  }, [user]);

  if (isLoading) return null;
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  // If admin accidentally goes here, they can stay or be redirected. We let them stay for now.

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-orange-100 text-orange-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved': return 'Godkjent';
      case 'completed': return 'Fullført';
      case 'cancelled': return 'Kansellert';
      default: return 'Venter på svar';
    }
  };

  return (
    <div className="min-h-screen bg-nordic-bg pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-12">
            <h1 className="font-serif text-4xl mb-2">Velkommen, {user.name}</h1>
            <p className="text-nordic-muted font-light">Dine prosjekter og forespørsler.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-6">Mine Konsultasjoner</h2>
            
            {bookings.length === 0 ? (
              <div className="bg-white border border-black/5 p-12 text-center text-nordic-muted font-light rounded-3xl">
                Du har ingen aktive forespørsler. <br/>
                <a href="/#booking" className="inline-block mt-4 text-nordic-accent hover:underline">Bestill konsultasjon nå</a>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bookings.map((booking) => (
                  <div key={booking.id} className="bg-white border border-black/5 p-8 transition-shadow hover:shadow-lg rounded-3xl">
                    <div className="flex justify-between items-start mb-6">
                      <span className={`text-xs uppercase tracking-widest px-3 py-1 rounded-full font-medium ${getStatusColor(booking.status)}`}>
                        {getStatusText(booking.status)}
                      </span>
                      <span className="text-xs text-nordic-muted">
                        {new Date(booking.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-xl mb-2">{booking.projectType}</h3>
                    <p className="text-sm font-light text-nordic-muted mb-6 line-clamp-2">
                      {booking.message}
                    </p>
                    
                    <div className="pt-6 border-t border-black/5 flex flex-col gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-nordic-muted">Kontakt:</span>
                        <span>{booking.phone}</span>
                      </div>
                      {booking.budget && (
                        <div className="flex justify-between">
                          <span className="text-nordic-muted">Budsjett:</span>
                          <span>{booking.budget}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
