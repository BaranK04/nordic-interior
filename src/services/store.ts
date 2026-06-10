export interface Booking {
  id: string;
  userId: string;
  userEmail: string;
  name: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  preferredDate: string;
  status: 'pending' | 'approved' | 'completed' | 'cancelled';
  createdAt: string;
}

// LocalStorage key
const BOOKINGS_KEY = 'nordic_bookings';

export const BookingService = {
  getAll: (): Booking[] => {
    const data = localStorage.getItem(BOOKINGS_KEY);
    return data ? JSON.parse(data) : [];
  },
  
  getByUser: (email: string): Booking[] => {
    return BookingService.getAll().filter(b => b.userEmail === email);
  },
  
  add: (booking: Omit<Booking, 'id' | 'status' | 'createdAt'>): Booking => {
    const newBooking: Booking = {
      ...booking,
      id: Math.random().toString(36).substring(7),
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    const bookings = BookingService.getAll();
    bookings.push(newBooking);
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    return newBooking;
  },

  updateStatus: (id: string, status: Booking['status']) => {
    const bookings = BookingService.getAll();
    const index = bookings.findIndex(b => b.id === id);
    if (index > -1) {
      bookings[index].status = status;
      localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    }
  }
};
