import { useAuth } from '@/app/providers/AuthProvider';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
};