import React, { createContext, useContext, useEffect, useState } from 'react';

type UserRole = 'user' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password?: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial check
    const stored = localStorage.getItem('nordic_user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setIsLoading(false);
  }, []);

  const login = (email: string) => {
    // Mock login logic: if email contains 'admin', make them an admin
    const isAdmin = email.toLowerCase().includes('admin');
    const newUser: User = {
      id: Math.random().toString(36).substring(7),
      name: email.split('@')[0],
      email,
      role: isAdmin ? 'admin' : 'user',
    };
    setUser(newUser);
    localStorage.setItem('nordic_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('nordic_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
