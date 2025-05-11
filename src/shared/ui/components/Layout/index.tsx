import { Suspense } from 'react';

import { Loading } from '../Loading';

import * as UI from './Layout.styles';

import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { AuthModal } from '@shared/ui/components/Modals/AuthModal';
import GetStartedModal from '@shared/ui/components/Modals/GetStartedModal';
import { RegistrationForm } from '@shared/ui/components/Modals/RegistrationModal';
import MobileBottomNav from '../Navigation/components/MobileBottomNav';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={UI.darkTheme}>
      <ToastContainer position="top-right" autoClose={5000} theme="dark" />
        <UI.Layout>
          <GetStartedModal />
          <RegistrationForm />
          <AuthModal />
          <UI.Container>
            <Header />
            <UI.Wrapper isMobile={isMobile}>
              <Outlet />
            </UI.Wrapper>
            {isMobile && <MobileBottomNav />}
          </UI.Container>
        </UI.Layout>
      </ThemeProvider>
    </Suspense>
  );
};

export default Layout;
