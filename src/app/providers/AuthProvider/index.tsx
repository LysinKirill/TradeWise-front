/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { getLocalToken, setLocalToken, removeLocalToken } from '@shared/utils/tokenStorage';
import axios from 'axios';
import { TAuthContextType, TUser } from './types';
import { decodeJWT, JwtPayload } from '@/shared/utils/jwt';

const AuthContext = createContext<TAuthContextType | undefined>({
  isAuthenticated: false,
  user: null,
  login: () => { },
  logout: () => { },
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const decodeAndSetUser = useCallback((token: string) => {
    const decoded = decodeJWT<JwtPayload>(token);
    if (decoded) {
      setUser({
        email: decoded.email,
        fullName: decoded.fullName
      });
    }
  }, []);

  const login = (user: TUser, token: string) => {
    setLocalToken(token);
    setIsAuthenticated(true);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    decodeAndSetUser(token);
  };

  const logout = () => {
    setUser(null);
    removeLocalToken();
    setIsAuthenticated(false);
    delete axios.defaults.headers.common['Authorization'];
  };

  useEffect(() => {
    const token = getLocalToken();
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setIsAuthenticated(true);
      decodeAndSetUser(token);
    }
  }, [decodeAndSetUser]);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
