/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { getLocalToken, setLocalToken, removeLocalToken, getRefreshToken, setRefreshToken, removeRefreshToken } from '@shared/utils/tokenStorage';
import axios from 'axios';
import { TAuthContextType, TUser } from './types';
import { decodeJWT, JwtPayload } from '@/shared/utils/jwt';
import { useNavigate } from 'react-router-dom';
import http from '@/shared/api/axios-client';

const AuthContext = createContext<TAuthContextType | undefined>({
  isAuthenticated: false,
  user: null,
  login: () => { },
  logout: () => { },
  refreshToken: () => Promise.resolve(null),
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshQueue, setRefreshQueue] = useState<(() => void)[]>([]);
  const [hasApiKey, setHasApiKey] = useState(false);
  const navigate = useNavigate();

 

  const decodeAndSetUser = useCallback((token: string) => {
    const decoded = decodeJWT<JwtPayload>(token);
    if (decoded) {
      setUser({
        email: decoded.email,
        fullName: decoded.fullName
      });
    }
  }, []);

  const login = async (user: TUser, token: string, refreshToken: string) => {
    setLocalToken(token);
    setRefreshToken(refreshToken);
    setIsAuthenticated(true);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    decodeAndSetUser(token);
  };

  const updateApiKeyStatus = (status: boolean) => {
    setHasApiKey(status);
  };

  const logout = () => {
    setUser(null);
    removeLocalToken();
    removeRefreshToken();
    setIsAuthenticated(false);
    delete axios.defaults.headers.common['Authorization'];
    navigate('/login');
  };

  const refreshAuthToken = useCallback(async (): Promise<string | null> => {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      logout();
      return null;
    }

    try {
      const response = await axios.post('/api/auth/v1/refresh', { refreshToken });
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
    }
  }, [logout, decodeAndSetUser]);

  const refreshTokenWrapper = useCallback(async () => {
    if (isRefreshing) {
      return new Promise<string | null>((resolve) => {
        refreshQueue.push(() => resolve(refreshAuthToken()));
      });
    }

    setIsRefreshing(true);
    try {
      const newToken = await refreshAuthToken();
      refreshQueue.forEach(cb => cb());
      setRefreshQueue([]);
      return newToken;
    } finally {
      setIsRefreshing(false);
    }
  }, [isRefreshing, refreshQueue, refreshAuthToken]);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = getLocalToken();
      const refreshToken = getRefreshToken();

      if (token && refreshToken) {
        const decoded = decodeJWT<JwtPayload>(token);
        if (decoded && decoded.exp * 1000 < Date.now()) {
          await refreshTokenWrapper();
        } else {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          setIsAuthenticated(true);
          decodeAndSetUser(token);
        }
      }
    };

    initializeAuth();
  }, [decodeAndSetUser]);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!isAuthenticated, refreshToken: refreshTokenWrapper }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
