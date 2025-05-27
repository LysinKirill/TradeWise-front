/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { getLocalToken, setLocalToken, removeLocalToken, getRefreshToken, setRefreshToken } from '@shared/utils/tokenStorage';
import axios from 'axios';
import { TAuthContextType, TUser } from './types';
import { decodeJWT, JwtPayload } from '@/shared/utils/jwt';

const AuthContext = createContext<TAuthContextType | undefined>({
  isAuthenticated: false,
  user: null,
  login: () => { },
  logout: () => { },
  refreshToken: '',
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

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
    console.log(token);
    setLocalToken(token);
    setIsAuthenticated(true);
    //setRefreshToken(refreshToken);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    decodeAndSetUser(token);
  };

  const logout = () => {
    setUser(null);
    removeLocalToken();
    setIsAuthenticated(false);
    delete axios.defaults.headers.common['Authorization'];
  };

  const refreshToken = useCallback(async (): Promise<string | null> => {
    if (isRefreshing) return null;
    
    try {
      setIsRefreshing(true);
      const refreshToken = getRefreshToken();
      if (!refreshToken) {
        logout();
        return null;
      }

      const response = await axios.post('/api/v1/refresh', { refreshToken });
      const newToken = response.data.accessToken;
      const newRefreshToken = response.data.refreshToken;

      setLocalToken(newToken);
      setRefreshToken(newRefreshToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
      decodeAndSetUser(newToken);
      
      return newToken;
    } catch (error) {
      console.error('Token refresh failed:', error);
      logout();
      return null;
    } finally {
      setIsRefreshing(false);
    }
  }, [isRefreshing, logout, decodeAndSetUser]);

  useEffect(() => {
    const token = getLocalToken();
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setIsAuthenticated(true);
      decodeAndSetUser(token);
    }
  }, [decodeAndSetUser]);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
