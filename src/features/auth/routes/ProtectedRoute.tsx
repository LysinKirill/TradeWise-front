import { useAuth } from '@/app/providers/AuthProvider';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};