
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../core/constants/routes';


const Root = lazy(() => import('./root'));

const Routing = () => (
  <Routes>
    <Route path={ROUTES.ROOT} element={<Root />} />
    <Route path="*" element={<Navigate to={ROUTES.ROOT} />} />
  </Routes>
);

export default Routing;
