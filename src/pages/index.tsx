import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ROUTES } from '../shared/constants/routes';
import Layout from '../shared/ui/components/Layout';
import { Loading } from '../shared/ui/components/Loading';
import { WelcomeWrapper } from './welcome';

// Lazy load all page components
const Root = lazy(() => import('./root'));
const Dashboard = lazy(() => import('./dashboard'));
const Strategies = lazy(() => import('./strategies'));
const Research = lazy(() => import('./research'));
const Backtesting = lazy(() => import('./backtesting'));
const LiveTrading = lazy(() => import('./liveTrading'));
const Data = lazy(() => import('./data'));
const Profile = lazy(() => import('./profile'));
const Settings = lazy(() => import('./settings'));

const Routing = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route element={<Layout />}>
        <Route index path={ROUTES.ROOT} element={<Root />} />

        {/* Authenticated routes */}
        <Route element={<WelcomeWrapper isMobile={false} />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.STRATEGIES} element={<Strategies />} />
          <Route path={ROUTES.RESEARCH} element={<Research />} />
          <Route path={ROUTES.BACKTESTING} element={<Backtesting />} />
          <Route path={ROUTES.LIVETRADING} element={<LiveTrading />} />
          <Route path={ROUTES.DATA} element={<Data />} />
        </Route>

        {/* Other routes */}
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
        <Route path="*" element={<Navigate to={ROUTES.ROOT} />} />
      </Route>
    </Routes>
  </Suspense>
);

export default Routing;