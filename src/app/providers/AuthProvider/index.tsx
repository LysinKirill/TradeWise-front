/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getLocalToken, setLocalToken, removeLocalToken } from '@shared/utils/tokenStorage';
import axios from 'axios';
import { TAuthContextType, TokenData, TUser } from './types';

const AuthContext = createContext<TAuthContextType | undefined>({
  isAuthenticated: false,
  user: null,
  login: () => { },
  logout: () => { },
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (user: TUser, tokenData: TokenData) => {
    setUser(user);
    setLocalToken(tokenData.accessToken);
    setIsAuthenticated(true);
    axios.defaults.headers.common['Authorization'] = `Bearer ${tokenData.accessToken}`;
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
      //TO DO: можно сделать запрос на проверку токена/профиля и установить user
      setIsAuthenticated(true);
    }
  }, []);

  //TO DO: set user data instead of isAuthenticated 
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
