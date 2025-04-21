// src/providers/AuthProvider.tsx
import { createContext, useContext, ReactNode } from 'react';

import { TAuthContextType } from './types';

const AuthContext = createContext<TAuthContextType>({
  isAuthenticated: false,
  user: null,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  //const { isAuthenticated, user } = useTypedSelector((state) => state.auth);

  return (
    <AuthContext.Provider value={{isAuthenticated: true, user: null}/*{ isAuthenticated, user }*/}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);