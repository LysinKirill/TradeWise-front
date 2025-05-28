/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../AuthProvider';

interface InvestApiContextType {
  isApiKeyLinked: boolean;
  linkApiKey: () => void;
}

const InvestApiContext = createContext<InvestApiContextType>({
  isApiKeyLinked: false,
  linkApiKey: () => {},
});

export const InvestApiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isApiKeyLinked, setIsApiKeyLinked] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isApiKeyLinked || !isAuthenticated) {
      toast.info('Please link your investment API key to access all features', {
        toastId: 'api-key-reminder',
        autoClose: false,
        position: 'top-center',
        style: { marginBottom: '2rem' },
      });
    } else {
      toast.dismiss('api-key-reminder');
    }

    return () => toast.dismiss('api-key-reminder');
  }, [isApiKeyLinked]);

  return (
    <InvestApiContext.Provider value={{ isApiKeyLinked, linkApiKey: () => setIsApiKeyLinked(true)}}>
      {children}
    </InvestApiContext.Provider>
  );
};

export const useInvestApi = () => useContext(InvestApiContext);