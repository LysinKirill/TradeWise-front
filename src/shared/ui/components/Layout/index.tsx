import { Suspense, useState } from 'react';

import { Loading } from '../Loading';

import * as UI from './Layout.styles';

import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { AuthModal } from '@/shared/ui/components/modals/AuthModal';
import GetStartedModal from '@/shared/ui/components/modals/GetStartedModal';
import { RegistrationForm } from '@/shared/ui/components/modals/RegistrationModal';
import MobileBottomNav from '../Navigation/components/MobileBottomNav';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { ToastContainer } from 'react-toastify';
import { SplashScreen } from '../SplashScreen';
import { useAuth } from '@/app/providers/AuthProvider';

const Layout = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [showSplash, setShowSplash] = useState(true);
  const { isAuthenticated } = useAuth();

  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={UI.darkTheme}>
      <ToastContainer position="top-right" autoClose={5000} theme="dark" />
        <UI.Layout>
        {showSplash && <SplashScreen onHide={() => setShowSplash(false)} />}
          <GetStartedModal />
          <RegistrationForm />
          <AuthModal />
          <UI.Container>
            <Header />
            <UI.Wrapper isMobile={isMobile}>
              <Outlet />
            </UI.Wrapper>
            {isMobile && isAuthenticated && <MobileBottomNav />}
          </UI.Container>
        </UI.Layout>
      </ThemeProvider>
    </Suspense>
  );
};

export default Layout;
